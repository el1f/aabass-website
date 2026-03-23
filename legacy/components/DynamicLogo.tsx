import classnames from "classnames";
import React from "react";

import MyLogo from "../public/brand/logo_extended.svg";

export const DynamicLogo: React.FC<{
	isActive: boolean;
}> = ({ isActive }) => {
	return (
		<div className="h-full overflow-hidden text-text aspect-square sm:aspect-auto">
			<MyLogo
				className={classnames("block h-12 text-text logo", {
					"logo--active": isActive,
				})}
			/>
		</div>
	);
};
