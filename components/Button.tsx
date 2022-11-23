import React, { HTMLProps } from "react";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	isOutlined?: boolean;
	isText?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className,
	isOutlined = false,
	isText = false,
}) => {
	const outlinedText = "dark:border-textDimmedLight border-textDimmedDark";
	const filledText = "bg-textDimmedLight";
	const outlinedPrimary = "border-primary-500";
	const filledPrimary = "bg-primary-500 dark:bg-primary-500 text-textDark";
	const outlined = `border border-2 ${isText ? outlinedText : outlinedPrimary}`;
	const filled = `${isText ? filledText : filledPrimary}`;

	return (
		<button
			className={`px-6 h-14 font-sans font-bold tracking-wide text-sm rounded-xl ${
				isOutlined ? outlined : filled
			} ${className}`}
		>
			{children}
		</button>
	);
};
