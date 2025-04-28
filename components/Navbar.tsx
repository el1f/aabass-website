import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

import { SOCIALS } from "../data";
import { useWindowScroll } from "../lib/hooks";
import { SpotifyNowPlayingPayload } from "../types/api/spotify";
import { Button, DynamicLogo, SocialLink } from ".";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { SpotifyWidget } from "./SpotifyWidget";

const SCROLL_THRESHOLD = 512;

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
	const { data: currentlyPlayingSong } = useQuery({
		queryFn: async () => {
			const song = await axios.get<SpotifyNowPlayingPayload>(
				"/api/spotify/now-playing",
			);
			return song.data;
		},
		queryKey: ["now-playing"],
		refetchInterval: 60 * 1000,
	});

	const [scroll, direction] = useWindowScroll();
	const isPastSafeThreshold = scroll.y > SCROLL_THRESHOLD / 2;
	const isScrollingUp = scroll.y > SCROLL_THRESHOLD && direction === "UP";

	return (
		<header
			className={twMerge(classNames("block w-full h-16 mt-16 print:hidden"))}
		>
			<div
				className={twMerge(
					classNames("w-full", {
						"fixed z-50 transition-all": isPastSafeThreshold,
					}),
				)}
			>
				<nav
					className={twMerge(
						classNames(
							"flex items-center justify-between h-20 w-full max-w-2xl pl-[1.125rem] pr-4 mx-auto rounded-3xl",
							{
								"backdrop-blur-md -top-40 relative w-[calc(100%-32px)] md:full border dark:border-textLight/10 border-textDark/10 shadow-xl transition-transform bg-bgRaisedLight/40 dark:bg-bgRaisedDark/50":
									scroll.y > SCROLL_THRESHOLD / 2,
								"md:translate-y-[128px] translate-y-[112px] max-w-5xl":
									isPastSafeThreshold,
							},
						),
					)}
				>
					<Link className="block h-12" href="/">
						<DynamicLogo isActive={isScrollingUp} />
					</Link>

					<div className="flex items-center gap-2">
						{isPastSafeThreshold && (
							<motion.div className="md:flex gap-0.5 hidden">
								<Link href="/about">
									<Button size="sm" startIcon="about" variant="ghost">
										About me
									</Button>
								</Link>
								<Link href="/cases">
									<Button size="sm" startIcon="projects" variant="ghost">
										Case Studies
									</Button>
								</Link>
								<Link href="/personal">
									<Button size="sm" startIcon="personal" variant="ghost">
										Personal
									</Button>
								</Link>
							</motion.div>
						)}

						{isPastSafeThreshold && <span className="hidden md:block">•</span>}

						<motion.div className="flex items-center justify-center">
							<Popover>
								<div className="relative">
									<PopoverTrigger className="relative" asChild>
										<SocialLink
											className="inline-block w-8 h-8"
											platform="spotify"
										/>
									</PopoverTrigger>
									{currentlyPlayingSong && (
										<span className="absolute w-1.5 h-1.5 rounded-full bottom-1 right-1 animate-pulse bg-primary-400" />
									)}
								</div>
								<PopoverContent asChild>
									<SpotifyWidget />
								</PopoverContent>
							</Popover>

							{SOCIALS.map((social) => (
								<SocialLink
									href={social.href}
									key={social.platform}
									platform={social.platform}
								/>
							))}
						</motion.div>
					</div>
				</nav>
			</div>
		</header>
	);
};
