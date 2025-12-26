"use client";
import Image from "next/image";
import Link from "next/link";
import { SpeakerCardData } from "@/data/speakers";
import { IspeakerCard } from "@/interface/ISpeakers";

const total_speakers = SpeakerCardData.length
const normal_speakers_data = SpeakerCardData.slice(0, 13);
const panel_speaker_data = SpeakerCardData.slice(13, 18);
const keynote_speaker_data = SpeakerCardData.slice(18, total_speakers - 1);
const chief_guest = SpeakerCardData[total_speakers - 1];

function SpeakerCard({ id, coverImage, name, occupation, Linkedin }: IspeakerCard) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
        <Link href={Linkedin} rel="noopener noreferrer">
          <Image
            src={coverImage}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      <div className="text-center mt-3 px-1 w-full">
        <p className="font-semibold text-sm sm:text-base leading-tight">{name}</p>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-tight line-clamp-2">{occupation}</p>
      </div>
    </div>
  );
}

function SpeakerSection() {
  return (
    <div className="text-center w-full p-2 sm:p-4">
      <h1 className="mb-8 sm:mb-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight xl:leading-[1.125]">
        SPEAKER SECTION
      </h1>
      <div className="mb-12 sm:mb-16">
        <h2 className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl font-bold leading-tight xl:leading-[1.111]">
          Chief Guest
        </h2>
        <div className="flex items-center justify-center max-w-[300px] mx-auto">
          {
            <SpeakerCard
              key={chief_guest.id}
              id={chief_guest.id}
              coverImage={chief_guest.coverImage}
              name={chief_guest.name}
              occupation={chief_guest.occupation}
              Linkedin={chief_guest.Linkedin}
            />
          }
        </div>
      </div>
      <div className="mb-12 sm:mb-16">
        <h2 className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl font-bold leading-tight xl:leading-[1.111]">
          Keynote Speakers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {keynote_speaker_data.map((person) => (
            <SpeakerCard
              key={person.id}
              id={person.id}
              coverImage={person.coverImage}
              name={person.name}
              occupation={person.occupation}
              Linkedin={person.Linkedin}
            />
          ))}
        </div>
      </div>
      <div className="mb-12 sm:mb-16">
        <h2 className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl font-bold leading-tight xl:leading-[1.111]">
          Panel Discussion
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {panel_speaker_data.map((person) => (
            <SpeakerCard
              key={person.id}
              id={person.id}
              coverImage={person.coverImage}
              name={person.name}
              occupation={person.occupation}
              Linkedin={person.Linkedin}
            />
          ))}
        </div>
      </div>
      <div className="mb-12 sm:mb-16">
        <h2 className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl font-bold leading-tight xl:leading-[1.111]">
          Speakers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {normal_speakers_data.map((person) => (
            <SpeakerCard
              key={person.id}
              id={person.id}
              coverImage={person.coverImage}
              name={person.name}
              occupation={person.occupation}
              Linkedin={person.Linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpeakerSection;
