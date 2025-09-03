import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Map, CalendarDays,  MapPinned } from "lucide-react";
import CountdownTimer from "../CountDown/CDComponent";

function Rsvp() {
  return (
    <div id="scd" className="relative py-12 sm:py-16 my-12 sm:my-16 lg:my-32 flex items-center justify-center px-4 sm:px-6">
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

      {/* Grid Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8">
        {/* Image Side */}
        <div className="flex items-center justify-center order-1 hidden md:block">
          <Image
            className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            src="/aws-scd.png"
            width={450}
            height={450}
            loading="lazy"
            decoding="async"
            alt="AWS Student Community Day"
          />
        </div>

        {/* Text Content Side */}
        <div className="flex flex-col justify-between py-2 sm:py-4 px-2 sm:px-4 lg:px-0 order-1 lg:order-2">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-wide leading-snug">
              AWS Student Community Day 2025
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              AWS Student Community Day 2025 is a student-led event featuring
              hands-on workshops, expert talks, and networking opportunities.
              Join fellow cloud enthusiasts to learn, build, and connect with
              the AWS community.
            </p>
          </div>

          {/* Countdown */}
          <div className="mb-6 sm:mb-8 w-full max-w-md">
            <CountdownTimer targetDate="2025-11-15T08:00:00" large />
          </div>

          {/* Event Info */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Nov 15, 2025 | 10 A.M - 5 P.M</span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
                <MapPinned className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Advanced College of Engineering</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <Button size="lg" className="text-white w-full sm:w-auto text-sm sm:text-base" asChild>
                <Link
                  target="_blank"
                  href="https://www.meetup.com/aws-cloud-club-at-tribhuvan-university/events/310674609/"
                >
                  RSVP Now!
                </Link>
              </Button>

              <Button size="lg" className="text-white w-full sm:w-auto text-sm sm:text-base" asChild>
                <Link target="_blank" href="https://maps.app.goo.gl/QVQ5cZpybMoa6u4U6">
                  <Map className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Open in Google Maps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
