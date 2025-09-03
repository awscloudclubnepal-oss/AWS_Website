import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {/* Main Feature Card */}
          <Card className="bg-transparent hover:-translate-y-1 hover:border-primary/50 transition-all ease-linear duration-100 group overflow-hidden shadow-zinc-950/5 sm:col-span-2 lg:col-span-3 rounded-lg sm:rounded-xl">
            <CardHeader>
              <div className="p-4 sm:p-6 md:p-8">
                <p className="font-medium text-sm sm:text-base md:text-lg">Cloud Projects & Workshops</p>
                <p className="text-muted-foreground mt-2 sm:mt-3 max-w-sm text-xs sm:text-sm md:text-base">
                  Participate in hands-on cloud projects and workshops, from AWS
                  fundamentals to advanced architectures.
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-4 sm:pl-6 md:pl-8 lg:pl-12">
              <div className="absolute -inset-4 sm:-inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div>

              <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-1 sm:pl-2 pt-1 sm:pt-2 dark:bg-zinc-950">
                <Image
                  src="/aws-dark.jpeg"
                  className="hidden dark:block w-full h-auto"
                  alt="AWS illustration dark"
                  width={1207}
                  height={929}
                />
                <Image
                  src="/aws-light.png"
                  className="shadow dark:hidden w-full h-auto"
                  alt="AWS illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </Card>

          {/* Secondary Feature Card */}
          <Card className="bg-transparent hover:-translate-y-1 hover:border-primary/50 transition-all ease-linear duration-100 group p-4 sm:p-6 shadow-zinc-950/5 sm:col-span-2 lg:col-span-2 rounded-lg sm:rounded-xl">
            <p className="mx-auto mb-6 sm:mb-8 lg:mb-12 max-w-md text-center text-base sm:text-lg md:text-xl font-semibold">
              Learn cloud computing, collaborate on projects, and showcase your skills
            </p>

            <CardContent className="mt-auto h-fit">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute -inset-2 sm:-inset-4 [background:radial-gradient(50%_75%_at_75%_50%,transparent,var(--color-background)_100%)]"></div>
                <div className="aspect-[65/59] overflow-hidden rounded-r-lg">
                  <Image
                    src="/aws-console.png"
                    className="hidden dark:block w-full h-full object-cover"
                    alt="AWS Console dark"
                    width={1207}
                    height={929}
                  />
                  <Image
                    src="/aws-console.png"
                    className="shadow dark:hidden w-full h-full object-cover"
                    alt="AWS Console light"
                    width={1207}
                    height={929}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Small Cards with Icons */}
          <Card className="bg-transparent hover:-translate-y-1 hover:border-primary/50 transition-all ease-linear duration-100 group p-4 sm:p-6 md:p-8 lg:p-12 shadow-zinc-950/5 sm:col-span-2 lg:col-span-2 rounded-lg sm:rounded-xl">
            <p className="mx-auto mb-6 sm:mb-8 lg:mb-12 max-w-md text-center text-base sm:text-lg md:text-xl font-semibold">
              Build, Explore, and Collaborate in the Cloud.
            </p>

            <CardContent className="mt-auto h-fit">
              <div className="relative">
                {/* Gradient background for depth */}
                <div className="absolute -inset-2 sm:-inset-4 [background:radial-gradient(50%_75%_at_75%_50%,transparent,var(--color-background)_100%)]"></div>

                {/* Image container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/aws-design.png"
                    alt="AWS Design"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Logos of AWS services */}
          <Card className="bg-transparent hover:-translate-y-1 hover:border-primary/50 transition-all ease-linear duration-100 group relative shadow-zinc-950/5 sm:col-span-2 lg:col-span-3 rounded-lg sm:rounded-xl">
            <CardHeader className="p-4 sm:p-6 md:p-8 lg:p-12">
              <p className="font-medium text-sm sm:text-base md:text-lg">Popular AWS Services</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-xs sm:text-sm md:text-base">
                Gain experience with the most-used AWS services and tools in
                real-world projects.
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-12 lg:pb-12">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
                <div className="rounded-lg aspect-square border border-dashed"></div>
                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border p-2 sm:p-3 md:p-4">
                  <Image
                    className="m-auto w-full h-full object-contain"
                    src="/aws.png"
                    alt="AWS logo"
                    width="300"
                    height="300"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-lg aspect-square border border-dashed"></div>
                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border p-2 sm:p-3 md:p-4">
                  <Image
                    className="m-auto"
                    src="/ec2.png"
                    alt="EC2 logo"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="rounded-lg aspect-square border border-dashed"></div>
                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border p-2 sm:p-3 md:p-4">
                  <Image
                    className="size-6 sm:size-8 md:size-10 m-auto"
                    src="/s3.svg"
                    alt="S3 logo"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
