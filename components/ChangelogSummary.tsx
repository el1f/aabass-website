import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";

import { CodeChip, Text } from ".";

export interface ChangelogSummaryProps {
	versions: {
		version: string;
	}[];
}

export const ChangelogSummary: React.FC<ChangelogSummaryProps> = ({
	versions,
}) => {
	const { t } = useTranslation("changelog");

	return (
		<div className="absolute bottom-0 flex flex-col items-start h-32 gap-2 justify-items-start left-full">
			{versions.map(({ version }, i) => (
				<Link
					href={`/changelog${
						i === 0 ? "" : `#${version.replaceAll(".", "_")}`
					}`}
					id={version.replaceAll(".", "_")}
					key={version}
				>
					<a className="flex items-center gap-2 p-2 transition-all opacity-50 cursor-pointer group hover:bg-gradient-to-r dark:from-bgBaseDark from-bgBaseLight to-bgBaseLight dark:to-bgBaseDark dark:hover:from-bgRaisedDark hover:from-bgRaisedLight rounded-2xl border-textDark/5 dark:border-textLight/5 hover:opacity-100">
						<div
							className="relative flex-shrink-0 w-6 h-6 border-2 rounded-full border-textDimmedDark dark:border-textDimmedLight after:absolute after:w-[2px] after:h-full group-last:after:h-32 after:left-1/2 after:translate-x-[-1px] after:top-6 after:bg-textDimmedDark dark:after:bg-textDimmedLight after:rounded-full
						"
						/>
						<CodeChip>{version}</CodeChip>
						<Text
							className="w-full overflow-hidden transition-all translate-x-2 opacity-0 max-w-4xs group-hover:translate-x-0 text-ellipsis whitespace-nowrap group-hover:opacity-100"
							component="div"
							size="sm"
						>
							{t(`changelog:${version}.summary`)}
						</Text>
					</a>
				</Link>
			))}
		</div>
	);
};
