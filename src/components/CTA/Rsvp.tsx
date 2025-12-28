"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Map, CalendarDays, MapPinned, Ticket } from "lucide-react";
import CountdownTimer from "../CountDown/CDComponent";
import SponserUs from "../CountDown/SponserUsComponent";
import SpeakerSection from "../CountDown/Speakers";
import Schedule from "@/components/Schedule/Schedule";
import TicketModal from "./TicketModal";

function Rsvp() {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  return (
    <div
      id="scd"
      className="relative py-12 sm:py-16 my-12 sm:my-16 lg:my-32 flex items-center justify-center px-4 sm:px-6"
    >
      {/* Lines */}
      <div className="absolute left-0 right-0 top-[15px] sm:top-[20px] md:top-[48px] z-10 h-px w-full bg-border dark:bg-neutral-700"></div>
      <div className="absolute bottom-0 right-[15px] sm:right-[20px] md:right-[48px] top-0 z-10 h-full w-px bg-border dark:bg-neutral-700"></div>
      <div className="absolute bottom-[15px] sm:bottom-[20px] md:bottom-[48px] left-0 right-0 z-10 h-px w-full bg-border dark:bg-neutral-700"></div>
      <div className="absolute bottom-0 left-[15px] sm:left-[20px] md:left-[48px] top-0 z-10 h-full w-px bg-border dark:bg-neutral-700"></div>

      {/* Top Right Cross */}
      <div className="absolute right-[28px] sm:right-[43.5px] top-[35px] sm:top-[48px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute right-[33px] sm:right-[48px] top-[30px] sm:top-[43.5px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Top Left Cross */}
      <div className="absolute left-[27.5px] sm:left-[42.5px] right-0 top-[35px] sm:top-[48px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute left-[33px] sm:left-[48px] right-0 top-[30px] sm:top-[42.5px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Bottom Left Cross */}
      <div className="absolute bottom-[35px] sm:bottom-[48px] left-[27.5px] sm:left-[42.5px] right-0 z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute bottom-[30px] sm:bottom-[42.5px] left-[33px] sm:left-[48px] right-0 z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Bottom Right Cross */}
      <div className="absolute bottom-[35px] sm:bottom-[48px] right-[28px] sm:right-[43.5px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute bottom-[30px] sm:bottom-[43.5px] right-[33px] sm:right-[48px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* lines end */}

      {/* Flex column */}
      <div className=" w-full max-w-6xl flex flex-col gap-y-2 p-1 justify-center items-center ">
        {/* Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8">
          {/* Map Side */}
          <div className="flex items-center justify-center order-1 md:block">
            <div className="relative w-full overflow-hidden rounded-2xl border border-border/50 shadow-lg bg-gradient-to-br from-primary/5 to-transparent p-1">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.701559942332!2d85.27633243675179!3d27.68870078269716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d9284b605%3A0xdeff9faa80d88afb!2sAdvanced%20College%20of%20Engg.%20Management!5e0!3m2!1sen!2snp!4v1766767482385!5m2!1sen!2snp"
                  width="500"
                  height="450"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
                />
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="flex flex-col justify-between py-2 sm:py-4 px-2 sm:px-4 lg:px-0 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary font-medium mb-2">
                <MapPinned className="w-4 h-4" />
                <span>Where It Took Place</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-wide leading-snug">
                The Venue That Hosted It All
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                AWS Student Community Day 2025 was held at Advanced College of Engineering, 
                where hundreds of cloud enthusiasts gathered for a day of hands-on workshops, 
                expert talks, and unforgettable networking moments.
              </p>
            </div>


            {/* Event Info */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <p className="text-xs text-muted-foreground">Event Details</p>
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
                  <CalendarDays className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-medium">
                    Held on Dec 27, 2025 | 8 A.M - 5 P.M
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
                  <MapPinned className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-medium">
                    Advanced College of Engineering, Kupondole
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* <SponserUs/> */}
        <Schedule />
        <SpeakerSection />
      </div>

      {/* Ticket Modal */}
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />
    </div>
  );
}

export default Rsvp;
