import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

import { SOCIALS } from "../data";
import { cn } from "../lib/cn";
import { useWindowScroll } from "../lib/hooks";
import {
	SpotifyErrorPayload,
	SpotifyNowPlayingPayload,
} from "../types/api/spotify";
import { Button, DynamicLogo, Icon, SocialLink, Text } from ".";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

const SCROLL_THRESHOLD = 512;

const SpotifyWidget: React.FC = () => {
	const {
		data: currentlyPlayingSong,
		error,
		fetchStatus,
		isLoading,
	} = useQuery({
		queryFn: async () => {
			const song = await axios.get<
				SpotifyNowPlayingPayload | SpotifyErrorPayload
			>("/api/spotify/now-playing");
			return song.data;
		},
		queryKey: ["now-playing"],
		refetchInterval: 1000,
	});

	const musicLinks = (
		<div className="flex flex-col gap-2">
			<Button asChild startIcon="spotify" variant="outline">
				<Link
					href="https://open.spotify.com/user/11170893355?si=ebb8a9d89ad947bf"
					target="_blank"
				>
					Profile
				</Link>
			</Button>
			<Button asChild startIcon="lastfm" variant="outline">
				<Link href="https://www.last.fm/user/yami4529" target="_blank">
					Scrobbles
				</Link>
			</Button>
		</div>
	);

	const widgetContent = useMemo(() => {
		if (isLoading && fetchStatus !== "idle")
			return (
				<div className="p-3 mb-4 rounded-md bg-bgRaised">
					<Text size="sm">Loading</Text>
				</div>
			);

		if (!currentlyPlayingSong)
			return (
				<div className="p-3 mb-4 rounded-md bg-bgRaised">
					<Text size="sm">
						Currently listening to my thoughts instead of some sick beats
					</Text>
				</div>
			);

		if (error || "error" in currentlyPlayingSong) return <p>Error</p>;

		const artists = currentlyPlayingSong.item.artists.map((artist) => (
			<span
				className="[&:not(:last-child)]:after:content-[','] [&:not(:last-child)]:after:mr-1"
				key={artist.id}
			>
				<Link
					className="hover:underline underline-offset-2"
					href={artist.external_urls.spotify}
					target="_blank"
				>
					{artist.name}
				</Link>
			</span>
		));

		return (
			<>
				<Icon className="absolute top-4 left-4 " name="spotify" />
				<motion.figure
					className={cn(
						"w-64 mb-4 overflow-hidden rounded-full bg-textDimmed aspect-square relative",
						"before:content-[attr(data-icon)] before:w-4 before:h-4 before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-bgRaised before:rounded-full",
						"after:content-[attr(data-icon)] after:w-20 after:h-20 after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:bg-black/30 after:rounded-full",
					)}
					transition={{
						ease: "easeOut",
					}}
					variants={{
						hidden: { opacity: 0, scale: 1.2 },
						visible: { opacity: 1, scale: 1 },
					}}
				>
					<Image
						alt="Album cover"
						className={cn(
							{ pause: !currentlyPlayingSong.is_playing },
							"animate-spin-slow",
						)}
						height={256}
						src={currentlyPlayingSong.item.album.images[0].url}
						width={256}
					/>
				</motion.figure>
				<Text className="line-clamp-1">
					<Link
						className="hover:underline underline-offset-2"
						href={currentlyPlayingSong.item.external_urls.spotify}
						target="_blank"
					>
						{currentlyPlayingSong.item.name}
					</Link>
				</Text>
				<Text className="mb-2" size="sm">
					<Link
						className="hover:underline underline-offset-2"
						href={currentlyPlayingSong.item.album.external_urls.spotify}
						target="_blank"
					>
						{currentlyPlayingSong.item.album.name}
					</Link>
					{" • "}
					{artists}
				</Text>

				{/* Play progress */}
				<div className="w-full h-0.5 pointer-events-none relative bg-textDimmedDark/50 rounded overflow-hidden mb-4">
					<motion.span
						animate={{
							width:
								(currentlyPlayingSong.progress_ms /
									currentlyPlayingSong.item.duration_ms) *
									100 +
								"%",
						}}
						className="absolute bottom-0 left-0 h-0.5 bg-primary-400"
					/>
				</div>
			</>
		);
	}, [currentlyPlayingSong, error, fetchStatus, isLoading]);

	return (
		<motion.div
			animate="visible"
			className="p-4 overflow-hidden border rounded-lg bg-bgRaisedLight/50 dark:bg-bgRaisedDark/50 backdrop-blur-md dark:border-textLight/10 border-textDark/10"
			exit="hidden"
			initial="hidden"
			style={{
				perspective: 500,
			}}
			variants={{
				hidden: { opacity: 0, scale: 0.9, y: -32 },
				visible: {
					opacity: 1,
					scale: 1,
					transition: {
						delayChildren: 0.3,
					},
					y: 0,
				},
			}}
		>
			<div className="flex flex-col w-64">
				{widgetContent}
				{musicLinks}
			</div>
		</motion.div>
	);
};

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
		<header className={twMerge(classNames("block w-full h-16 mt-16"))}>
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
							"flex items-center justify-between h-20 w-full max-w-2xl pl-[1.125rem] pr-4 mx-auto print:hidden rounded-3xl",
							{
								"backdrop-blur-md -top-40 relative w-[calc(100%-32px)] md:full border dark:border-textLight/10 border-textDark/10 shadow-xl transition-transform bg-bgRaisedLight/25 dark:bg-bgRaisedDark/25":
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
								<PopoverTrigger asChild className="relative">
									<>
										<SocialLink platform="spotify" />
										{currentlyPlayingSong && (
											<span className="absolute w-1.5 h-1.5 rounded-full bottom-1 right-1 animate-pulse bg-primary-400" />
										)}
									</>
								</PopoverTrigger>
								<AnimatePresence>
									<PopoverContent asChild>
										<SpotifyWidget />
									</PopoverContent>
								</AnimatePresence>
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
