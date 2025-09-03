"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { faqItems } from "@/data/faq";

export default function FAQs() {
  return (
    <section id="faq" className="dark:bg-background py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-20">
              <h2 className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base">
                Can&apos;t find what you&apos;re looking for? Contact our{" "}
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-3 sm:px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-4 sm:py-5 hover:no-underline">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex size-5 sm:size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-3 sm:size-4"
                        />
                      </div>
                      <span className="text-sm sm:text-base text-left">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 sm:pb-5">
                    <div className="px-7 sm:px-9">
                      <p className="text-sm sm:text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
