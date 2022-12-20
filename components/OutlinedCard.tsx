import classnames from "classnames";
import React from "react";

import {
	PolymorphicComponentPropWithRef,
	PolymorphicRef,
} from "../types/polymorphicComponent";

type OutlinedCardProps<C extends React.ElementType> =
	PolymorphicComponentPropWithRef<
		C,
		{ className?: string; hasHover?: boolean }
	>;

const OutlinedCard = React.forwardRef(
	<C extends React.ElementType = "div">(
		{ as, children, className, hasHover, ...rest }: OutlinedCardProps<C>,
		ref?: PolymorphicRef<C>,
	) => {
		const Component = as || "div";

		const cardClass = classnames(
			"border rounded-lg border-textDimmedDark/25 dark:border-textDimmedLight/25 scroll-mt-8 transition-all overflow-hidden",
			{
				"hover:border-textDimmedDark/50 dark:hover:border-textDimmedLight/50":
					hasHover,
			},
			className,
		);

		return (
			<Component className={cardClass} ref={ref} {...rest}>
				{children}
			</Component>
		);
	},
);

OutlinedCard.displayName = "OutlinedCard";

export default OutlinedCard;
