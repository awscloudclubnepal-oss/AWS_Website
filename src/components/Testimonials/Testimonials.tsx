import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/interface/ITestimonial";

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export function TestimonialSection() {
  return (
    <section>
      <div className="py-12 sm:py-16 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Loved by the Community</h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground">
              Harum quae dolore orrupti aut temporibus ariatur.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-12 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3 sm:space-y-4">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index} className="bg-neutral-310 dark:bg-none">
                    <CardContent className="grid grid-cols-[auto_1fr] gap-2 sm:gap-3 p-3 sm:p-4 md:p-6">
                      <Avatar className="size-8 sm:size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium text-sm sm:text-base">{name}</h3>

                        <span className="text-muted-foreground block text-xs sm:text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-2 sm:mt-3">
                          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
