"use client";

import Image from "next/image";

export default function PresidentReview() {
  return (
    <section className="py-12 sm:py-16 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8 md:space-y-12 px-4 sm:px-6">
        <div className="relative z-10 max-w-xl space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Building the Cloud Community in Nepal.
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            AWS Cloud Club Nepal is more than just a student community.{" "}
            <span className="font-medium">It&aposs a movement</span> — empowering
            students, developers, and innovators to learn, build, and grow with
            the power of AWS Cloud.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:gap-12 lg:gap-24 lg:grid-cols-2">
          <div>
            <p className="text-sm sm:text-base md:text-lg">
              We bring together cloud enthusiasts, builders, and learners to
              foster innovation and real-world skills through workshops,
              hackathons, and community projects.
            </p>
            <div className="mb-8 sm:mb-12 mt-8 sm:mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +2000
                </div>
                <p className="text-sm sm:text-base">Community Members</p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +50
                </div>
                <p className="text-sm sm:text-base">Workshops & Events</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-3 sm:pl-4">
              <p className="text-sm sm:text-base md:text-lg">
                Being part of AWS Cloud Club Nepal has opened endless
                opportunities for students to explore cloud technologies. The
                community spirit and learning culture make it an inspiring place
                for the next generation of builders.
              </p>

              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                <cite className="block font-medium text-sm sm:text-base">
                  Nikhil K.C, Club President
                </cite>
                <Image
                  className="border rounded-xl h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                  src="/logo.png"
                  alt="AWS Club Logo"
                  height="50"
                  width="50"
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
