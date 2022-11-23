import Link from "next/link";
import React from "react";

import { SocialPlatform } from "../types";
import { Icon } from ".";

interface SocialLinkProps {
	href: string;
	platform: SocialPlatform;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, platform }) => {
	return (
		<Link href={href}>
			<a
				className="block p-3 transition-all border border-transparent text-textDimmedDark/75 dark:text-textDimmedLight/75 hover:text-textDark hover:dark:text-textLight rounded-2xl dark:hover:bg-bgRaisedDark/50 dark:hover:border-textDimmedDark/25 hover:bg-bgRaisedLight"
				target="_blank"
			>
				<Icon name={platform} />
			</a>
		</Link>
	);
};
