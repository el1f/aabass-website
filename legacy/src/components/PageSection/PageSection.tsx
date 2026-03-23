import React, { PropsWithChildren } from "react";

export interface PageSectionProps extends PropsWithChildren {
	anchor: string;
	description?: React.ReactElement<any> | React.ReactElement<any>[];
	moreHref?: string;
	title: string;
}

export const PageSection: React.FC<PageSectionProps> = () => {
	return <div>PageSection</div>;
};
