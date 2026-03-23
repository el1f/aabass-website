import { Dialog, Transition } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import React, { Fragment } from "react";

import {
	FragmentType,
	IdeaCard as IdeaDialogFragment,
	useFragment,
} from "../graphql";
import { Anchor, CodeChip, Heading, Text } from ".";

export const IdeaDialog: React.FC<{
	idea?: FragmentType<typeof IdeaDialogFragment>;
	onClose: () => void;
	open: boolean;
}> = ({ idea: ideaRef, onClose, open }) => {
	const { t } = useTranslation(["ideas", "common"]);
	const idea = useFragment(IdeaDialogFragment, ideaRef);

	return (
		<Transition appear as={Fragment} show={open}>
			<Dialog as="div" className="relative z-10" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-200"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex justify-center min-h-full pt-32 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-200"
							enterFrom="opacity-0 translate-y-24"
							enterTo="opacity-100 translate-y-0"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-24 md:translate-y-24"
						>
							<Dialog.Panel className="w-full max-w-3xl px-6 py-6 pb-32 overflow-hidden text-left align-middle transition-all transform shadow-xl md:py-24 rounded-t-2xl md:rounded-xl dark:bg-bgRaisedDark bg-bgRaisedLight">
								{(idea?.dependencies.length ?? 0) > 0 && (
									<div className="flex flex-col items-start px-3 py-2 mb-8 -mx-3 -mt-3 rounded-lg empty:hidden before:text-xs">
										<div className="flex flex-col items-start w-full max-w-xl mx-auto">
											<Text size="sm">
												<strong>{t("dialog.dependenciesLabel")}</strong>
											</Text>
											{idea?.dependencies.map((dependency) => (
												<Anchor
													href={`/ideas/?activeIdea=${dependency.id}`}
													key={dependency.id}
												>
													{dependency.summary}
												</Anchor>
											))}
										</div>
									</div>
								)}

								<div className="max-w-xl mx-auto">
									<div className="mb-8">
										<CodeChip>{idea?.targetVersion}</CodeChip>
									</div>
									<Dialog.Title as={Heading} className="mb-4" level={2}>
										{idea?.summary}
									</Dialog.Title>
									<Dialog.Description>
										<Text className="leading-relaxed">{idea?.description}</Text>
									</Dialog.Description>

									<div className="flex flex-col items-start w-full max-w-xl gap-8 mx-auto mt-8">
										{idea?.targetPages.length !== 0 && (
											<div className="flex flex-col items-start gap-2">
												<Text size="sm">
													<strong>{t("dialog.targetPagesLabel")}</strong>
												</Text>
												<div className="flex flex-col items-start gap-2">
													{(idea?.targetPages ?? []).map((page) => (
														<Text key={page}>{t(`common:pages.${page}`)}</Text>
													))}
												</div>
											</div>
										)}

										{idea?.targetComponents.length !== 0 && (
											<div className="flex flex-col items-start gap-2">
												<Text size="sm">
													<strong>{t("dialog.targetComponentsLabel")}</strong>
												</Text>
												<div className="flex flex-col items-start gap-2">
													{(idea?.targetComponents ?? []).map((component) => (
														<Text key={component}>
															{t(`common:components.${component}`)}
														</Text>
													))}
												</div>
											</div>
										)}
									</div>

									<section className="mt-16">
										<Heading className="mb-4" level={4}>
											{t("dialog.updatesTitle")}
										</Heading>
										<div className="p-4 border rounded-lg border-text border-textDimmedDark">
											<Text>{t("dialog.updatesPlaceholder")}</Text>
										</div>
									</section>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
