import classnames from "classnames";
import React, { forwardRef } from "react";

import {
	PolymorphicComponentPropWithRef,
	PolymorphicRef,
} from "../types/polymorphicComponent";

// Define variant types
type CardVariant = "default" | "compact" | "large";
type CardColorScheme = "neutral" | "primary" | "danger";

// Extend props with new options
export type OutlinedCardProps<C extends React.ElementType> =
	PolymorphicComponentPropWithRef<
		C,
		{
			className?: string;
			hasHover?: boolean;
			variant?: CardVariant;
			colorScheme?: CardColorScheme;
			isDisabled?: boolean;
			padding?: "none" | "sm" | "md" | "lg";
			"aria-label"?: string;
		}
	>;

// Utility to get variant-specific styles
const variantStyles: Record<CardVariant, string> = {
	default: "p-4",
	compact: "p-2",
	large: "p-6",
};

// Utility to get color scheme styles
const colorSchemes: Record<CardColorScheme, string> = {
	neutral:
		"border-textDimmedDark/25 dark:border-textDimmedLight/25 hover:border-textDimmedDark/50 dark:hover:border-textDimmedLight/50",
	primary:
		"border-blue-500/50 dark:border-blue-400/50 hover:border-blue-500 dark:hover:border-blue-400",
	danger:
		"border-red-500/50 dark:border-red-400/50 hover:border-red-500 dark:hover:border-red-400",
};

// Utility for padding
const paddingStyles: Record<
	NonNullable<OutlinedCardProps<"div">["padding"]>,
	string
> = {
	none: "p-0",
	sm: "p-2",
	md: "p-4",
	lg: "p-6",
};

// Explicitly type the component using forwardRef
export const OutlinedCard = forwardRef(
	<C extends React.ElementType>(
		{
			as,
			children,
			className,
			hasHover = true,
			variant = "default",
			colorScheme = "neutral",
			isDisabled = false,
			padding,
			"aria-label": ariaLabel,
			...rest
		}: OutlinedCardProps<C>,
		ref: PolymorphicRef<C>,
	) => {
		const Component = as || "div";

		const cardClass = classnames(
			"border rounded-lg transition-all duration-200 ease-in-out",
			"bg-white dark:bg-gray-800",
			{
				"opacity-50 pointer-events-none": isDisabled,
				"shadow-sm hover:shadow-md": hasHover && !isDisabled,
			},
			variantStyles[variant],
			colorSchemes[colorScheme],
			padding && paddingStyles[padding],
			className,
		);

		return (
			<Component
				className={cardClass}
				ref={ref}
				aria-disabled={isDisabled}
				aria-label={ariaLabel}
				{...rest}
			>
				{children}
			</Component>
		);
	},
) as React.ForwardRefExoticComponent<
	OutlinedCardProps<any> & React.RefAttributes<any>
> & { displayName?: string };

OutlinedCard.displayName = "OutlinedCard";
