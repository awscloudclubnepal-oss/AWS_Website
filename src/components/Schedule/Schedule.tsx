"use client";
import React, { useState } from "react";
import { events } from "@/data/schedule";
import { TOTAL_HOURS, START_HOUR, formatTimeRange } from "@/lib/utils";
import ThemeToggle from "../Theme/ThemeSwitch";
import ScheduleModal from "./ScheduleModal";
const rooms = [...new Set(events.map((e) => e.room))];
interface EVENT_SCHEDULE {
	id: number;
	title: string;
	startTime: string;
	endTime: string;
	room: string;
	type: string;
	speaker?: string;
}

const getEventColor = (type: string | undefined) => {
	switch (type) {
		case "technical":
			return "bg-chart-1 text-primary-foreground";
		case "talk":
			return "bg-chart-2 text-primary-foreground";
		case "panel":
			return "bg-chart-3 text-primary-foreground";
		case "break":
			return "bg-chart-4 text-primary-foreground";
		default:
			return "bg-primary text-primary-foreground";
	}
};

const Schedule = () => {
	const [selectedEvent, setSelectedEvent] = useState<EVENT_SCHEDULE | null>(
		null,
	);
	const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
	const openModal = (event: EVENT_SCHEDULE) => {
		setSelectedEvent(event);
	};
	const closeModal = () => {
		setSelectedEvent(null);
	};
	return (
		<div className="p-4 sm:p-8 bg-background text-foreground">
			<div className="flex flex-col items-center sm:flex-row sm:justify-between mb-6">
				<h1 className="text-3xl font-bold text-center">
					Conference Schedule
				</h1>
				<div className="mt-2 sm:mt-0">
					<ThemeToggle />
				</div>
			</div>

			{/* Mobile View */}
			<div className="md:hidden">
				<div className="mb-4">
					<label htmlFor="room-select" className="sr-only">
						Select a room
					</label>
					<select
						id="room-select"
						value={selectedRoom}
						onChange={(e) => setSelectedRoom(e.target.value)}
						className="block w-full p-2 border border-border rounded-md bg-card text-foreground"
					>
						{rooms.map((room) => (
							<option key={room} value={room}>
								{room}
							</option>
						))}
					</select>
				</div>
				{events
					.filter(
						(event) => event.room === selectedRoom || event.room === "Stage",
					)
					.map((event) => (
						<div
							key={event.id}
							className="bg-card border border-border rounded-lg p-4 mb-4"
							onClick={() => openModal(event)}
						>
							<h2 className="font-bold text-lg text-primary">{event.title}</h2>
							<p className="text-muted-foreground">
								{event.startTime} - {event.endTime}
							</p>
							<p className="text-muted-foreground">{event.room}</p>
						</div>
					))}
			</div>

			{/* Desktop View - Grid Layout */}
			<div className="hidden md:block bg-card border border-border rounded-lg overflow-x-auto relative">
				{/* Background Grid */}
				<div
					className="grid"
					style={{ gridTemplateColumns: `60px repeat(${rooms.length}, 1fr)` }}
				>
					{/* Header */}
					<div className="h-12 bg-muted/50 border-r border-b border-border flex items-center justify-center font-bold text-sm text-foreground sticky top-0 z-20">
						Time
					</div>
					{rooms.map((room) => (
						<div
							key={`header-${room}`}
							className="h-12 bg-muted/50 border-r border-b border-border flex items-center justify-center font-bold text-sm text-foreground px-2 text-center sticky top-0 z-20"
						>
							{room}
						</div>
					))}

					{/* Grid Cells for visual background */}
					{Array.from({ length: TOTAL_HOURS }).map((_, timeIdx) => (
						<React.Fragment key={`row-bg-${timeIdx}`}>
							<div className="h-96 bg-muted/50 border-r border-b border-border flex items-center justify-center font-semibold text-sm text-muted-foreground">
								{formatTimeRange(START_HOUR + timeIdx, START_HOUR + timeIdx + 1)}
							</div>
							{rooms.map((room) => (
								<div
									key={`cell-bg-${timeIdx}-${room}`}
									className="h-96 border-r border-b border-border bg-accent relative"
								>
								</div>
							))}
						</React.Fragment>
					))}
				</div>

				{/* Event Overlay */}
				<div
					className="absolute top-12 left-0 right-0 bottom-0 grid"
					style={{ gridTemplateColumns: `60px repeat(${rooms.length}, 1fr)` }}
				>
					{/* Time column placeholder */}
					<div />

					{/* Room columns for events */}
					{rooms.map((room) => (
						<div
							key={`event-col-${room}`}
							className="relative border-r border-border"
						>
							{events
								.filter((event) => event.room === room)
								.map((event) => {
									const [startHour, startMin] = event.startTime
										.split(":")
										.map(Number);
									const [endHour, endMin] = event.endTime.split(":").map(Number);

									// Calculate total minutes from the start of the schedule day
									const totalStartMinutes =
										(startHour - START_HOUR) * 60 + startMin;
									const totalEndMinutes = (endHour - START_HOUR) * 60 + endMin;
									const durationMinutes = totalEndMinutes - totalStartMinutes;

									// Calculate percentage-based top and height
									const topPercent =
										(totalStartMinutes / (TOTAL_HOURS * 60)) * 100;
									const heightPercent =
										(durationMinutes / (TOTAL_HOURS * 60)) * 100;

									const eventColorClass = getEventColor(event.type);

									return (
										<div
											key={event.id}
											className="absolute w-full px-1 z-10 hover:z-50"
											style={{
												top: `${topPercent}%`,
												height: `${heightPercent}%`,
											}}
										>
											<div
												className={`h-full ${eventColorClass} rounded p-1 text-xs overflow-hidden cursor-pointer hover:scale-105 transition-all shadow-md flex flex-col justify-center items-center`}
												onClick={() => openModal(event)}
												title={event.title}
											>
												<div className="font-semibold line-clamp-1 text-xs">
													{event.title}
												</div>
												{durationMinutes >= 20 && (
													<div className="text-xs opacity-90">
														{event.startTime} - {event.endTime}
													</div>
												)}
											</div>
										</div>
									);
								})}
						</div>
					))}
				</div>
			</div>
			<ScheduleModal event={selectedEvent} onClose={closeModal} />
		</div>
	);
};
export default Schedule;
