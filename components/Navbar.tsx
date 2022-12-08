import Link from "next/link";
import { useTheme } from "next-themes";
import React from "react";

import { SocialPlatform } from "../types";
import { Logo, SocialLink } from ".";

interface NavbarProps {
	isExtended?: boolean;
	socials: {
		href: string;
		platform: SocialPlatform;
	}[];
}

export const Navbar: React.FC<NavbarProps> = ({ isExtended, socials }) => {
	const { theme } = useTheme();
	const isDark = theme !== "light";

	return (
		<div className="flex items-center justify-between h-16 max-w-2xl px-6 mx-auto mt-16 print:hidden">
			<Link href="/">
				<a className="block h-10">
					<Logo isDark={isDark} isExtended={isExtended} />
				</a>
			</Link>
			<div className="flex items-center justify-center">
				{socials.map((social) => (
					<SocialLink
						href={social.href}
						key={social.platform}
						platform={social.platform}
					/>
				))}
			</div>
		</div>
	);
};
