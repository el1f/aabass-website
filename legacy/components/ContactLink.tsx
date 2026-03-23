import { Text } from ".";

export interface ContactLinkProps {
	href: string;
	label: string;
	value: string;
}

export const ContactLink: React.FC<ContactLinkProps> = ({
	href,
	label,
	value,
}) => (
	<a href={href}>
		<div className="flex flex-col px-3 py-2 -mx-3 -my-2 transition-all border border-transparent border-solid rounded-lg cursor-pointer group hover:border-textDimmedLight/10 hover:bg-bgRaisedDark">
			<Text className="transition-all group-hover:translate-x-1" size="sm">
				<strong className="dark:text-textLight text-textDark group-hover:text-primaryShade">
					{label}
				</strong>
			</Text>
			<Text className="transition-all group-hover:translate-x-2">{value}</Text>
		</div>
	</a>
);
