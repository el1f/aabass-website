import { Trans as StandardTrans } from "next-i18next";
import React from "react";

import { AvailabilityLabel } from "./AvailabilityLabel";
import { Strong } from "./Strong";

const Trans: typeof StandardTrans = ({ ...props }) => {
	return (
		<StandardTrans
			{...props}
			components={{
				availability: <AvailabilityLabel />,
				hr: <hr className="my-1 opacity-0" />,
				strong: <Strong />,
			}}
		/>
	);
};

export default Trans;
