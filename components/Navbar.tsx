import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

import { useWindowScroll } from "../lib/hooks";
import { SocialPlatform } from "../types";
import { DynamicLogo, SocialLink } from ".";

const SCROLL_HIDE_THRESHOLD = 512;

interface NavbarProps {
	socials: {
		href: string;
		platform: SocialPlatform;
	}[];
}

export const Navbar: React.FC<NavbarProps> = ({ socials }) => {
	const [scroll, direction] = useWindowScroll();

	return (
		<nav className="block w-full h-16 mt-16">
			<div
				className={twMerge(
					classNames("w-full", {
						"fixed z-50 transition-all": scroll.y > SCROLL_HIDE_THRESHOLD / 2,
					}),
				)}
			>
				<div
					className={twMerge(
						classNames(
							"flex items-center justify-between h-20 w-full max-w-2xl pl-6 pr-4 mx-auto print:hidden rounded-3xl",
							{
								"backdrop-blur-md -top-40 relative w-[calc(100%-32px)] md:full border dark:border-textLight/10 border-textDark/10 shadow-xl transition-transform bg-bgRaisedLight/25 dark:bg-bgRaisedDark/25":
									scroll.y > SCROLL_HIDE_THRESHOLD / 2,
								"md:translate-y-[128px] translate-y-[112px]":
									scroll.y > SCROLL_HIDE_THRESHOLD && direction === "UP",
							},
						),
					)}
				>
					<Link href="/">
						<a className="block h-12">
							{/* <Logo isDark={isDark} isExtended={isExtended} /> */}
							<DynamicLogo
								isActive={
									scroll.y > SCROLL_HIDE_THRESHOLD && direction === "UP"
								}
							/>
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
			</div>
		</nav>
	);
};
