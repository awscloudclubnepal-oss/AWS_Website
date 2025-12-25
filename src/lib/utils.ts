import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const TOTAL_HOURS = 8;
export const START_HOUR = 8;

export const formatTimeRange = (startHour: number, endHour: number) => {
	const startPeriod = startHour >= 12 ? "PM" : "AM";
	const endPeriod = endHour >= 12 ? "PM" : "AM";
	const startDisplay =
		startHour > 12 ? startHour - 12 : startHour === 0 ? 12 : startHour;
	const endDisplay =
		endHour > 12 ? endHour - 12 : endHour === 0 ? 12 : endHour;

	if (startPeriod === endPeriod) {
		return `${startDisplay}-${endDisplay}${startPeriod}`;
	} else {
		return `${startDisplay}${startPeriod}-${endDisplay}${endPeriod}`;
	}
};
