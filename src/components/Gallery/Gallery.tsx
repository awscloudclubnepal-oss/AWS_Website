"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { categories, galleryItems, type GalleryItem } from "@/data/gallery";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  // Modal / image viewer state
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  

  // Filter gallery items based on active category
  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // For navigation buttons
  const galleryRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Scroll handler
  const updateNav = () => {
    const el = galleryRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.offsetWidth >= el.scrollWidth - 2);
  };

  useEffect(() => {
    updateNav();
    const el = galleryRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateNav);
    window.addEventListener("resize", updateNav);
    return () => {
      el.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", updateNav);
    };
  }, [filteredItems]);

  const scrollLeft = () => {
    const el = galleryRef.current;
    if (!el) return;
    el.scrollBy({ left: -340, behavior: "smooth" });
  };
  const scrollRight = () => {
    const el = galleryRef.current;
    if (!el) return;
    el.scrollBy({ left: 340, behavior: "smooth" });
  };

  // Open modal for an item
  const openGallery = (item: GalleryItem, startIndex = 0) => {
    setSelectedItem(item);
    setSelectedImageIndex(startIndex);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedItem(null);
    setSelectedImageIndex(0);
  };

  const navigateModalImage = (dir: "left" | "right") => {
    if (!selectedItem) return;
    setSelectedImageIndex((prev) => {
      if (dir === "left") return prev === 0 ? selectedItem.images.length - 1 : prev - 1;
      return prev === selectedItem.images.length - 1 ? 0 : prev + 1;
    });
  };

  // Keyboard handlers for modal
  useEffect(() => {
    if (!openModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigateModalImage("left");
      if (e.key === "ArrowRight") navigateModalImage("right");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openModal, selectedItem]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (openModal) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [openModal]);

  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">Gallery</h2>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-start gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`rounded-full text-xs md:text-sm px-4 py-2 font-semibold transition-all ${
              activeCategory === category.id
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                : "bg-white text-black dark:bg-black dark:text-white border border-gray-200 dark:border-gray-700"
            }`}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Responsive Carousel Gallery */}
      <Carousel
        className="w-full"
        plugins={[autoplayRef.current]}
        onMouseEnter={autoplayRef.current.stop}
        onMouseLeave={autoplayRef.current.reset}
      >
        <CarouselContent>
          {filteredItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                {/* Card content */}
                <div
                  className="flex-shrink-0 w-full h-[340px] bg-white dark:bg-gray-900 rounded-xl shadow group transition-all duration-300 border border-gray-100 dark:border-gray-800 relative md:hover:w-[600px] md:hover:max-w-[640px] md:hover:z-10"
                >
                  <div className="w-full h-full flex flex-col md:group-hover:flex-row transition-all duration-500">
                    {/* Image section */}
                    <div className="w-full h-[180px] md:group-hover:w-1/2 md:group-hover:h-full rounded-t-xl md:group-hover:rounded-l-xl md:group-hover:rounded-tr-none overflow-hidden transition-all duration-300">
                      <img
                        src={item.card}
                        alt={item.title}
                        className="object-cover w-full h-full md:group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    {/* Info section */}
                    <div className="flex flex-col justify-between h-[calc(100%-180px)] md:group-hover:h-full p-4 w-full md:group-hover:w-1/2 transition-all duration-300">
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-1 line-clamp-1">{item.title}</h3>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 md:group-hover:line-clamp-none transition-all duration-200">{item.description}</p>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => openGallery(item)}
                          className="text-xs md:text-sm font-medium text-blue-600 hover:underline flex items-center gap-1"
                        >
                          View Gallery ({item.images.length} image{item.images.length > 1 ? 's' : ''})
                          <span aria-hidden className="ml-1">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      {/* Modal Image Viewer */}
      {openModal && selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full shadow-lg overflow-hidden">
            <div className="relative">
              <button
                aria-label="Close"
                className="absolute right-2 top-2 z-20 bg-white/80 dark:bg-gray-800/80 rounded-md p-1"
                onClick={closeModal}
              >
                ✕
              </button>
              <Image
                key={selectedImageIndex}
                src={selectedItem.images[selectedImageIndex]}
                alt={`${selectedItem.title} - ${selectedImageIndex + 1}`}
                className="w-full h-[56vh] object-contain bg-black"
                width={1200}
                height={675}
              />

              <button
                aria-label="Previous image"
                onClick={() => navigateModalImage("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2"
              >
                ←
              </button>
              <button
                aria-label="Next image"
                onClick={() => navigateModalImage("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2"
              >
                →
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 p-3 overflow-x-auto bg-card">
              {selectedItem.images.map((img, idx) => (
                <button
                  key={idx}
                  className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border ${idx === selectedImageIndex ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'}`}
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <Image src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" width={160} height={90} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Hide scrollbar for all browsers */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
export default Gallery;
