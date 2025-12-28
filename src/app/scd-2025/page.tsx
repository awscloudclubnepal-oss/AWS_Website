import Rsvp from "@/components/CTA/Rsvp";
import LogoClouds from "@/components/LogoCloud/LogoCloud";
import { Archive, Calendar } from "lucide-react";

export default function SCD2025Archive() {
  return (
    <>
      {/* Archive Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-16 sm:py-20 md:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Archive Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Archive className="w-4 h-4" />
            <span className="text-sm font-medium">Event Archive</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            AWS Student Community Day
            <span className="block text-primary mt-2">2025</span>
          </h1>

          {/* Slogan */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Where students came together to <span className="text-foreground font-semibold">learn</span>,{" "}
            <span className="text-foreground font-semibold">build</span>, and{" "}
            <span className="text-foreground font-semibold">connect</span> with the cloud community.
          </p>

          {/* Event Date */}
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-5 h-5" />
            <span className="text-base sm:text-lg">December 27, 2025 • Advanced College of Engineering</span>
          </div>

          {/* Decorative Line */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-border" />
            <span className="text-muted-foreground text-sm">Relive the moments</span>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>

      <Rsvp />
      <LogoClouds />
    </>
  );
}
