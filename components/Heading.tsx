import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface HeadingProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
	isDimmed?: boolean;
	level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading: React.FC<HeadingProps> = ({
	children,
	className,
	id,
	isDimmed = false,
	level,
}) => {
	const Tag = `h${level}` as const;
	const headingClass = [
		"text-4xl font-bold leading-tight md:text-5xl",
		"text-2xl font-bold leading-tight md:text-3xl",
		"text-xl font-bold leading-tight md:text-2xl",
		"text-lg font-bold leading-tight md:text-xl",
		"text-base font-bold leading-tight md:text-lg",
		"text-sm font-bold leading-tight md:text-base",
	] as const;

	const anchorClass =
		"before:content-['#'] before:absolute before:-left-6 before:font-normal before:font-mono dark:before:text-textDimmedLight/25 before:text-textDimmedDark/50";

	const headingContent = (
		<Tag
			className={twMerge(
				classnames(
					headingClass[level - 1],
					"font-sans font-bold",
					{
						[`${anchorClass}`]: id,
						"text-textDark dark:text-textLight": !isDimmed,
						"text-textDimmedDark dark:text-textDimmedLight/75": isDimmed,
					},
					"dark:print:text-textDark",
					{ [`${className}`]: className },
				),
			)}
		>
			{children}
		</Tag>
	);

	if (id)
		return (
			<a className="relative scroll-mt-16" href={`#${id}`} id={id}>
				{headingContent}
			</a>
		);

	return headingContent;
};
