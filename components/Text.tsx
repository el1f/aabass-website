import React from "react";

const TEXT_CLASSES = {
	lg: "textLG",
	md: "textMD",
	sm: "textSM",
} as const;

export interface TextProps {
	children?: React.ReactNode;
	className?: string;
	component?: "span" | "p" | "a" | "div";
	size?: "sm" | "md" | "lg";
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
			className={`${TEXT_CLASSES[size]} font-sans leading-relaxed dark:tracking-wide tracking-tight text-textDimmedDark dark:text-textDimmedLight/75 ${className}`}
		>
			{children}
		</Tag>
	);
};
