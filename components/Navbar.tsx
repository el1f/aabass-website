import Link from "next/link";
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
	return (
		<div className="flex justify-between h-16 max-w-2xl px-6 mx-auto mt-16">
			<Link href="/">
				<a>
					<Logo isExtended={isExtended} />
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
