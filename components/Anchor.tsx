import classNames from "classnames";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

import { Text, TextProps } from "./";

export const Anchor: React.FC<
	PropsWithChildren<{ href: string } & TextProps>
> = ({ href, ...textProps }) => (
	<Link href={href}>
		<a className="relative after:block after:absolute after:bottom-0 after:left-0 after:bg-primaryShade after:content-[''] hover:after:h-full after:h-[2px] dark:after:mix-blend-difference after:mix-blend-darken after:w-full after:transition-all tracking-widest">
			<Text
				{...textProps}
				className={classNames("relative", {
					[`${textProps.className}`]: textProps.className,
				})}
			/>
		</a>
	</Link>
);
