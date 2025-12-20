import React, { useEffect, useState } from "react";
import { events } from "@/data/schedule";
type ScheduleModalProps = {
	event: (typeof events)[0] | null;
	onClose: () => void;
};
const ScheduleModal = ({ event, onClose }: ScheduleModalProps) => {
	const [modalEvent, setModalEvent] = useState(event);

	useEffect(() => {
		if (event) {
			setModalEvent(event);
		} else {
			const timer = setTimeout(() => {
				setModalEvent(null);
			}, 300); // animation duration
			return () => clearTimeout(timer);
		}
	}, [event]);
	if (!modalEvent) {
		return null;
	}
	return (
		<div
			className={`fixed inset-0 p-2 bg-accent/40 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-300 ${event ? "opacity-100 " : "opacity-0 "
				}`}
			onClick={onClose}
		>
			<div
				className={`bg-card p-8 rounded-lg shadow-lg max-w-md w-full transition-all duration-300 ${event ? "scale-100 opacity-100" : "scale-90 opacity-0"
					}`}
				onClick={e => e.stopPropagation()}
			>
				<h2 className="text-2xl font-bold mb-4">{modalEvent.title}</h2>
				<p className="text-lg mb-2">
					{modalEvent.startTime} - {modalEvent.endTime}
				</p>
				<p className="text-lg mb-4">{modalEvent.room}</p>
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
