import React from "react";

import Dribbble from "../public/icons/dribbble.svg";
import Github from "../public/icons/github.svg";
import Instagram from "../public/icons/instagram.svg";
import Linkedin from "../public/icons/linkedin.svg";
import DarkTheme from "../public/icons/moon-stars.svg";
import LightTheme from "../public/icons/sun.svg";
import { SocialPlatform } from "../types";

type IconName = SocialPlatform | "dark" | "light";

interface IconProps {
	name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name }) => {
	switch (name) {
		case "dribbble":
			return <Dribbble className="h-6" />;
		case "linkedin":
			return <Linkedin className="h-6" />;
		case "instagram":
			return <Instagram className="h-6" />;
		case "github":
			return <Github className="h-6" />;
		case "light":
			return <LightTheme className="h-6" />;
		case "dark":
			return <DarkTheme className="h-6" />;
	}
};
