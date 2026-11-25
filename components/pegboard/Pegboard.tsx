import { motion, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";
import {
	type PointerEvent as ReactPointerEvent,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	useSyncExternalStore,
} from "react";

import {
	BADGE_PEG,
	PEG_BOARD,
	PEG_CARDS,
	PEG_REST_TOP,
	type PegCard,
} from "../../data/pegboard";
import { cn } from "../../lib/cn";
import { Icon } from "../Icon";
import { PegCards } from "./registry";
import {
	readBadgeAside,
	releaseTarget,
	StatusBadge,
	subscribeBadgeAside,
	swingBadge,
	writeBadgeAside,
} from "./StatusBadge";
import { cardInView, clampPan, keepPegInView, PARK_ANGLE } from "./swing";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const PAN_STEP = 88;
const BOARD_GUTTER = 96;

export function Pegboard() {
	const panX = useMotionValue(0);
	const panY = useMotionValue(0);
	const angle = useMotionValue(0);
	const viewportRef = useRef<HTMLDivElement>(null);
	const pegRef = useRef<HTMLDivElement>(null);
	const swing = useRef<{ stop: () => void } | null>(null);
	const panSession = useRef<{
		id: number;
		px: number;
		py: number;
		x: number;
		y: number;
	} | null>(null);
	const aside = useSyncExternalStore(
		subscribeBadgeAside,
		readBadgeAside,
		() => false,
	);
	const [panning, setPanning] = useState(false);
	const [visibleCards, setVisibleCards] = useState<PegCard[]>([]);
	const reduced = usePrefersReducedMotion();

	const swingTo = useCallback(
		(target: number, velocity = 0) => {
			writeBadgeAside(target !== 0);
			swing.current?.stop();
			if (reduced) {
				angle.set(0);
				return;
			}
			swingBadge(angle, target, velocity, swing);
		},
		[angle, reduced],
	);

	useLayoutEffect(() => {
		if (!readBadgeAside()) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		angle.set(PARK_ANGLE);
	}, [angle]);

	useEffect(() => {
		if (!reduced) return;
		swing.current?.stop();
		angle.set(0);
	}, [angle, reduced]);

	useEffect(() => {
		const previousHtml = document.documentElement.style.overflow;
		const previousBody = document.body.style.overflow;
		document.documentElement.style.overflow = "hidden";
		document.body.style.overflow = "hidden";
		return () => {
			document.documentElement.style.overflow = previousHtml;
			document.body.style.overflow = previousBody;
		};
	}, []);

	useLayoutEffect(() => {
		const element = viewportRef.current;
		if (!element) return;

		const fit = () => {
			const viewport = {
				height: element.clientHeight,
				width: element.clientWidth,
			};
			const next = keepPegInView(
				panX.get(),
				panY.get(),
				viewport,
				PEG_BOARD,
				BADGE_PEG,
				PEG_REST_TOP,
				BOARD_GUTTER,
			);
			panX.set(next.x);
			panY.set(next.y);
		};

		fit();
		const observer = new ResizeObserver(fit);
		observer.observe(element);
		return () => observer.disconnect();
	}, [panX, panY]);

	useEffect(() => {
		const element = viewportRef.current;
		if (!element) return;

		const onWheel = (event: WheelEvent) => {
			event.preventDefault();
			const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 800 : 1;
			let dx = event.deltaX * scale;
			let dy = event.deltaY * scale;
			if (event.shiftKey && dx === 0) {
				dx = dy;
				dy = 0;
			}
			const next = clampPan(
				panX.get() - dx,
				panY.get() - dy,
				{ height: element.clientHeight, width: element.clientWidth },
				PEG_BOARD,
				BADGE_PEG,
				PEG_REST_TOP,
				BOARD_GUTTER,
			);
			panX.set(next.x);
			panY.set(next.y);
		};

		element.addEventListener("wheel", onWheel, { passive: false });
		return () => element.removeEventListener("wheel", onWheel);
	}, [panX, panY]);

	useEffect(() => {
		if (PEG_CARDS.length === 0) return;

		let frame = 0;
		const update = () => {
			frame = 0;
			const element = viewportRef.current;
			if (!element) return;
			const viewport = {
				height: element.clientHeight,
				width: element.clientWidth,
			};
			const next = PEG_CARDS.filter((card) =>
				cardInView(
					card,
					panX.get(),
					panY.get(),
					viewport,
					BADGE_PEG,
					PEG_REST_TOP,
				),
			);
			setVisibleCards((current) => {
				if (
					current.length === next.length &&
					current.every((card, index) => card === next[index])
				) {
					return current;
				}
				return next;
			});
		};
		const schedule = () => {
			if (frame) return;
			frame = window.requestAnimationFrame(update);
		};
		const stopX = panX.on("change", schedule);
		const stopY = panY.on("change", schedule);
		update();
		return () => {
			stopX();
			stopY();
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, [panX, panY]);

	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			if (isTypingTarget(event.target)) return;

			if (event.key === "Escape") {
				event.preventDefault();
				swingTo(aside ? 0 : PARK_ANGLE);
				return;
			}

			const step = event.shiftKey ? PAN_STEP * 2 : PAN_STEP;
			let dx = 0;
			let dy = 0;
			if (event.key === "ArrowLeft") dx = step;
			else if (event.key === "ArrowRight") dx = -step;
			else if (event.key === "ArrowUp") dy = step;
			else if (event.key === "ArrowDown") dy = -step;
			else return;

			event.preventDefault();
			const element = viewportRef.current;
			if (!element) return;
			const next = clampPan(
				panX.get() + dx,
				panY.get() + dy,
				{ height: element.clientHeight, width: element.clientWidth },
				PEG_BOARD,
				BADGE_PEG,
				PEG_REST_TOP,
				BOARD_GUTTER,
			);
			panX.set(next.x);
			panY.set(next.y);
		};

		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [aside, panX, panY, swingTo]);

	const startPan = (event: ReactPointerEvent<HTMLDivElement>) => {
		if (event.button !== 0) return;
		const target = event.target;
		if (!(target instanceof Element)) return;
		if (target.closest("[data-badge], [data-chrome]")) return;

		panSession.current = {
			id: event.pointerId,
			px: panX.get(),
			py: panY.get(),
			x: event.clientX,
			y: event.clientY,
		};
		setPanning(true);
		event.currentTarget.setPointerCapture(event.pointerId);
	};

	const movePan = (event: ReactPointerEvent<HTMLDivElement>) => {
		const session = panSession.current;
		if (!session || session.id !== event.pointerId) return;
		const element = viewportRef.current;
		if (!element) return;
		const next = clampPan(
			session.px + event.clientX - session.x,
			session.py + event.clientY - session.y,
			{ height: element.clientHeight, width: element.clientWidth },
			PEG_BOARD,
			BADGE_PEG,
			PEG_REST_TOP,
			BOARD_GUTTER,
		);
		panX.set(next.x);
		panY.set(next.y);
	};

	const endPan = (event: ReactPointerEvent<HTMLDivElement>) => {
		if (!panSession.current || panSession.current.id !== event.pointerId) return;
		panSession.current = null;
		setPanning(false);
	};

	return (
		<div
			aria-describedby="pegboard-help"
			aria-label="Pegboard"
			className={cn(
				"fixed inset-0 overflow-hidden overscroll-none bg-alloyZinc-400 text-text touch-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-700 focus-visible:-outline-offset-4 dark:bg-black",
				panning ? "cursor-grabbing" : "cursor-grab",
			)}
			onPointerCancel={endPan}
			onPointerDown={startPan}
			onPointerMove={movePan}
			onPointerUp={endPan}
			ref={viewportRef}
			role="region"
			tabIndex={0}
		>
			<p className="sr-only" id="pegboard-help">
				Empty pegboard. Drag to pan. Arrow keys pan while this page is open.
				Escape hooks the badge aside.
			</p>

			<motion.div
				className="absolute bg-alloyZinc-100 shadow-[0_0_0_1px_rgba(0,0,0,0.16)] dark:bg-alloyZinc-900"
				style={{
					height: PEG_BOARD.height,
					left: "50%",
					marginLeft: -BADGE_PEG.x,
					top: PEG_REST_TOP - BADGE_PEG.y,
					width: PEG_BOARD.width,
					x: panX,
					y: panY,
				}}
			>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 dark:hidden"
					style={{
						backgroundImage:
							"radial-gradient(circle, rgba(0,0,0,0.55) 1.35px, rgba(0,0,0,0.18) 2.15px, transparent 2.8px)",
						backgroundSize: "40px 40px",
					}}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 hidden dark:block"
					style={{
						backgroundImage:
							"radial-gradient(circle, #09090b 1.7px, #d4d4d8 2.55px, transparent 3.45px)",
						backgroundSize: "40px 40px",
					}}
				/>

				<PegCards cards={visibleCards} />

				<div
					aria-hidden
					className="absolute z-20 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/35 shadow-[inset_0_2px_3px_rgba(0,0,0,0.65)]"
					style={{ left: BADGE_PEG.x, top: BADGE_PEG.y }}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute z-30 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-alloyZinc-600 bg-gradient-to-b from-alloyZinc-100 to-alloyZinc-500 shadow-[0_1px_1px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.85)]"
					ref={pegRef}
					style={{ left: BADGE_PEG.x, top: BADGE_PEG.y }}
				/>

				<StatusBadge
					angle={angle}
					aside={aside}
					onDragEnd={(current, velocity) =>
						swingTo(releaseTarget(current, velocity), velocity)
					}
					onDragStart={() => swing.current?.stop()}
					pegRef={pegRef}
					reduced={reduced}
				/>
			</motion.div>

			<div
				className="pointer-events-none absolute inset-0 z-40"
				data-chrome=""
				onPointerDown={(event) => event.stopPropagation()}
			>
				<ThemeToggle />
				{aside ? null : (
					<p className="pointer-events-none absolute top-[max(0.85rem,env(safe-area-inset-top))] left-4 max-w-[10rem] text-[11px] leading-snug text-textDimmed">
						Drag the board to pan
					</p>
				)}
				<button
					className="pointer-events-auto absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 min-h-12 -translate-x-1/2 rounded-full bg-primary-400 px-5 text-sm font-medium text-primary-950 shadow-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
					onClick={() => swingTo(aside ? 0 : PARK_ANGLE)}
					type="button"
				>
					{aside ? "Hook badge back" : "Hook aside"}
				</button>
			</div>
		</div>
	);
}

function subscribeToNothing() {
	return () => {};
}

function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const ready = useSyncExternalStore(subscribeToNothing, () => true, () => false);

	const isDark = ready && resolvedTheme === "dark";

	return (
		<button
			aria-label="Switch colour theme"
			className="pointer-events-auto absolute top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] flex h-11 w-11 items-center justify-center rounded-full bg-bgRaised text-text shadow-paper ring-1 ring-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:ring-white/15"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			type="button"
		>
			{ready ? <Icon className="h-5 w-5" name={isDark ? "light" : "dark"} /> : null}
		</button>
	);
}

function isTypingTarget(target: EventTarget | null) {
	if (!(target instanceof HTMLElement)) return false;
	const tag = target.tagName;
	return (
		tag === "INPUT" ||
		tag === "TEXTAREA" ||
		tag === "SELECT" ||
		target.isContentEditable
	);
}
