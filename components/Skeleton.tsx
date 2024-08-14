import { cn } from "../lib/cn";

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"animate-pulse rounded-md bg-textDimmed opacity-25",
				className,
			)}
			{...props}
		/>
	);
}

export { Skeleton };
