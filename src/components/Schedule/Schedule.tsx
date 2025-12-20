"use client";
import React from "react";
import { events } from "@/data/schedule"
// can be done using the api request to serverless backend
const rooms = [...new Set(events.map((e) => e.room))];
const TOTAL_HOURS = 8;
const START_HOUR = 10;
const formatTime = (hour: number) => {
	const period = hour >= 12 ? "PM" : "AM";
	const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
	return `${displayHour}${period}`;
};

const formatTimeRange = (startHour: number, endHour: number) => {
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
const getEventStyle = (startTime: string, endTime: string) => {
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

const Schedule = () => {
	return (
		<div className="p-4 sm:p-8 bg-background text-foreground">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Conference Schedule
			</h1>

			{/* Mobile View */}
			<div className="md:hidden">
				{events.map((event) => (
					<div
						key={event.id}
						className="bg-card border border-border rounded-lg p-4 mb-4"
					>
						<h2 className="font-bold text-lg text-primary">{event.title}</h2>
						<p className="text-muted-foreground">
							{event.startTime} - {event.endTime}
						</p>
						<p className="text-muted-foreground">{event.room}</p>
					</div>
				))}
			</div>

			{/* Desktop View */}
			<div className="hidden md:block bg-card border border-border rounded-lg overflow-hidden">
				{/* Time header */}
				<div className="flex bg-muted/50 border-b border-border">
					<div className="w-40 shrink-0 border-r border-border" />
					<div className="flex-1 relative h-12 flex items-center">
						{Array.from({ length: TOTAL_HOURS }).map((_, i) => {
							const hour = START_HOUR + i;
							const nextHour = hour + 1;
							return (
								<div
									key={i}
									className="absolute h-full flex items-center  justify-center text-sm font-semibold text-muted-foreground border-r border-border"
									style={{
										left: `${(i / TOTAL_HOURS) * 100}%`,
										width: `${(1 / TOTAL_HOURS) * 100}%`,
									}}
								>
									<span className="pl-2">
										{formatTimeRange(hour, nextHour)}
									</span>
								</div>
							);
						})}
					</div>
				</div>

				{/* Room sections */}
				{rooms.map((room, roomIdx) => (
					<div
						key={room}
						className={`flex ${roomIdx < rooms.length - 1 ? "border-b" : ""
							} border-border`}
					>
						{/* Room name on left - Fixed width */}
						<div className="w-40 shrink-0 bg-muted/50 border-r border-border flex items-center p-4 font-bold text-foreground">
							{room}
						</div>

						{/* Timeline for this room */}
						<div className="flex-1 relative" style={{ minHeight: "120px" }}>
							{/* Time grid lines */}
							{Array.from({ length: TOTAL_HOURS }).map((_, i) => (
								<div
									key={i}
									className="absolute top-0 bottom-0 border-r border-border"
									style={{ left: `${((i + 1) / TOTAL_HOURS) * 100}%` }}
								/>
							))}

							{/* Events in this room */}
							<div className="relative w-full h-full">
								{events
									.filter((event) => event.room === room)
									.map((event) => (
										<div
											key={event.id}
											className="absolute top-2 bottom-2 bg-primary text-primary-foreground p-2 rounded shadow-md hover:bg-primary/90 transition overflow-hidden"
											style={getEventStyle(event.startTime, event.endTime)}>
											<div className="flex   flex-col justify-center items-center p-4">
												<div className="font-semibold text-xs  text-wrap align-middle">
													{event.title}
												</div>
												<div className="text-xs opacity-90">
													{formatTime(parseInt(event.startTime.split(":")[0]))}-
													{formatTime(parseInt(event.endTime.split(":")[0]))}
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Schedule;
