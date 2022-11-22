import Link from "next/link";
import React from "react";
import { SocialPlatform } from "../types/socials";
import { Icon } from "./Icon";

interface SocialLinkProps {
	platform: SocialPlatform;
	href: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ platform, href }) => {
	return (
		<Link href={href}>
			<a
				className="block p-3 transition-all border border-transparent text-textDimmedDark/75 dark:text-textDimmedLight/75 hover:text-textDark hover:dark:text-textLight rounded-2xl hover:bg-bgRaisedDark/50 hover:border-slate-700/25"
				target="_blank"
			>
				<Icon name={platform} />
			</a>
		</Link>
	);
};
