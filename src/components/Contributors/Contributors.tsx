"use client";

import React from "react";
import contributors from "@/data/contributors";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ContributorCard from "./ContributorCard";

export const ContributorsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-14 text-foreground">
          Our Contributors
        </h2>


        <Carousel>
          <CarouselContent className="-ml-1 gap-2 sm:gap-4">
            {contributors.map((contributor, idx) => (
              <CarouselItem key={idx} className="p-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <ContributorCard contributor={contributor} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section >
  );
};

