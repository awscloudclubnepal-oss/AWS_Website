import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { BorderBeam } from "../magicui/border-beam"

export const SCDButton = () => {
  return (
    <div className="relative w-fit mx-auto rounded-(--radius)">
      <Link
        href="#scd"
        className="relative rounded-(--radius) flex w-fit items-center gap-2 border border-neutral-400/60 dark:border-neutral-500 p-1 pr-3 overflow-hidden"
      >
        <span className="bg-primary text-white rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
          New
        </span>
        <span className="text-xs sm:text-sm">
          AWS Student Community Day Nepal 2025
        </span>
        <span className="bg-(--color-border) block h-4 w-px"></span>

        <ArrowRight className="size-4" />

        <BorderBeam
          duration={7}
          delay={3}
          size={200}
          borderWidth={2}
          className="from-transparent via-primary to-transparent"
        />
      </Link>
    </div>

  )
}
