import React from "react";
import { events } from "@/data/schedule";
type ScheduleModalProps = {
	event: typeof events[0] | null;
	onClose: () => void;
};
const ScheduleModal = ({ event, onClose }: ScheduleModalProps) => {
	if (!event) return null;
	return (
		<div className="fixed inset-0 p-2 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center" onClick={onClose}>
			<div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full" onClick={e => e.stopPropagation()}>
				<h2 className="text-2xl font-bold mb-4">{event.title}</h2>
				<p className="text-lg mb-2">
					{event.startTime} - {event.endTime}
				</p>
				<p className="text-lg mb-4">{event.room}</p>
				<button
					onClick={onClose}
					className="bg-primary text-primary-foreground px-4 py-2 rounded-lg"
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default ScheduleModal;
