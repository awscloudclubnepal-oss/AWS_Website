"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { teamMembers } from "@/data/team";
import { TeamMemberCard } from "./TeamCard";
import { Filter } from "./filter";



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
        <section id="teams" className="px-4 sm:px-6 py-12 sm:py-16 md:py-28 lg:py-32 space-y-8 sm:space-y-10 md:space-y-12">
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Meet Our Team</h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">Discover the talented individuals behind our success.</p>
            </div>
            <Filter selected={selected} setSelected={setSelected} />
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
                    <AnimatePresence>
                        {filteredMembers.map((member) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TeamMemberCard member={member} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}