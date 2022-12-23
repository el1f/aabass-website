import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";

const TEXT_CLASSES = {
	lg: "text-base md:text-lg",
	md: "text-sm md:text-base md:leading-relaxed",
	sm: "text-xs md:text-sm",
	xs: "text-xs",
} as const;

export interface TextProps {
	children?: React.ReactNode;
	className?: string;
	component?: "span" | "p" | "a" | "div";
	size?: "xs" | "sm" | "md" | "lg";
}

export const Text: React.FC<TextProps> = ({
	children,
	className,
	component = "span",
	size = "md",
}) => {
	const Tag = component;

	return (
		<Tag
			className={twMerge(
				classnames(
					{ [`${TEXT_CLASSES[size]}`]: size },
					"font-sans leading-relaxed dark:tracking-wide tracking-tight text-textDimmedDark dark:text-textDimmedLight/75 dark:print:text-textDimmedDark print:text-textDark",
					{ [className ?? ""]: Boolean(className) },
				),
			)}
		>
			{children}
		</Tag>
	);
};
