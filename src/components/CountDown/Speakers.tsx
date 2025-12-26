"use client";
import Image from "next/image";
import Link from "next/link";
import { SpeakerCardData } from "@/data/speakers";
import { IspeakerCard } from "@/interface/ISpeakers";

const normal_speakers_data = SpeakerCardData.slice(0, 13);
const panel_speaker_data = SpeakerCardData.slice(13, 18);
const keynote_speaker_data = SpeakerCardData.slice(18, 24);
const chief_guest = SpeakerCardData[24];

function SpeakerCard({ id, coverImage, name, occupation, Linkedin }: IspeakerCard) {
  return (
    <div className="flex flex-col justify-center items-center mb-2 ">
      <div className="relative w-full overflow-hidden aspect-4/5">
        <Link href={Linkedin} rel="noopener noreferrer">
        <Image
          src={coverImage}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        </Link>
      </div>
      <div className="text-center text-xs sm:text-sm h-[100px] w-[132px] sm:h-[70px] sm:w-[110px] md:h-[50px] md:w-[130px] ">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{occupation}</p>
      </div>
    </div>
  );
}

function SpeakerSection() {
  return (
    <div className="text-center w-full p-2">
      <h1 className="mb-6 sm:mb-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight xl:leading-[1.125]">
        SPEAKER SECTION
      </h1>
      <div className="mb-12">
        <h2 className="mb-2 sm:mb-4 text-2xl  sm:text-4xl md:text-5xl font-bold leading-tight xl:leading-[1.111]">
          Chief Guest
        </h2>
        <div className="flex items-center justify-center">
          {
            <SpeakerCard
              key={chief_guest.id}
              id={chief_guest.id}
              coverImage={chief_guest.coverImage}
              name={chief_guest.name}
              occupation={chief_guest.occupation}
              Linkedin ={chief_guest.Linkedin}
            />
          }
        </div>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 sm:mb-4 text-2xl  sm:text-4xl md:text-5xl font-bold leading-tight xl:leading-[1.111]">
          Keynote Speakers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-3 md:gap-2">
          {keynote_speaker_data.map((person) => (
            <SpeakerCard
              key={person.id}
              id={person.id}
              coverImage={person.coverImage}
              name={person.name}
              occupation={person.occupation}
              Linkedin ={person.Linkedin}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 sm:mb-4 text-2xl  sm:text-4xl md:text-5xl font-bold leading-tight xl:leading-[1.111]">
          Panel Discussion
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 sm:gap-3 md:gap-2">
          {panel_speaker_data.map((person) => (
            <SpeakerCard
              key={person.id}
              id={person.id}
              coverImage={person.coverImage}
              name={person.name}
              occupation={person.occupation}
               Linkedin ={person.Linkedin}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 sm:mb-4 text-2xl  sm:text-4xl md:text-5xl font-bold leading-tight xl:leading-[1.111]">
          Speakers
        </h2>
         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 sm:gap-3 md:gap-2">
          {normal_speakers_data.map((person) => (
            <SpeakerCard
              key={person.id}
              id={person.id}
              coverImage={person.coverImage}
              name={person.name}
              occupation={person.occupation}
               Linkedin ={person.Linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpeakerSection;
