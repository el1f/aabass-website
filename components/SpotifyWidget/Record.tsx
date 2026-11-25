import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "../../lib/cn";

const recordClassName = cn(
	"relative mb-4 aspect-square w-64 overflow-hidden rounded-full",
	"before:absolute before:top-1/2 before:left-1/2 before:z-10 before:h-20 before:w-20 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-black/30 before:content-[attr(data-icon)]",
	"after:absolute after:top-1/2 after:left-1/2 after:z-10 after:h-4 after:w-4 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-bgRaised after:content-[attr(data-icon)]",
);

export const Record = ({
	spinning = false,
	src,
	tone = "idle",
}: {
	spinning?: boolean;
	src?: string;
	tone?: "error" | "idle" | "loading";
}) => (
	<motion.figure
		className={cn(
			recordClassName,
			tone === "error" ? "bg-red-800" : "bg-textDimmed",
		)}
		transition={{ ease: "easeOut" }}
		variants={{
			hidden: { opacity: 0, scale: 1.2 },
			visible: { opacity: 1, scale: 1 },
		}}
	>
		{tone === "loading" && (
			<span
				aria-hidden
				className="absolute inset-0 animate-spin-slow"
				style={{
					background:
						"conic-gradient(var(--textDimmed), color-mix(in srgb, var(--textDimmed) 88%, white), var(--textDimmed), color-mix(in srgb, var(--textDimmed) 90%, black))",
				}}
			/>
		)}
		{src && (
			<Image
				alt="Album cover"
				className={cn("animate-spin-slow", { pause: !spinning })}
				height={256}
				src={src}
				width={256}
			/>
		)}
	</motion.figure>
);
