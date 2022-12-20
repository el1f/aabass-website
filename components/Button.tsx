import classnames from "classnames";
import React, { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

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
	const outlinedPrimary = "border-primaryShade";
	const filledPrimary = "bg-primaryShade dark:bg-primaryShade text-textDark";
	const outlined = `border border-2 ${isText ? outlinedText : outlinedPrimary}`;
	const filled = `${isText ? filledText : filledPrimary}`;

	return (
		<button
			className={twMerge(
				classnames(
					"px-6 h-14 font-sans font-bold tracking-wide text-sm rounded-xl",
					{
						[`${className}`]: className,
						[`${filled}`]: !isOutlined,
						[`${outlined}`]: isOutlined,
					},
				),
			)}
		>
			{children}
		</button>
	);
};
