import React, { PropsWithChildren } from "react";

export const Strong: React.FC<
	PropsWithChildren<{
		className?: string;
	}>
> = ({ children, className }) => (
	<strong
		className={`dark:tracking-wide dark:text-textLight text-textDark ${className}`}
	>
		{children}
	</strong>
);
