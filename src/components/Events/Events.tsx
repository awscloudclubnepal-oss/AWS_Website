"use client";
import React, { useState, useMemo } from "react";
import { events } from "@/data/events";
import type { EventItem, TagType } from "@/interface/IEvent";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

const groupEvents = (items: EventItem[]) => {
  const upcoming = items.filter((e) => e.status === "upcoming");
  const past = items.filter((e) => e.status === "past");
  // sort upcoming ascending by date, past descending
  upcoming.sort((a, b) => a.date.localeCompare(b.date));
  past.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return { upcoming, past };
};


// const MAX_PAST_EVENTS_DISPLAY = 3;

export function EventsSection() {
  // Derive tag list (stable, sorted) once
  const tags: TagType[] = useMemo(() => {
    const set = new Set<TagType>();
    events.forEach(ev => ev.tags?.forEach(t => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const [selectedTag, setSelectedTag] = useState<TagType>("All");

  const filtered = useMemo(() => {
    if (selectedTag === "All") return events;
    return events.filter(ev => ev.tags?.includes(selectedTag));
  }, [selectedTag]);

  const { upcoming, past } = groupEvents(filtered);

  // Autoplay plugins for carousels
  const upcomingAutoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  
  const pastAutoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="events" className="py-12 sm:py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Events
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
            Stay updated with our workshops, community days, and meetups. Build,
            learn, and network with AWS enthusiasts across Nepal.
          </p>
        </div>

        {/* Tag Filter Bar */}
        {tags.length > 0 && (
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 justify-center">
            <FilterChip
              label="All"
              active={selectedTag === "All"}
              onClick={() => setSelectedTag("All")}
            />
            {tags.map(tag => (
              <FilterChip
                key={tag}
                label={tag}
                active={selectedTag === tag}
                onClick={() => setSelectedTag(tag)}
              />
            ))}
          </div>
        )}

        {upcoming.length > 0 && (
          <div className="mt-8 sm:mt-12">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Upcoming</h3>
            <Carousel 
              className="w-full max-w"
              plugins={[upcomingAutoplay.current]}
              onMouseEnter={upcomingAutoplay.current.stop}
              onMouseLeave={upcomingAutoplay.current.reset}
            >
              <CarouselContent className="-ml-1">
                {upcoming.map((event, idx) => (

                  <CarouselItem key={idx} className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <EventCard key={event.id} event={event} ctaLabel="Register" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        )}

        {upcoming.length === 0 && past.length === 0 && (
          <p className="mt-8 sm:mt-12 text-center text-muted-foreground">No events found for this tag.</p>
        )}

        <div className="mt-12 sm:mt-16">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">Past Events</h3>
            <span className="text-xs bg-muted px-2 py-1 rounded-full">
              {past.length}
            </span>
          </div>
          {past.length === 0 ? (
            <p className="text-muted-foreground">No past events yet.</p>
          ) : (

            <Carousel 
              className="w-full max-w"
              plugins={[pastAutoplay.current]}
              onMouseEnter={pastAutoplay.current.stop}
              onMouseLeave={pastAutoplay.current.reset}
            >
              <CarouselContent className="-ml-1">
                {past.map((event, idx) => (

                  <CarouselItem key={idx} className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <EventCard key={event.id} event={event} ctaLabel="View Details" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}

const MAX_TAGS_DISPLAY = 3;

interface EventCardProps {
  event: EventItem;
  ctaLabel?: string;
}

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "text-xs md:text-sm px-3 py-1.5 rounded-full border transition, cursor-pointer",
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-background hover:bg-muted border-border text-muted-foreground"
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function EventCard({ event, ctaLabel = "Details" }: EventCardProps) {
  const {
    title,
    description,
    date,
    startTime,
    endTime,
    venue,
    locationUrl,
    coverImage,
    tags,
  } = event;
  const readable = new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      {coverImage && (
        <div className="relative aspect-[4/2.3] w-full overflow-hidden">
          <Image 
            src={coverImage} 
            alt={title} 
            fill 
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover" 
          />
        </div>
      )}
      <CardContent className="flex flex-col flex-1 p-3 sm:p-4 md:p-5">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <Calendar className="size-3 sm:size-4" /> <span>{readable}</span>
          {startTime && (
            <>
              <Clock className="size-3 sm:size-4 ml-2" />
              <span>
                {startTime}
                {endTime ? ` - ${endTime}` : ""}
              </span>
            </>
          )}
        </div>
        <h4 className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base md:text-lg leading-snug line-clamp-2">{title}</h4>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        {venue && (
          <div className="mt-2 sm:mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="size-3 sm:size-4" />{" "}
            <span className="truncate max-w-[140px] sm:max-w-[180px]">{venue}</span>
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
            {tags.slice(0, MAX_TAGS_DISPLAY).map((tag: string) => (
              <span
                key={tag}
                className="bg-muted text-xs px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
            {tags.length > MAX_TAGS_DISPLAY && (
              <span className="text-xs text-muted-foreground">
                +{tags.length - MAX_TAGS_DISPLAY}
              </span>
            )}
          </div>
        )}
        <div className="mt-auto pt-3 border-t">
          {locationUrl ? (
            <Button asChild size="sm" className="w-full sm:w-auto">
              <Link
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaLabel}
              </Link>
            </Button>
          ) : null}
          {/* Placeholder for future: <Button variant="ghost" size="sm">Share</Button> */}
        </div>
      </CardContent>
    </Card>
  );
}

export default EventsSection;
