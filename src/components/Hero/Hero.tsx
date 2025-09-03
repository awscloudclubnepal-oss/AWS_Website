"use client";
import React from "react";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import { motion, Transition } from "motion/react";
import { SCDButton } from "./SCDButton";

const transitionVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
  transition: {
    type: "spring",
    bounce: 0.3,
    duration: 1.5,
  },
};

export function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-16 sm:pt-20 md:pt-24">
            <motion.div
              initial={transitionVariants.hidden}
              animate={transitionVariants.visible}
              transition={transitionVariants.transition as Transition<unknown>}
              className="mx-auto max-w-7xl px-4 sm:px-6"
            >
              <div className="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5">
              <SCDButton/>
                <h1 className="mt-6 sm:mt-8 text-balance text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight xl:[line-height:1.125]">
                  AWS Cloud Club in Nepal
                </h1>

                <h2 className="mt-6 sm:mt-8 text-balance text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Where Clouds Code, Coffee Flows, and IT Geeks Roam Free!
                </h2>
                <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-wrap text-muted-foreground text-base sm:text-lg leading-relaxed hidden sm:block">
                  The AWS Cloud Club at Nepal introduces cloud computing
                  focusing on AWS, to Nepal&apos;s education sector. It&apos;s a
                  vibrant community of students exploring and innovating in
                  cloud technology, aiming to empower future Nepalese leaders
                  with essential digital skills.
                </p>

              </div>
            </motion.div>

            <motion.div
              transition={transitionVariants.transition as Transition<unknown>}
              className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20"
            >
              <div className="relative mt-6 sm:mt-8 md:mt-12 lg:mt-20 overflow-hidden px-4 sm:px-6 lg:px-8">
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border-2 p-2 sm:p-3 md:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background aspect-[16/10] sm:aspect-[15/10] relative hidden rounded-lg sm:rounded-xl md:rounded-2xl dark:block grayscale-100 w-full h-auto object-cover"
                    src="/hero-image.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                    priority
                  />
                  <Image
                    className="z-2 border-border/25 aspect-[16/10] sm:aspect-[15/10] relative rounded-lg sm:rounded-xl md:rounded-2xl border dark:hidden w-full h-auto object-cover"
                    src="/hero-image.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                    priority
                  />

                  <BorderBeam
                    duration={7}
                    delay={3}
                    size={400}
                    borderWidth={3}
                    className="from-transparent via-primary to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
