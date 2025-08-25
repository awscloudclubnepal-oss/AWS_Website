"use client";
import React, { useState, useMemo } from "react";
import { events } from "@/data/events";
import type { EventItem } from "@/interface/IEvent";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock } from "lucide-react";

const groupEvents = (items: EventItem[]) => {
  const upcoming = items.filter((e) => e.status === "upcoming");
  const past = items.filter((e) => e.status === "past");
  // sort upcoming ascending by date, past descending
  upcoming.sort((a, b) => a.date.localeCompare(b.date));
  past.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return { upcoming, past };
};

const MAX_PAST_EVENTS_DISPLAY = 3;

export function EventsSection() {
  // Derive tag list (stable, sorted) once
  const tags = useMemo(() => {
    const set = new Set<string>();
    events.forEach(ev => ev.tags?.forEach(t => set.add(t)));
    return Array.from(set).sort((a,b) => a.localeCompare(b));
  }, []);

  const [selectedTag, setSelectedTag] = useState<string>("all");

  const filtered = useMemo(() => {
    if (selectedTag === "all") return events;
    return events.filter(ev => ev.tags?.includes(selectedTag));
  }, [selectedTag]);

  const { upcoming, past } = groupEvents(filtered);

  return (
    <section id="events" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Events
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stay updated with our workshops, community days, and meetups. Build,
            learn, and network with AWS enthusiasts across Nepal.
          </p>
        </div>

        {/* Tag Filter Bar */}
        {tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            <FilterChip
              label="All"
              active={selectedTag === "all"}
              onClick={() => setSelectedTag("all")}
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
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Upcoming</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} ctaLabel="Register" />
              ))}
            </div>
          </div>
        )}

        {upcoming.length === 0 && past.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No events found for this tag.</p>
        )}

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl font-semibold">Past Events</h3>
            <span className="text-xs bg-muted px-2 py-1 rounded-full">
              {past.length}
            </span>
          </div>
          {past.length === 0 ? (
            <p className="text-muted-foreground">No past events yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {past.slice(0, MAX_PAST_EVENTS_DISPLAY).map((event) => (
                <EventCard key={event.id} event={event} ctaLabel="Recap" />
              ))}
            </div>
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
        "text-xs md:text-sm px-3 py-1.5 rounded-full border transition",
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
    <Card className="flex flex-col overflow-hidden">
      {coverImage && (
        <div className="relative aspect-[4/2.3] w-full overflow-hidden">
          <Image src={coverImage} alt={title} fill className="object-cover" />
        </div>
      )}
      <CardContent className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="size-4" /> <span>{readable}</span>
          {startTime && (
            <>
              <Clock className="size-4 ml-2" />
              <span>
                {startTime}
                {endTime ? ` - ${endTime}` : ""}
              </span>
            </>
          )}
        </div>
        <h4 className="mt-3 font-semibold text-lg leading-snug">{title}</h4>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        {venue && (
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="size-4" />{" "}
            <span className="truncate max-w-[180px]">{venue}</span>
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
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
        <div className="mt-5 pt-3 flex items-center justify-between border-t">
          {locationUrl ? (
            <Button asChild size="sm">
              <Link
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaLabel}
              </Link>
            </Button>
          ) : (
            <Button disabled size="sm">
              Soon
            </Button>
          )}
          {/* Placeholder for future: <Button variant="ghost" size="sm">Share</Button> */}
        </div>
      </CardContent>
    </Card>
  );
}

export default EventsSection;
