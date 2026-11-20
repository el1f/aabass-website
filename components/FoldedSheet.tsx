import classNames from "classnames";
import {
	animate,
	motion,
	MotionValue,
	useMotionValue,
	useReducedMotion,
	useTransform,
} from "framer-motion";
import React, {
	useLayoutEffect,
	useRef,
	useState,
	useSyncExternalStore,
} from "react";
import { twMerge } from "tailwind-merge";

const FOLDED_RIGHT = -180;
const FOLDED_BOTTOM = 180;
const PEEK_RIGHT = -150;
const EASE = [0.65, 0, 0.35, 1] as const;
const MAX_SHADE = 0.2;

// Folding a single-column mobile layout into quarters leaves an unreadable strip
const FOLDABLE_QUERY = "(min-width: 640px)";

const subscribeToFoldableQuery = (onChange: () => void) => {
	const mediaQuery = window.matchMedia(FOLDABLE_QUERY);
	mediaQuery.addEventListener("change", onChange);
	return () => mediaQuery.removeEventListener("change", onChange);
};

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

/** Projected share (0 to 1) of a flap that lies past its hinge */
const unfoldedShare = (degrees: number) =>
	Math.max(0, Math.cos(toRadians(degrees)));

const FOLD_EDGE_CLASSES = {
	bottom: "inset-x-0 bottom-0 h-16 bg-linear-to-t",
	left: "inset-y-0 left-0 w-16 bg-linear-to-r",
	right: "inset-y-0 right-0 w-16 bg-linear-to-l",
	top: "inset-x-0 top-0 h-16 bg-linear-to-b",
} as const;

const FoldEdge: React.FC<{ side: keyof typeof FOLD_EDGE_CLASSES }> = ({
	side,
}) => (
	<div
		aria-hidden
		className={classNames(
			"absolute pointer-events-none from-black/[0.05] to-transparent dark:from-black/25 print:hidden",
			FOLD_EDGE_CLASSES[side],
		)}
	/>
);

const Crease: React.FC<{ orientation: "horizontal" | "vertical" }> = ({
	orientation,
}) => {
	const isVertical = orientation === "vertical";

	return (
		<div
			aria-hidden
			className={classNames(
				"absolute pointer-events-none via-black/[0.02] from-transparent to-transparent dark:via-black/[0.07] print:hidden",
				isVertical
					? "inset-y-0 left-1/2 w-32 -translate-x-1/2 bg-linear-to-r"
					: "inset-x-0 top-1/2 h-32 -translate-y-1/2 bg-linear-to-b",
			)}
		>
			<div
				className={classNames(
					"absolute bg-black/[0.03] dark:bg-black/20",
					isVertical ? "inset-y-0 left-1/2 w-px" : "inset-x-0 top-1/2 h-px",
				)}
			/>
			<div
				className={classNames(
					"absolute bg-white/40 dark:bg-white/[0.02]",
					isVertical
						? "inset-y-0 left-1/2 ml-px w-px"
						: "inset-x-0 top-1/2 mt-px h-px",
				)}
			/>
		</div>
	);
};

const PaperTexture: React.FC = () => (
	<div
		aria-hidden
		className="absolute inset-0 pointer-events-none paper-texture opacity-50 dark:invert dark:opacity-20 print:hidden"
	/>
);

/** Darkens a flap face towards its hinge as it turns away from flat */
const FoldShade: React.FC<{
	hinge: "bottom" | "left" | "right" | "top";
	opacity: MotionValue<number>;
}> = ({ hinge, opacity }) => (
	<motion.div
		aria-hidden
		className={classNames(
			"absolute inset-0 pointer-events-none from-black to-black/40",
			{
				"bg-linear-to-b": hinge === "top",
				"bg-linear-to-l": hinge === "right",
				"bg-linear-to-r": hinge === "left",
				"bg-linear-to-t": hinge === "bottom",
			},
		)}
		style={{ opacity }}
	/>
);

const PaperSheet: React.FC<{
	children: React.ReactNode;
	className?: string;
	clipPath?: MotionValue<string>;
	ref?: React.Ref<HTMLDivElement>;
}> = ({ children, className, clipPath, ref }) => (
	<motion.div
		className={twMerge(classNames("relative bg-bgRaised", className))}
		ref={ref}
		style={{ clipPath }}
	>
		{children}
		<Crease orientation="vertical" />
		<Crease orientation="horizontal" />
		<PaperTexture />
	</motion.div>
);

