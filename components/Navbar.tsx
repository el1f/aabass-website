import Link from "next/link";
import React from "react";
import { SocialPlatform } from "../types/socials";
import { Logo } from "./Logo";
import { SocialLink } from "./SocialLink";

interface NavbarProps {
	isExtended?: boolean;
	socials: {
		platform: SocialPlatform;
		href: string;
	}[];
}

export const Navbar: React.FC<NavbarProps> = ({ socials, isExtended }) => {
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
						key={social.platform}
						platform={social.platform}
						href={social.href}
					/>
				))}
			</div>
		</div>
	);
};
