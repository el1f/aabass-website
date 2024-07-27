import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../lib/cn";
import { Icon, IconName } from "./Icon";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2",
	{
		defaultVariants: {
			size: "default",
			variant: "default",
		},
		variants: {
			size: {
				default: "h-10 px-4 py-2",
				icon: "h-10 w-10",
				lg: "h-11 rounded-md px-8",
				sm: "h-8 rounded-md px-2 gap-2 [&>svg]:h-4 [&>svg]:w-4",
			},
			variant: {
				default: "bg-primaryShade text-bg hover:bg-primaryShade/80",
				ghost: "hover:bg-bgRaised text-textDimmedLight hover:text-text",
				link: "text-primary underline-offset-4 hover:underline",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
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
				<>
					{startIcon && <Icon className={iconClassName} name={startIcon} />}
					{props.children}
					{endIcon && <Icon className={iconClassName} name={endIcon} />}
				</>
			</Comp>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
