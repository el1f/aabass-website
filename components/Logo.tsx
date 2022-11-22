import Image from "next/image";
import React from "react";

const EXTENDED_RATIO = 5.84;

interface LogoProps {
	height?: number;
	isDark?: boolean;
	isExtended?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
	height = 40,
	isDark = true,
	isExtended = false,
}) => {
	if (isDark && isExtended)
		return (
			<Image
				alt="Extended logo"
				height={height}
				src="/brand/logo.svg"
				width={height * EXTENDED_RATIO}
			/>
		);
	if (!isDark && !isExtended)
		return (
			<Image
				alt="Extended logo"
				height={height}
				src="/brand/logo_mark.svg"
				width={height}
			/>
		);
	if (isExtended)
		return (
			<Image
				alt="Extended logo"
				height={height}
				src="/brand/logo_light.svg"
				width={height * EXTENDED_RATIO}
			/>
		);
	return (
		<Image
			alt="Extended logo"
			height={height}
			src="/brand/logo_light_mark.svg"
			width={height}
		/>
	);
};
