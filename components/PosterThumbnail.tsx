import Image from "next/image";
import React from "react";

interface PosterThumbnailProps {
	className?: string;
	description: string;
	format?: "poster" | "disc";
	onClick?: () => void;
	src: string;
	title: string;
}

export const PosterThumbnail: React.FC<PosterThumbnailProps> = ({
	className,
	format = "poster",
	onClick,
	src,
	title,
}) => {
	const selectedFormat = {
		disc: "aspect-square",
		poster: "aspect-poster",
	}[format];

	return (
		<div
			className={`${selectedFormat} relative bg-primary-400 cursor-pointer ${className}`}
			onClick={onClick}
		>
			<Image alt={title} layout="fill" src={src} />
		</div>
	);
};
