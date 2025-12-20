"use client";
import React, { useState } from "react";
// backend chaiye events lai backend bata tanney 
import { events } from "@/data/schedule"
import { TOTAL_HOURS, START_HOUR, getEventStyle, formatTime, formatTimeRange } from "@/lib/utils";
import ThemeToggle from "../Theme/ThemeSwitch";
import ScheduleModal from "./ScheduleModal";
const rooms = [...new Set(events.map((e) => e.room))];
interface EVENT_SCHEDULE {
	id: number,
	title: string,
	startTime: string,
	endTime: string,
	room: string
}
const Schedule = () => {
	const [selectedEvent, setSelectedEvent] = useState<EVENT_SCHEDULE | null>(null);
	const openModal = (event: EVENT_SCHEDULE) => {
		setSelectedEvent(event);
	};
	const closeModal = () => {
		setSelectedEvent(null);
	};
	return (
		<div className="p-4 sm:p-8 bg-background text-foreground">
			<h1 className=" relative text-3xl font-bold mb-6 text-center  ">
				Conference Schedule
				<div className="absolute right-0 top-0 ">
					<ThemeToggle />
				</div>
			</h1>

			{/* Mobile View */}
			<div className="md:hidden">
				{events.map((event) => (
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
							<div className="relative w-full h-full p-2">
								{events
									.filter((event) => event.room === room)
									.map((event) => (
										<div
											key={event.id}
											className="absolute top-2 bottom-2 bg-primary text-primary-foreground p-2 rounded shadow-md hover:bg-primary transition overflow-hidden   hover:scale-105 hover:z-50 transition-all ease-in-out p-2"
											style={getEventStyle(event.startTime, event.endTime)}
											onClick={() => openModal(event)}
										>
											<div className="flex   flex-col justify-center items-center ">
												<div className="font-semibold  text-xs text-pretty md:text-balance ">
													{event.title.length > 50 ? `${event.title.slice(0, 20)}...` : event.title}
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
			<ScheduleModal event={selectedEvent} onClose={closeModal} />
		</div>
	);
};
export default Schedule;
