import ContactUs from "@/components/ContactUs/ContactUs";
import CallToAction from "@/components/CTA/CTA";
import FAQs from "@/components/FAQ/FAQ";
import { Features } from "@/components/Features";
import { HeroSection } from "@/components/Hero/Hero";
import LogoClouds from "@/components/LogoCloud/LogoCloud";
import { TestimonialSection } from "@/components/Testimonials";
import { EventsSection } from "@/components/Events";

function Page() {
  return (
    <div className="max-w-7xl relative mx-auto grid flex-1 grid-cols-[24px_1fr_24px] md:grid-cols-[32px_1fr_32px]">
      {/* left */}
      <div className="hidden sm:block absolute left-[10px] w-5 inset-0 bg-[repeating-linear-gradient(-45deg,#e5e7eb_0px,#e5e7eb_2px,transparent_2px,transparent_7px)] dark:opacity-5 pointer-events-none" />
      <div className="w-full border-r" />
      <div className="hidden sm:block w-px h-full border-l absolute top-0 left-2" />
      {/* left-end */}

      <div className="w-full">
        <HeroSection />
        <LogoClouds />
        <Features />
  <EventsSection />
        <FAQs />
        <TestimonialSection />
        <ContactUs />
        <CallToAction />
      </div>

      {/* right */}
      <div className="hidden sm:block absolute top-0 right-[10px] bottom-0 w-5 bg-[repeating-linear-gradient(45deg,#e5e7eb_0px,#e5e7eb_2px,transparent_2px,transparent_7px)] dark:opacity-5 pointer-events-none" />
      <div className="w-full border-l block" />
      <div className="hidden sm:block w-px h-full border-r absolute top-0 right-2" />
      {/* right-end */}
    </div>
  );
}

export default Page;
