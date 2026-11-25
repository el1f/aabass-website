import { animate, motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import {
	type PointerEvent as ReactPointerEvent,
	type RefObject,
	useEffect,
	useRef,
	useState,
} from "react";

import { BADGE_PEG } from "../../data/pegboard";
import LogoMark from "../../public/brand/logo_mark.svg";
import { Icon } from "../Icon";
import {
	angleFromPointer,
	flickVelocity,
	settleAngle,
	SWING_SPRING,
	type SwingSpring,
} from "./swing";

const BADGE_WIDTH = 292;
const ASIDE_KEY = "aabass.badgeHookedAside";
const ASIDE_EVENT = "aabass-badge-aside";

const LONDON_TIME = new Intl.DateTimeFormat("en-GB", {
	hour: "2-digit",
	hourCycle: "h23",
	minute: "2-digit",
	second: "2-digit",
	timeZone: "Europe/London",
});

const SOCIALS = [
	{
		href: "https://x.com/el1flem",
		label: "X",
		platform: "x",
	},
	{
		href: "https://www.linkedin.com/in/el1flem",
		label: "LinkedIn",
		platform: "linkedin",
	},
	{
		href: "https://github.com/el1f",
		label: "GitHub",
		platform: "github",
	},
	{
		href: "https://www.instagram.com/eliflem_design/",
		label: "Instagram",
		platform: "instagram",
	},
	{
		href: "https://dribbble.com/el1flem",
		label: "Dribbble",
		platform: "dribbble",
	},
] as const;

type SocialPlatform = (typeof SOCIALS)[number]["platform"];

export function readBadgeAside(): boolean {
	try {
		return sessionStorage.getItem(ASIDE_KEY) === "1";
	} catch {
		return false;
	}
}

export function writeBadgeAside(aside: boolean) {
	try {
		sessionStorage.setItem(ASIDE_KEY, aside ? "1" : "0");
	} catch {
		// Private mode can reject storage. The badge still moves for this view.
	}
	window.dispatchEvent(new Event(ASIDE_EVENT));
}

export function subscribeBadgeAside(onChange: () => void) {
	window.addEventListener(ASIDE_EVENT, onChange);
	return () => window.removeEventListener(ASIDE_EVENT, onChange);
}

interface StatusBadgeProps {
	angle: ReturnType<typeof useMotionValue<number>>;
	aside: boolean;
	onDragEnd: (angle: number, velocity: number) => void;
	onDragStart: () => void;
	pegRef: RefObject<HTMLDivElement | null>;
	reduced: boolean;
}

export function swingBadge(
	angle: ReturnType<typeof useMotionValue<number>>,
	target: number,
	velocity: number,
	running: { current: { stop: () => void } | null },
) {
	running.current?.stop();
	running.current = animate(angle, target, {
		...SWING_SPRING,
		velocity: flickVelocity(velocity),
	} satisfies SwingSpring & { velocity: number });
}

export function StatusBadge({
	angle,
	aside,
	onDragEnd,
	onDragStart,
	pegRef,
	reduced,
}: StatusBadgeProps) {
	const dragging = useRef(false);
	const session = useRef<{ active: boolean; x: number; y: number } | null>(
		null,
	);
	const samples = useRef<{ a: number; t: number }[]>([]);
	const tiltXTarget = useMotionValue(0);
	const tiltYTarget = useMotionValue(0);
	const tiltX = useSpring(tiltXTarget, { damping: 18, mass: 0.4, stiffness: 220 });
	const tiltY = useSpring(tiltYTarget, { damping: 18, mass: 0.4, stiffness: 220 });

	if (reduced && aside) return null;

	const readAngle = (clientX: number, clientY: number) => {
		const peg = pegRef.current?.getBoundingClientRect();
		if (!peg) return angle.get();
		return angleFromPointer(
			clientX,
			clientY,
			peg.left + peg.width / 2,
			peg.top + peg.height / 2,
		);
	};

	const remember = (next: number) => {
		const now = performance.now();
		const list = samples.current;
		list.push({ a: next, t: now });
		const cutoff = now - 90;
		while (list.length > 2 && list[0].t < cutoff) list.shift();
	};

	const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
		if (reduced || aside || event.button !== 0) return;
		const target = event.target;
		if (target instanceof Element && target.closest("a, button")) return;

		event.stopPropagation();
		event.preventDefault();
		session.current = { active: false, x: event.clientX, y: event.clientY };
		samples.current = [];
		event.currentTarget.setPointerCapture(event.pointerId);
	};

	const moveDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
		const current = session.current;
		if (!current || reduced) return;

		if (!current.active) {
			const dx = event.clientX - current.x;
			const dy = event.clientY - current.y;
			if (dx * dx + dy * dy < 36) return;
			current.active = true;
			dragging.current = true;
			onDragStart();
		}

		const next = readAngle(event.clientX, event.clientY);
		remember(next);
		angle.set(next);
	};

	const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
		const current = session.current;
		session.current = null;
		dragging.current = false;
		tiltXTarget.set(0);
		tiltYTarget.set(0);

		if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
			event.currentTarget.releasePointerCapture(event.pointerId);
		}

		if (!current?.active) return;

		const list = samples.current;
		let velocity = 0;
		if (list.length >= 2) {
			const first = list[0];
			const last = list[list.length - 1];
			const dt = (last.t - first.t) / 1000;
			if (dt > 0.001) velocity = (last.a - first.a) / dt;
		}

		onDragEnd(angle.get(), velocity);
	};

	const tilt = (event: ReactPointerEvent<HTMLDivElement>) => {
		if (reduced || dragging.current || event.pointerType !== "mouse") return;
		const rect = event.currentTarget.getBoundingClientRect();
		const px = (event.clientX - rect.left) / rect.width - 0.5;
		const py = (event.clientY - rect.top) / rect.height - 0.5;
		tiltYTarget.set(px * 8);
		tiltXTarget.set(py * -6);
	};

	const resetTilt = () => {
		tiltXTarget.set(0);
		tiltYTarget.set(0);
	};

	return (
		<motion.div
			className="absolute z-10 cursor-grab touch-none select-none active:cursor-grabbing"
			data-badge=""
			onPointerCancel={endDrag}
			onPointerDown={startDrag}
			onPointerMove={moveDrag}
			onPointerUp={endDrag}
			style={{
				left: BADGE_PEG.x - BADGE_WIDTH / 2,
				originX: 0.5,
				originY: 0,
				pointerEvents: aside ? "none" : "auto",
				rotate: reduced ? 0 : angle,
				top: BADGE_PEG.y,
				width: BADGE_WIDTH,
			}}
		>
			<div
				aria-hidden
				className="mx-auto h-28 w-4 rounded-sm bg-primary-400 shadow-[inset_3px_0_0_rgba(255,255,255,0.45),inset_-3px_0_0_rgba(32,46,5,0.28)]"
				style={{
					backgroundImage:
						"repeating-linear-gradient(180deg, transparent 0 9px, rgba(32,46,5,0.16) 9px 11px)",
				}}
			/>
			<div
				aria-hidden
				className="mx-auto -mt-1 h-3.5 w-7 rounded-sm border border-alloyZinc-500 bg-gradient-to-b from-alloyZinc-100 to-alloyZinc-400 shadow-sm"
			/>

			<motion.div
				onPointerLeave={resetTilt}
				onPointerMove={tilt}
				style={{
					perspective: 900,
					rotateX: reduced ? 0 : tiltX,
					rotateY: reduced ? 0 : tiltY,
				}}
			>
				<article
					aria-label="Eliflem company badge"
					className="overflow-hidden rounded-2xl bg-bgRaised text-text shadow-[0_18px_40px_-16px_rgba(0,0,0,0.45)] ring-1 ring-black/10 dark:ring-white/10"
				>
					<header className="flex items-center justify-between bg-primary-300 px-3 py-2 text-primary-950">
						<span className="flex items-center gap-2 font-display text-[13px] font-semibold tracking-[0.16em] uppercase">
							<LogoMark aria-hidden className="h-4 w-4" />
							Eliflem
						</span>
						<span className="font-mono text-[10px] tracking-[0.18em] uppercase">
							ID
						</span>
					</header>

					<div className="px-3.5 pt-3.5 pb-3">
						<div className="flex gap-3">
							<div className="relative h-28 w-[5.25rem] shrink-0 overflow-hidden rounded-lg bg-alloyZinc-200 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.14)]">
								<Image
									alt="Portrait of Ayoub Aabass"
									className="object-cover object-[center_18%]"
									draggable={false}
									fill
									priority
									sizes="84px"
									src="/me/about.jpg"
								/>
							</div>
							<div className="min-w-0 pt-0.5">
								<h1 className="font-display text-[1.45rem] leading-[1.05] font-semibold tracking-tight text-text">
									Ayoub Aabass
								</h1>
								<p className="mt-1.5 text-sm font-medium text-primary-800 dark:text-primary-300">
									Product Engineer
								</p>
							</div>
						</div>

						<div className="mt-3 space-y-1.5 text-[13.5px] leading-snug text-text">
							<p>
								Product engineer in London, obsessing over corner radii and
								clean pixels.
							</p>
							<p>Previously Member of Technical Staff at SpaceXAI.</p>
							<p className="font-medium">
								<span
									aria-hidden
									className="mr-1.5 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-primary-500"
								/>
								Currently sidequestmaxxing
							</p>
						</div>

						<LondonClock />

						<a
							className="mt-3 block text-sm text-text underline decoration-primary-500 underline-offset-4 select-text hover:decoration-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
							href="mailto:ayoub@aabass.net"
						>
							ayoub@aabass.net
						</a>

						<ul className="mt-2 flex flex-wrap gap-1">
							{SOCIALS.map((social) => (
								<li key={social.platform}>
									<a
										aria-label={`${social.label} (opens in a new tab)`}
										className="flex h-10 w-10 items-center justify-center rounded-xl text-textDimmed hover:bg-black/5 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:hover:bg-white/10"
										href={social.href}
										rel="noreferrer"
										target="_blank"
									>
										<SocialGlyph platform={social.platform} />
									</a>
								</li>
							))}
						</ul>

						{reduced ? null : (
							<p className="mt-2 text-center text-[11px] text-textDimmed">
								Drag or flick to swing
							</p>
						)}
					</div>
				</article>
			</motion.div>
		</motion.div>
	);
}

