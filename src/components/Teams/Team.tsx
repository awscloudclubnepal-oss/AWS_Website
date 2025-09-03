"use client";
import { useEffect, useState } from "react";
import { teamMembers } from "@/data/team";
import { Filter } from "./filter";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Team() {
  const [selected, setSelected] = useState("all");
  const [filteredMembers, setFilteredMembers] = useState(teamMembers);

  useEffect(() => {
    const filteredMembers =
      selected === "all"
        ? teamMembers
        : teamMembers.filter((m) => m.teamTag === selected);
    setFilteredMembers(filteredMembers);
  }, [selected]);

  return (
    <section id="teams" className="px-6 py-16 space-y-12">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-bold">Meet Our Team</h2>
        <p className="mt-4 text-lg">
          Discover the talented individuals behind our success.
        </p>
      </div>
      <Filter selected={selected} setSelected={setSelected} />
      <AnimatedTestimonials testimonials={filteredMembers} />
    </section>
  );
}
