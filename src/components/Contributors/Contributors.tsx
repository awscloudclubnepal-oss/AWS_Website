"use client";
import React from "react";
import contributors from "@/data/contributors";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

export const ContributorsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Contributors</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg">
            Discover the talented individuals behind development.
          </p>
        </div>
        <AnimatedTestimonials testimonials={contributors} />
      </div>
    </section>
  );
};
