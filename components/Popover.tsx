"use client";

import { Popover as BasePopover } from "@base-ui/react/popover";
import * as React from "react";

import { cn } from "../lib/cn";

const Popover = BasePopover.Root;

const PopoverTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BasePopover.Trigger> & {
		render?: React.ReactElement;
	}
>(({ render, className, ...props }, ref) => {
	if (render) {
		return (
			<BasePopover.Trigger
				render={render}
				className={className}
				{...props}
				ref={ref as any}
			/>
		);
	}
	return (
		<BasePopover.Trigger
			className={cn("cursor-pointer", className)}
			ref={ref}
			{...props}
		/>
	);
});
PopoverTrigger.displayName = "PopoverTrigger";

const PopoverContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BasePopover.Popup> & {
		align?: "start" | "center" | "end";
		sideOffset?: number;
		render?: React.ReactElement;
	}
>(({ className, align = "center", sideOffset = 8, render, ...props }, ref) => (
	<BasePopover.Portal>
		<BasePopover.Positioner sideOffset={sideOffset} align={align}>
			<BasePopover.Popup
				className={cn(
					"z-50 w-72 rounded-md bg-bgRaised p-4 text-textDimmed shadow-md outline-none",
					"origin-[var(--transform-origin)] transition-[transform,opacity,scale] duration-150",
					"data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
					"data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
					className,
				)}
				ref={ref}
				{...props}
			>
				{render ? render : props.children}
			</BasePopover.Popup>
		</BasePopover.Positioner>
	</BasePopover.Portal>
));
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };
