/** Degrees the badge rests at once it has been hooked aside. */
export const PARK_ANGLE = 68;

/** Hard stop while the pointer is holding the badge, so it cannot flip over the peg. */
export const DRAG_LIMIT = 80;

const RETURN_VELOCITY = 220;
const PARK_ANGLE_THRESHOLD = 46;
const PARK_VELOCITY = 460;
const MAX_FLICK_VELOCITY = 640;

export interface SwingSpring {
	damping: number;
	mass: number;
	restDelta: number;
	restSpeed: number;
	stiffness: number;
	type: "spring";
}

export const SWING_SPRING: SwingSpring = {
	damping: 18,
	mass: 0.7,
	restDelta: 0.5,
	restSpeed: 4,
	stiffness: 170,
	type: "spring",
};

export function clamp(value: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, value));
}

/**
 * Angle of the lanyard from straight down, in degrees.
 * Positive is to the right of the peg. Pointers above the peg are ignored
 * so the badge cannot whip over the top.
 */
export function angleFromPointer(
	clientX: number,
	clientY: number,
	pegX: number,
	pegY: number,
): number {
	const dx = clientX - pegX;
	const dy = clientY - pegY;
	const radians = Math.atan2(dx, Math.max(dy, 12));
	return clamp((radians * 180) / Math.PI, -DRAG_LIMIT, DRAG_LIMIT);
}

/**
 * Where the spring should settle after a drag.
 * `null` means swing back to centre. A number means hook aside on that side.
 */
export function settleAngle(angle: number, velocity: number): number | null {
	const flickingHome =
		Math.abs(velocity) > RETURN_VELOCITY &&
		Math.abs(angle) > 8 &&
		Math.sign(velocity) !== Math.sign(angle);

	if (flickingHome) return null;

	if (Math.abs(angle) > PARK_ANGLE_THRESHOLD || Math.abs(velocity) > PARK_VELOCITY) {
		const sign = Math.sign(velocity || angle || 1);
		return sign * PARK_ANGLE;
	}

	return null;
}

export function flickVelocity(velocity: number): number {
	return clamp(velocity, -MAX_FLICK_VELOCITY, MAX_FLICK_VELOCITY);
}

export interface CameraSize {
	height: number;
	width: number;
}

/**
 * Extra pan, in pixels, on top of the rest framing (peg near the top centre).
 * The world cannot be dragged into empty space past its finite bound.
 */
export function clampPan(
	panX: number,
	panY: number,
	viewport: CameraSize,
	board: CameraSize,
	peg: { x: number; y: number },
	pegRestTop: number,
	gutter = 0,
): { x: number; y: number } {
	if (viewport.width <= 0 || viewport.height <= 0) {
		return { x: panX, y: panY };
	}

	const baseX = viewport.width / 2 - peg.x;
	const baseY = pegRestTop - peg.y;
	const centeredX = (viewport.width - board.width) / 2;
	const centeredY = (viewport.height - board.height) / 2;
	const minX = (viewport.width >= board.width ? centeredX : viewport.width - board.width) - gutter;
	const maxX = (viewport.width >= board.width ? centeredX : 0) + gutter;
	const minY = (viewport.height >= board.height ? centeredY : viewport.height - board.height) - gutter;
	const maxY = (viewport.height >= board.height ? centeredY : 0) + gutter;

	return {
		x: clamp(baseX + panX, minX, maxX) - baseX,
		y: clamp(baseY + panY, minY, maxY) - baseY,
	};
}

/** Pulls the peg back inside the viewport after a resize, without fighting a deliberate pan. */
export function keepPegInView(
	panX: number,
	panY: number,
	viewport: CameraSize,
	board: CameraSize,
	peg: { x: number; y: number },
	pegRestTop: number,
	gutter = 0,
	margin = 28,
): { x: number; y: number } {
	const next = clampPan(panX, panY, viewport, board, peg, pegRestTop, gutter);
	let x = next.x;
	let y = next.y;
	const pegX = viewport.width / 2 + x;
	const pegY = pegRestTop + y;

	if (pegX < margin) x += margin - pegX;
	else if (pegX > viewport.width - margin) x -= pegX - (viewport.width - margin);

	if (pegY < margin) y += margin - pegY;
	else if (pegY > viewport.height - margin) y -= pegY - (viewport.height - margin);

	return clampPan(x, y, viewport, board, peg, pegRestTop, gutter);
}

/** True when a card's box intersects the viewport, plus a margin for lazy mount. */
export function cardInView(
	card: { h: number; w: number; x: number; y: number },
	panX: number,
	panY: number,
	viewport: CameraSize,
	peg: { x: number; y: number },
	pegRestTop: number,
	margin = 280,
): boolean {
	const originX = viewport.width / 2 - peg.x + panX;
	const originY = pegRestTop - peg.y + panY;
	const left = originX + card.x;
	const top = originY + card.y;

	return (
		left + card.w > -margin &&
		top + card.h > -margin &&
		left < viewport.width + margin &&
		top < viewport.height + margin
	);
}
