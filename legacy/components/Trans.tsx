import { Trans as StandardTrans } from "next-i18next";
import React from "react";

import { AvailabilityLabel } from "./AvailabilityLabel";
import { Strong } from "./Strong";

export const Trans: typeof StandardTrans = ({ ...props }) => {
	return (
		<StandardTrans
			{...props}
			components={{
				availability: <AvailabilityLabel />,
				em: <em />,
				hr: <hr className="my-1 opacity-0" />,
				strong: <Strong />,
			}}
		/>
	);
};
