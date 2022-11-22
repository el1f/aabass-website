import React from "react";
import Image from "next/image";

interface PosterThumbnailProps {
	src: string;
	title: string;
	description: string;
	className?: string;
	format?: "poster" | "disc";
	onClick?: () => void;
}

export const PosterThumbnail: React.FC<PosterThumbnailProps> = ({
	src,
	title,
	description,
	className,
	format = "poster",
	onClick,
}) => {
	const selectedFormat = {
		poster: "aspect-poster",
		disc: "aspect-square",
	}[format];

	return (
		<div
			className={`${selectedFormat} relative bg-primary-400 ${className}`}
			onClick={onClick}
		>
			<Image src={src} alt={title} layout="fill" />
		</div>
	);
};
