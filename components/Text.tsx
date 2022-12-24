import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";

import {
	PolymorphicComponentPropWithRef,
	PolymorphicRef,
} from "../types/polymorphicComponent";

const TEXT_CLASSES = {
	lg: "text-base md:text-lg",
	md: "text-sm md:text-base md:leading-relaxed",
	sm: "text-xs md:text-sm",
	xs: "text-xs",
} as const;

export type TextProps<C extends React.ElementType> =
	PolymorphicComponentPropWithRef<
		C,
		{
			children?: React.ReactNode;
			className?: string;
			size?: "xs" | "sm" | "md" | "lg";
		}
	>;

export const Text = React.forwardRef(
	<C extends React.ElementType = "span">(
		{ as, children, className, size = "md", ...rest }: TextProps<C>,
		ref?: PolymorphicRef<C>,
	) => {
		const Component = as || "span";

		return (
			<Component
				className={twMerge(
					classnames(
						{ [`${TEXT_CLASSES[size]}`]: size },
						"font-sans leading-relaxed dark:tracking-wide tracking-tight text-textDimmedDark dark:text-textDimmedLight/75 dark:print:text-textDimmedDark print:text-textDark",
						{ [className ?? ""]: Boolean(className) },
					),
				)}
				ref={ref}
				{...rest}
			>
				{children}
			</Component>
		);
	},
);

Text.displayName = "Text";
