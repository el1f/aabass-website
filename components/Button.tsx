import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../lib/cn";
import { Icon, IconName } from "./Icon";

const buttonVariants = cva(
	"inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2",
	{
		defaultVariants: {
			size: "md",
			variant: "default",
		},
		variants: {
			size: {
				icon: "h-10 w-10 [&>svg]:h-4 [&>svg]:w-4",
				lg: "h-12 rounded-md px-4 gap-2 [&>svg]:h-5 [&>svg]:w-5",
				md: "h-10 rounded-md px-3 gap-2 [&>svg]:h-5 [&>svg]:w-5",
				sm: "h-8 rounded-md px-2 gap-2 [&>svg]:h-4 [&>svg]:w-4",
				xl: "h-14 rounded-md px-6 gap-2 [&>svg]:h-5 [&>svg]:w-5",
			},
			variant: {
				default:
					"dark:bg-primary-300 bg-primary-400 text-textDimmedDark hover:text-textDark dark:hover:bg-primary-400 hover:bg-primary-500 transition-all",
				ghost: "hover:bg-bgRaised text-textDimmed hover:text-text",
				link: "text-primary underline-offset-4 hover:underline",
				outline: "border border-textDimmed hover:text-text hover-gradient",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
			},
		},
	},
);

export interface ButtonProps
	extends useRender.ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {
	endIcon?: IconName;
	iconClassName?: string;
	startIcon?: IconName;
}

function Button({
	children,
	className,
	endIcon,
	iconClassName,
	render,
	size,
	startIcon,
	variant,
	...props
}: ButtonProps) {
	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(
			{
				children: (
					<>
						{startIcon && <Icon className={iconClassName} name={startIcon} />}
						{children}
						{endIcon && <Icon className={iconClassName} name={endIcon} />}
					</>
				),
				className: cn(buttonVariants({ className, size, variant })),
			},
			props,
		),
		render,
	});
}

Button.displayName = "Button";

export { Button, buttonVariants };