/**
 * A sheet folded twice (A4 into A6). It unfolds in two steps: the right half
 * swings open around the vertical crease, then the bottom half swings down
 * around the horizontal crease.
 */
export const FoldedSheet: React.FC<{
	children: React.ReactNode;
	className?: string;
	cover: React.ReactNode;
	sheetClassName?: string;
	unfoldLabel?: string;
}> = ({
	children,
	className,
	cover,
	sheetClassName,
	unfoldLabel = "Unfold",
}) => {
	const sheetRef = useRef<HTMLDivElement>(null);
	const canFold = useSyncExternalStore(
		subscribeToFoldableQuery,
		() => window.matchMedia(FOLDABLE_QUERY).matches,
		() => false,
	);
	const [isUnfolding, setIsUnfolding] = useState(false);
	const [isUnfolded, setIsUnfolded] = useState(false);
	const prefersReducedMotion = useReducedMotion();

	const sheetHeight = useMotionValue(0);
	const rightFlap = useMotionValue(FOLDED_RIGHT);
	const bottomFlap = useMotionValue(FOLDED_BOTTOM);

	const isFolding = canFold && !isUnfolded;

	useLayoutEffect(() => {
		const sheet = sheetRef.current;
		if (!sheet) return;

		sheetHeight.set(sheet.offsetHeight);
		const observer = new ResizeObserver(() =>
			sheetHeight.set(sheet.offsetHeight),
		);
		observer.observe(sheet);
		return () => observer.disconnect();
	}, [sheetHeight]);

	// The layout follows the bottom flap's lower edge so the page grows with it
	const wrapperHeight = useTransform(
		[bottomFlap, sheetHeight],
		([angle, height]: number[]) =>
			height / 2 + (unfoldedShare(angle) * height) / 2,
	);
	const stageX = useTransform(
		rightFlap,
		[FOLDED_RIGHT, PEEK_RIGHT, 0],
		["25%", "25%", "0%"],
	);
	// Centered on the folded card so the lifted flap doesn't balloon past it; the
	// switch happens while every flap lies flat
	const perspectiveOrigin = useTransform(rightFlap, (angle) =>
		angle < 0 ? "50% 25%" : "50% 50%",
	);
	const footprintWidth = useTransform(
		rightFlap,
		(angle) => `${50 + unfoldedShare(angle) * 50}%`,
	);
	const footprintHeight = useTransform(
		bottomFlap,
		(angle) => `${50 + unfoldedShare(angle) * 50}%`,
	);
	const sheetClipPath = useTransform<number, string>(
		[rightFlap, bottomFlap],
		([right, bottom]) => {
			// Until the bottom flap lifts, the flaps cover the whole visible area
			if (right < 0 || bottom >= FOLDED_BOTTOM) return "inset(0 0 100% 0)";
			if (bottom > 0) return "inset(0 0 50% 0)";
			return "none";
		},
	);
	const rightFlapVisibility = useTransform(rightFlap, (angle) =>
		angle < 0 ? "visible" : "hidden",
	);
	const bottomFlapRightHalfOpacity = useTransform(rightFlap, (angle) =>
		angle < 0 ? 0 : 1,
	);
	const rightFlapShade = useTransform(
		rightFlap,
		[FOLDED_RIGHT, PEEK_RIGHT, -90, 0],
		[0, 0.03, MAX_SHADE, 0],
	);
	const bottomFlapShade = useTransform(
		bottomFlap,
		(angle) => Math.abs(Math.sin(toRadians(angle))) * MAX_SHADE,
	);
	const rightFlapCastShadow = useTransform(
		rightFlap,
		[FOLDED_RIGHT, PEEK_RIGHT, -90],
		[0, 1, 0],
	);
	const bottomFlapCastShadow = useTransform(
		bottomFlap,
		[FOLDED_BOTTOM, 145, 70],
		[0, 1, 0],
	);

	const peek = (isPeeking: boolean) => {
		if (isUnfolding || prefersReducedMotion) return;
		animate(rightFlap, isPeeking ? PEEK_RIGHT : FOLDED_RIGHT, {
			duration: 0.25,
			ease: "easeOut",
		});
	};

	const unfold = async () => {
		if (isUnfolding) return;
		setIsUnfolding(true);

		const duration = prefersReducedMotion ? 0 : 0.45;
		await animate(rightFlap, 0, { duration, ease: EASE });
		await animate(bottomFlap, 0, { duration: duration * 1.2, ease: EASE });
		setIsUnfolded(true);
	};

	return (
		<motion.div
			className={twMerge(classNames("relative print:h-auto!", className))}
			style={{ height: isFolding ? wrapperHeight : undefined }}
		>
			<motion.div
				className="relative print:transform-none!"
				style={{
					perspective: 2400,
					perspectiveOrigin: isFolding ? perspectiveOrigin : undefined,
					x: isFolding ? stageX : 0,
				}}
			>
				{isFolding && (
					<motion.div
						aria-hidden
						className="absolute top-0 left-0 shadow-paper print:hidden"
						style={{ height: footprintHeight, width: footprintWidth }}
					/>
				)}

				<PaperSheet
					className={classNames(
						"shadow-paper print:shadow-none print:[clip-path:none]!",
						sheetClassName,
					)}
					clipPath={isFolding ? sheetClipPath : undefined}
					ref={sheetRef}
				>
					{children}
				</PaperSheet>

				{isFolding && (
					<>
						<motion.div
							aria-hidden
							className="absolute inset-x-0 top-0 pointer-events-none h-1/2 bg-linear-to-t from-black/25 to-transparent print:hidden"
							style={{ opacity: bottomFlapCastShadow }}
						/>

						<motion.div
							aria-hidden
							className="absolute inset-x-0 top-1/2 h-1/2 origin-top transform-3d print:hidden"
							inert
							style={{ rotateX: bottomFlap }}
						>
							<div className="absolute inset-0 overflow-hidden bg-bgRaised backface-hidden">
								<PaperSheet
									className={classNames(
										"absolute inset-x-0 -top-full",
										sheetClassName,
									)}
								>
									{children}
								</PaperSheet>
								<FoldShade hinge="top" opacity={bottomFlapShade} />
							</div>
							<div className="absolute inset-0 rotate-x-180 backface-hidden">
								<div className="absolute inset-y-0 left-0 w-1/2 bg-bgRaised">
									<PaperTexture />
									<FoldEdge side="right" />
									<FoldEdge side="bottom" />
									<motion.div
										className="absolute inset-0 bg-linear-to-l from-black/30 to-black/10"
										style={{ opacity: rightFlapCastShadow }}
									/>
								</div>
								<motion.div
									className="absolute inset-y-0 right-0 w-1/2 bg-bgRaised"
									style={{ opacity: bottomFlapRightHalfOpacity }}
								>
									<PaperTexture />
									<FoldEdge side="left" />
									<FoldEdge side="bottom" />
								</motion.div>
								<FoldShade hinge="bottom" opacity={bottomFlapShade} />
							</div>
						</motion.div>

						<motion.div
							aria-hidden
							className="absolute top-0 w-1/2 left-1/2 h-1/2 origin-left transform-3d print:hidden"
							style={{ rotateY: rightFlap, visibility: rightFlapVisibility }}
						>
							<div className="absolute inset-0 bg-bgRaised backface-hidden">
								<PaperTexture />
								<FoldEdge side="left" />
								<FoldEdge side="bottom" />
								<FoldShade hinge="left" opacity={rightFlapShade} />
							</div>
							<div className="absolute inset-0 overflow-hidden shadow-paper rotate-y-180 bg-bgRaised backface-hidden">
								<div className="absolute inset-0 -scale-x-100 opacity-[0.05] blur-[0.5px] pointer-events-none">
									<div
										className={twMerge(
											classNames("absolute top-0 -left-full w-[200%]", sheetClassName),
										)}
									>
										{children}
									</div>
								</div>
								{cover}
								<PaperTexture />
								<FoldEdge side="right" />
								<FoldEdge side="bottom" />
								<FoldShade hinge="right" opacity={rightFlapShade} />
							</div>
						</motion.div>

						{!isUnfolding && (
							<button
								aria-label={unfoldLabel}
								className="absolute top-0 left-0 w-1/2 h-1/2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-textDimmed print:hidden"
								onBlur={() => peek(false)}
								onClick={unfold}
								onFocus={() => peek(true)}
								onPointerEnter={() => peek(true)}
								onPointerLeave={() => peek(false)}
								type="button"
							/>
						)}
					</>
				)}
			</motion.div>
		</motion.div>
	);
};
