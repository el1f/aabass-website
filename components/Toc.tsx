import React from "react";

import { TOCNode } from "../types";
import { Text } from ".";

export interface TocProps {
	contents: TOCNode[];
}

export const Toc: React.FC<TocProps> = ({ contents }) => {
	return (
		<div className="flex flex-col">
			<Text className="mb-4" size="sm">
				<strong className="tracking-widest">TABLE OF CONTENTS</strong>
			</Text>
			<ul className="flex flex-col gap-2 py-2 pl-4 border-l border-l-textDimmedDark/25 dark:border-l-textDimmedLight/25">
				{contents.map((node) => {
					return (
						<li
							className="before:content-[''] relative before:w-[2px] before:h-6 hover:before:bg-text before:transition-all before:bg-transparent transition-all text-text before:absolute before:-left-4 before:-translate-x-1/2 before:top-0"
							key={node.target}
						>
							<a className="mb-2" href={node.target}>
								<Text>{node.title}</Text>
							</a>
							{Boolean(node.nodes?.length) && (
								<ul className="flex flex-col gap-2 mt-2 ml-4">
									{node.nodes?.map((node) => (
										<li
											className="before:content-[''] relative before:w-[2px] before:h-6 hover:before:bg-text before:transition-all before:bg-transparent transition-all text-text before:absolute before:-left-8 before:-translate-x-1/2 before:top-0"
											key={node.target}
										>
											<a href={node.target}>
												<Text>{node.title}</Text>
											</a>
										</li>
									))}
								</ul>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
