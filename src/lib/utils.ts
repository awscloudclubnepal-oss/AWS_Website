import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const TOTAL_HOURS = 8;
export const START_HOUR = 10;
export const getEventStyle = (startTime: string, endTime: string) => {
	const [startHour, startMin] = startTime.split(":").map(Number);
	const [endHour, endMin] = endTime.split(":").map(Number);

	const startTotalMins = (startHour - START_HOUR) * 60 + startMin;
	const endTotalMins = (endHour - START_HOUR) * 60 + endMin;

	const leftPercent = (startTotalMins / (TOTAL_HOURS * 60)) * 100;
	const widthPercent =
		((endTotalMins - startTotalMins) / (TOTAL_HOURS * 60)) * 100;

	return {
		left: `${leftPercent}%`,
		width: `${widthPercent}%`,
	};
};

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

export const formatTime = (hour: number) => {
	const period = hour >= 12 ? "PM" : "AM";
	const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
	return `${displayHour}${period}`;
};
