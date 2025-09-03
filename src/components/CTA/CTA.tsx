import { Button } from "@/components/ui/button";
import { Mail, SendHorizonal } from "lucide-react";

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
        <div className="text-center">
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Join Our NewsLetter
          </h2>
          <p className="mt-3 sm:mt-4 font-medium text-sm sm:text-base">
            Stay updated with our latest open-source projects and community
            news.
          </p>

          <form action="" className="mx-auto mt-6 sm:mt-10 lg:mt-12 max-w-sm">
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-2 sm:pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Mail className="text-caption pointer-events-none absolute inset-y-0 left-4 sm:left-5 my-auto size-4 sm:size-5" />

              <input
                placeholder="Your mail address"
                className="h-12 sm:h-14 w-full bg-transparent pl-10 sm:pl-12 focus:outline-none text-sm sm:text-base"
                type="email"
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button aria-label="submit" className="rounded-(--radius) text-xs sm:text-sm">
                  <span className="hidden md:block">Get Started</span>
                  <SendHorizonal
                    className="relative mx-auto size-4 sm:size-5 md:hidden"
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
