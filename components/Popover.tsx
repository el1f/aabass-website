"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import * as React from "react";

import { cn } from "../lib/cn";

function Popover(props: PopoverPrimitive.Root.Props) {
	return <PopoverPrimitive.Root {...props} />;
}

function PopoverTrigger(props: PopoverPrimitive.Trigger.Props) {
	return <PopoverPrimitive.Trigger {...props} />;
}

type PopoverContentProps = PopoverPrimitive.Popup.Props & {
	align?: PopoverPrimitive.Positioner.Props["align"];
	side?: PopoverPrimitive.Positioner.Props["side"];
	sideOffset?: PopoverPrimitive.Positioner.Props["sideOffset"];
};

function PopoverContent({
	align = "center",
	className,
	side = "bottom",
	sideOffset = 4,
	...props
}: PopoverContentProps) {
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Positioner
				align={align}
				className="z-100 origin-(--transform-origin)"
				side={side}
				sideOffset={sideOffset}
			>
				<PopoverPrimitive.Popup
					className={cn(
						"w-72 rounded-md bg-bgRaised p-4 text-textDimmed shadow-md outline-hidden",
						className,
					)}
					{...props}
				/>
			</PopoverPrimitive.Positioner>
		</PopoverPrimitive.Portal>
	);
}

export { Popover, PopoverContent, PopoverTrigger };
