import Link from "next/link";
import React from "react";

import { SocialPlatform } from "../types";
import { Button, Icon } from ".";

interface SocialLinkProps {
	href?: string;
	platform: SocialPlatform;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, platform }) => {
	const icon = <Icon className="w-4 h-4" name={platform} />;
	return href ? (
		<Link
			className="block p-2 transition-all hover:bg-bgRaised text-textDimmedLight hover:text-text rounded-xl"
			href={href}
			target="_blank"
		>
			{icon}
		</Link>
	) : (
		<Button
			className="block h-auto p-2 transition-all hover:bg-bgRaised text-textDimmedLight hover:text-text rounded-xl"
			variant="ghost"
		>
			{icon}
		</Button>
	);
};
