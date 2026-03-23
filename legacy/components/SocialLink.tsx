import Link from "next/link";
import React from "react";

import { cn } from "../lib/cn";
import { SocialPlatform } from "../types";
import { Button, Icon } from ".";

interface SocialLinkProps {
	className?: string;
	href?: string;
	platform: SocialPlatform;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
	className,
	href,
	platform,
	...props
}) => {
	const icon = <Icon className="w-4 h-4" name={platform} />;
	return href ? (
		<Link
			className={cn(
				"block p-2 transition-all hover:bg-bgRaised text-textDimmed hover:text-text rounded-xl",
				className,
			)}
			href={href}
			target="_blank"
			{...props}
		>
			{icon}
		</Link>
	) : (
		<Button
			className={cn(
				"block h-auto p-2 transition-all hover:bg-bgRaised text-textDimmed hover:text-text rounded-xl",
				className,
			)}
			size="icon"
			variant="ghost"
			{...props}
		>
			{icon}
		</Button>
	);
};
