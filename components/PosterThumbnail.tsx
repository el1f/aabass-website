import Image, { ImageLoader } from "next/image";
import React from "react";

// TODO: move to lib
const hygraphImageLoader: ImageLoader = ({ src, width }) => {
	const relativeSrc = (src: string) => src.split("/").pop();

	return `https://media.graphassets.com/resize=width:${width}/${relativeSrc(
		src,
	)}`;
};

interface PosterThumbnailProps {
	className?: string;
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

	const ratioMultipliers = {
		disc: 1,
		poster: 1.4142,
	};

	return (
		<div
			className={`${selectedFormat} relative bg-primaryShade cursor-pointer [&>span]:!block ${className}`}
			onClick={onClick}
		>
			<Image
				alt={title}
				className="block"
				height={320 * ratioMultipliers[format]}
				loader={hygraphImageLoader}
				src={src}
				width={320}
			/>
		</div>
	);
};
