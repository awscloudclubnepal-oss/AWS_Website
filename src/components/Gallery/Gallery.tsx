"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

// Example images, replace with your own or pass as props
const images = [
  "/gallery_assests/Aws advance/Advance_1.JPG",
  "/gallery_assests/Aws advance/Advance_2.JPG",
  "/gallery_assests/Aws advance/Advance_3.JPG",
  "/gallery_assests/Aws advance/Advance_4.JPG",
  "/gallery_assests/Aws advance/Advance_5.JPG",
  "/gallery_assests/Aws advance/AWS_Advance_front.JPG",
  "/gallery_assests/AWS_SCD_2024/SCD_1.jpg",
  "/gallery_assests/AWS_SCD_2024/SCD_2.jpg",
  "/gallery_assests/AWS_SCD_2024/SCD_Front.jpg",
  "/gallery_assests/Meetups/Meetup_1.jpg",
  "/gallery_assests/Meetups/Meetup_2.jpg",
  "/gallery_assests/Meetups/Meetup_3.jpg",
  "/gallery_assests/Meetups/Meetup_front.jpg",
  "/gallery_assests/Meetups/Meetup_sample_image.jpg",
  "/gallery_assests/Upcoming/Upcoming_front.jpg",
  "/gallery_assests/Workshops/Aws_Fundamentals/KEC/KEC_1.jpg",
  "/gallery_assests/Workshops/Aws_Fundamentals/KEC/KEC_2.jpg",
  "/gallery_assests/Workshops/Aws_Fundamentals/KEC/KEC_3.jpg",
  "/gallery_assests/Workshops/Aws_Fundamentals/KEC/KEC_front.jpg",
  "/gallery_assests/Workshops/Aws_Fundamentals/KhEC/KhEC_1.jpg",
  "/gallery_assests/Workshops/Aws_Fundamentals/KhEC/KhEC_2.jpg",
  "/gallery_assests/Workshops/Aws_Fundamentals/KhEC/KhEC_3.jpg",
  "/gallery_assests/Workshops/Aws_Fundamentals/KhEC/KhEC_4.jpg",
  "/gallery_assests/Workshops/Aws_Fundamentals/KhEC/KhEC_front.jpg",
  "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_1.JPG",
  "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_2.JPG",
  "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_3.JPG",
  "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_4.JPG",
  "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_5.JPG",
  "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_Front.JPG",
];

const Gallery = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Gallery</h2>
      <div className="relative">
        <Carousel
          className="w-full"
          opts={{ align: "start", loop: true }}
        >
          <CarouselPrevious />
          <CarouselContent className="gap-4">
            {images.map((src, idx) => (
              <CarouselItem
                key={idx}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="aspect-[4/3] w-full h-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