function LondonClock() {
	const [now, setNow] = useState(() => new Date());

	useEffect(() => {
		const tick = () => setNow(new Date());
		tick();
		const id = window.setInterval(tick, 1000);
		return () => window.clearInterval(id);
	}, []);

	return (
		<div className="mt-3 flex items-baseline justify-between gap-3 border-t border-primary-300/80 pt-3">
			<span className="font-mono text-[10px] tracking-[0.18em] text-textDimmed uppercase">
				London
			</span>
			<time
				className="font-mono text-sm text-text tabular-nums"
				dateTime={now.toISOString()}
				suppressHydrationWarning
			>
				{LONDON_TIME.format(now)}
			</time>
		</div>
	);
}

function SocialGlyph({ platform }: { platform: SocialPlatform }) {
	if (platform === "x") {
		return (
			<svg aria-hidden className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
				<path d="M14.7 10.35 22.4 1h-1.82l-6.7 7.8L8.16 1H1.5l8.1 11.78L1.5 23h1.82l7.08-8.24L15.84 23h6.66l-7.8-12.65Zm-2.51 2.92-.82-1.17L4.04 2.5h2.8l5.26 7.53.82 1.17 6.85 9.8h-2.8l-5.78-8.73Z" />
			</svg>
		);
	}

	return <Icon className="h-4 w-4" name={platform} />;
}

export function releaseTarget(angle: number, velocity: number): number {
	return settleAngle(angle, velocity) ?? 0;
}
