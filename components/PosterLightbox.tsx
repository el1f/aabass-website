import { Dialog } from "@headlessui/react";
import Image, { ImageLoader } from "next/legacy/image";
import React from "react";
import ReactMarkdown from "react-markdown";

import {
	FragmentType,
	PosterFull as PosterFullFragment,
	useFragment,
} from "../graphql";
import { Heading, Icon, Strong, Text } from ".";

// TODO: move to lib
const hygraphImageLoader: ImageLoader = ({ src, width }) => {
	const relativeSrc = (src: string) => src.split("/").pop();

	return `https://media.graphassets.com/resize=width:${width}/${relativeSrc(
		src,
	)}`;
};

export const PosterLightbox: React.FC<{
	onClose: () => void;
	open: boolean;
	poster?: FragmentType<typeof PosterFullFragment>;
}> = ({ onClose, open, poster: posterRef }) => {
	const poster = useFragment(PosterFullFragment, posterRef);

	if (!poster) return null;

	return (
		<Dialog as="div" className="relative z-50" onClose={onClose} open={open}>
			<div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm" />

			<div className="fixed inset-0">
				<Dialog.Panel className="grid w-full h-full grid-cols-1 grid-rows-3 md:h-full md:grid-rows-1 md:grid-cols-5 lg:grid-cols-7">
					<figure className="block h-full backdrop-blur-lg md:row-span-1 row-span-2 md:col-span-3 lg:col-span-5 [&>span]:!h-full relative">
						<div className="absolute top-0 z-50 flex items-center justify-end w-full h-16 px-2 mb-4">
							<button
								className="block p-3 transition-all border border-transparent text-textDimmedDark/75 dark:text-textDimmedLight/75 hover:text-textDark hover:dark:text-textLight rounded-2xl dark:hover:bg-bgRaisedDark/50 dark:hover:border-textDimmedDark/25 hover:bg-bgRaisedLight"
								onClick={onClose}
							>
								<Icon name="close" />
							</button>
						</div>

						<Image
							alt={poster.name}
							height={poster.poster.height ?? 0}
							layout="responsive"
							loader={hygraphImageLoader}
							objectFit="contain"
							src={poster.poster.url}
							width={poster.poster.width ?? 0}
						/>
					</figure>
					<aside className="px-8 py-8 overflow-y-auto border-t md:h-screen md:border-l md:col-span-2 bg-bgBaseDark border-bgRaised">
						<Dialog.Title>
							<Heading className="mb-8" level={1}>
								{poster.name}
							</Heading>
						</Dialog.Title>
						<Dialog.Description>
							<ReactMarkdown
								components={{
									p({ children }) {
										return (
											<Text as="p" className="mb-6">
												{children}
											</Text>
										);
									},
									strong({ children }) {
										return <Strong>{children}</Strong>;
									},
								}}
							>
								{poster.description ?? ""}
							</ReactMarkdown>
						</Dialog.Description>
					</aside>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
