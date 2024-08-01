import { Slot, Slottable } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../lib/cn";
import { Icon, IconName } from "./Icon";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2",
	{
		defaultVariants: {
			size: "md",
			variant: "default",
		},
		variants: {
			size: {
				icon: "h-10 w-10",
				lg: "h-12 rounded-md px-4 gap-2 [&>svg]:h-5 [&>svg]:w-5",
				md: "h-10 rounded-md px-3 gap-2 [&>svg]:h-5 [&>svg]:w-5",
				sm: "h-8 rounded-md px-2 gap-2 [&>svg]:h-4 [&>svg]:w-4",
				xl: "h-14 rounded-md px-6 gap-2 [&>svg]:h-5 [&>svg]:w-5",
			},
			variant: {
				default: "bg-primary-300 text-bg hover:bg-primary-400 transition-all",
				ghost: "hover:bg-bgRaised text-textDimmedLight hover:text-text",
				link: "text-primary underline-offset-4 hover:underline",
				outline: "border border-textDimmed hover:text-text hover-gradient",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
			},
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	endIcon?: IconName;
	iconClassName?: string;
	startIcon?: IconName;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			asChild = false,
			className,
			endIcon,
			iconClassName,
			size,
			startIcon,
			variant,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ className, size, variant }))}
				ref={ref}
				{...props}
			>
				{startIcon && <Icon className={iconClassName} name={startIcon} />}
				<Slottable>{props.children}</Slottable>
				{endIcon && <Icon className={iconClassName} name={endIcon} />}
			</Comp>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
