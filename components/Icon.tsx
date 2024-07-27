import classNames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";

import ArrowLeft from "../public/icons/arrow-left.svg";
import Close from "../public/icons/cross.svg";
import Dribbble from "../public/icons/dribbble.svg";
import Github from "../public/icons/github.svg";
import Instagram from "../public/icons/instagram.svg";
import Linkedin from "../public/icons/linkedin.svg";
import DarkTheme from "../public/icons/moon-stars.svg";
import LightTheme from "../public/icons/sun.svg";
import { SocialPlatform } from "../types";

export type IconName =
	| SocialPlatform
	| "dark"
	| "light"
	| "arrowLeft"
	| "close";

export interface IconProps {
	className?: string;
	name: IconName;
}

export const Icon: React.FC<IconProps> = ({ className, name }) => {
	const clsx = twMerge(classNames("h-6", className));

	switch (name) {
		case "dribbble":
			return <Dribbble className={clsx} />;
		case "linkedin":
			return <Linkedin className={clsx} />;
		case "instagram":
			return <Instagram className={clsx} />;
		case "github":
			return <Github className={clsx} />;
		case "light":
			return <LightTheme className={clsx} />;
		case "dark":
			return <DarkTheme className={clsx} />;
		case "arrowLeft":
			return <ArrowLeft className={clsx} />;
		case "close":
			return <Close className={clsx} />;
	}
};
