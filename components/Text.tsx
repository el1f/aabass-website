import React from "react";

const TEXT_CLASSES = {
	sm: "textSM",
	md: "textMD",
	lg: "textLG",
} as const;

export interface TextProps {
	component?: "span" | "p" | "a" | "div";
	size?: "sm" | "md" | "lg";
	children?: React.ReactNode;
	className?: string;
}

export const Text: React.FC<TextProps> = ({
	component = "span",
	size = "md",
	children,
	className,
}) => {
	const Tag = component;

	return (
		<Tag
			className={`${TEXT_CLASSES[size]} font-sans leading-relaxed tracking-wider text-textDimmedDark/75 dark:text-textDimmedLight/75 ${className}`}
		>
			{children}
		</Tag>
	);
};
