import Image from "next/image";
import React from "react";

const EXTENDED_RATIO = 5.84;

interface LogoProps {
	isExtended?: boolean;
	isDark?: boolean;
	height?: number;
}

export const Logo: React.FC<LogoProps> = ({
	isDark = true,
	isExtended = false,
	height = 40,
}) => {
	if (isDark && isExtended)
		return (
			<Image
				src="/brand/logo.svg"
				height={height}
				width={height * EXTENDED_RATIO}
				alt="Extended logo"
			/>
		);
	if (!isDark && !isExtended)
		return (
			<Image
				src="/brand/logo_mark.svg"
				height={height}
				width={height}
				alt="Extended logo"
			/>
		);
	if (isExtended)
		return (
			<Image
				src="/brand/logo_light.svg"
				height={height}
				width={height * EXTENDED_RATIO}
				alt="Extended logo"
			/>
		);
	return (
		<Image
			src="/brand/logo_light_mark.svg"
			height={height}
			width={height}
			alt="Extended logo"
		/>
	);
};
