"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface CountdownTimerProps {
  targetDate: string;
  large?: boolean;
}

export default function CountdownTimer({
  targetDate,
  large = false,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    if (isNaN(target)) {
      console.error("Invalid targetDate:", targetDate);
      return;
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className={`flex flex-col items-center ${large ? "w-full" : ""}`}>
    
      <div className="flex gap-1 sm:gap-2 md:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <Card
              className={`bg-[#a166e8] backdrop-blur-sm 
                flex items-center justify-center 
                ${large ? "w-12 h-12 sm:w-15 sm:h-15 md:w-20 md:h-20" : "w-8 h-8 sm:w-10 sm:h-10"}`}
            >
              <motion.span
                key={unit.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`font-bold text-white ${
                  large ? "text-lg sm:text-2xl md:text-3xl lg:text-4xl" : "text-sm sm:text-xl"
                }`}
              >
                {unit.value.toString().padStart(2, "0")}
              </motion.span>
            </Card>
            <span
              className={`mt-1 text-center ${large ? "text-xs sm:text-sm" : "text-xs"}`}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
