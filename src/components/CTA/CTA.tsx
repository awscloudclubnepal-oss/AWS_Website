import { Button } from "@/components/ui/button";
import { Users, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-12 sm:py-16">
      {/* Lines */}
      <div className="absolute left-0 right-0 top-[15px] sm:top-[20px] md:top-[48px] z-10 h-px w-full bg-border dark:bg-neutral-700"></div>
      <div className="absolute bottom-0 right-[15px] sm:right-[20px] md:right-[48px] top-0 z-10 h-full w-px bg-border dark:bg-neutral-700"></div>
      <div className="absolute bottom-[15px] sm:bottom-[20px] md:bottom-[48px] left-0 right-0 z-10 h-px w-full bg-border dark:bg-neutral-700"></div>
      <div className="absolute bottom-0 left-[15px] sm:left-[20px] md:left-[48px] top-0 z-10 h-full w-px bg-border dark:bg-neutral-700"></div>

      {/* Top Right Cross */}
      <div className="absolute right-[28px] sm:right-[43.5px] top-[35px] sm:top-[48px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute right-[33px] sm:right-[48px] top-[30px] sm:top-[43.5px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Top Left Cross */}
      <div className="absolute left-[27.5px] sm:left-[42.5px] right-0 top-[35px] sm:top-[48px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute left-[33px] sm:left-[48px] right-0 top-[30px] sm:top-[42.5px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Bottom Left Cross */}
      <div className="absolute bottom-[35px] sm:bottom-[48px] left-[27.5px] sm:left-[42.5px] right-0 z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute bottom-[30px] sm:bottom-[42.5px] left-[33px] sm:left-[48px] right-0 z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Bottom Right Cross */}
      <div className="absolute bottom-[35px] sm:bottom-[48px] right-[28px] sm:right-[43.5px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute bottom-[30px] sm:bottom-[43.5px] right-[33px] sm:right-[48px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* lines end */}

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12 md:py-20 lg:py-32">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Join 4200+ Members</span>
          </div>

          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Become Part of Our Community
          </h2>
          
          <p className="mt-3 sm:mt-4 font-medium text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with cloud enthusiasts, attend exclusive workshops, and stay updated 
            with the latest AWS events in Nepal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-[#a166e8] to-[#8b5ad6] hover:from-[#8b5ad6] hover:to-[#a166e8] text-white font-semibold px-8 py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <Link
                href="https://www.meetup.com/aws-cloud-club-at-tribhuvan-university/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Now on Meetup
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
