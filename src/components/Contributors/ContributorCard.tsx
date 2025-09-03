import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContributorType } from "@/data/contributors";

type ContributorCardParms = {
  contributor: ContributorType
}

export default function ContributorCard(parms: ContributorCardParms) {
  const { contributor } = parms;
  return (
    <Card className="bg-card text-card-foreground rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl hover:-translate-y-1 w-full max-w-[280px] sm:max-w-[320px] mx-auto">
      <CardContent className="p-0">

        {/* Image */}
        <div className="relative w-full aspect-square">
          <Image
            src={contributor.image}
            alt={contributor.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-3 sm:p-4 md:p-5 flex flex-col items-center text-center">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight">{contributor.name}</h3>
          {contributor.role && (
            <p className="text-muted-foreground text-xs sm:text-sm mt-1 line-clamp-2">
              {contributor.role}
            </p>
          )}
          <div className="flex space-x-3 sm:space-x-4 md:space-x-5 mt-2 sm:mt-3">
            {contributor.github && (
              <Link
                href={contributor.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Link>
            )}
            {contributor.linkedin && (
              <Link
                href={contributor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
