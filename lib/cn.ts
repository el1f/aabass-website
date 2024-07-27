import { ClassValue } from "class-variance-authority/dist/types";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(classNames(inputs));
}
