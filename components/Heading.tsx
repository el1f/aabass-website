import React from "react";

interface HeadingProps {
	id?: string;
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children: React.ReactNode;
	className?: string;
	isDimmed?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
	id,
	level,
	children,
	isDimmed = false,
	className,
}) => {
	const Tag = `h${level}` as const;
	const headingClass = [
		"heading1",
		"heading2",
		"heading3",
		"heading4",
		"heading5",
		"heading6",
	] as const;

	const anchorClass =
		"before:content-['#'] before:absolute before:-left-6 before:font-normal before:font-mono before:text-textDimmedLight/25";

	const headingContent = (
		<Tag
			className={`${headingClass[level - 1]} font-sans font-bold ${
				isDimmed
					? "text-textDimmedDark/75 dark:text-textDimmedLight/75"
					: "text-textDark dark:text-textLight"
			} ${id ? anchorClass : ""} ${className}`}
		>
			{children}
		</Tag>
	);

	if (id)
		return (
			<a id={id} href={`#${id}`} className="relative scroll-mt-16">
				{headingContent}
			</a>
		);

	return headingContent;
};

export default Heading;
