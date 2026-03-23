import React, { PropsWithChildren } from "react";

interface CodeChipProps {
	className?: string;
}

export const CodeChip: React.FC<PropsWithChildren<CodeChipProps>> = ({
	children,
	className,
}) => {
	return (
		<code
			className={`px-1 py-1 text-xs font-bold leading-none border rounded-md text-textLight dark:bg-bgRaisedDark bg-textDimmedDark border-textDark/5 dark:border-textLight/5 ${className}`}
		>
			{children}
		</code>
	);
};
