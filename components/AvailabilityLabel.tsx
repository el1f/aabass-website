import React, { PropsWithChildren } from "react";

import { Strong } from "./Strong";

export const AvailabilityLabel: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const availabilityModifiers = {
		"fairly limited": "before:bg-yellow-500",
		"non-existent": "before:bg-red-500",
		plentiful: "before:bg-green-500",
	}[children as string];

	return (
		<Strong
			className={`relative before:content-[""] before:inline-block before:w-4 before:h-1 before:-top-1/2 before:mr-1 ${availabilityModifiers}`}
		>
			{children}
		</Strong>
	);
};
