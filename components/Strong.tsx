import React, { PropsWithChildren } from "react";

export const Strong: React.FC<PropsWithChildren> = ({ children }) => (
	<strong className="tracking-wide text-textLight">{children}</strong>
);
