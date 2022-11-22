import React, { PropsWithChildren } from "react";

export const Strong: React.FC<
	PropsWithChildren<{
		className?: string;
	}>
> = ({ children, className }) => (
	<strong className={`tracking-wide text-textLight ${className}`}>
		{children}
	</strong>
);
