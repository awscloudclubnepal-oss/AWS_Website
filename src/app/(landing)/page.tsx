import ContactUs from "@/components/ContactUs/ContactUs";
import CallToAction from "@/components/CTA/CTA";
import Rsvp from "@/components/CTA/Rsvp";
import FAQs from "@/components/FAQ/FAQ";
import { HeroSection } from "@/components/Hero/Hero";
import LogoClouds from "@/components/LogoCloud/LogoCloud";
import Team from "@/components/Teams/Team";
import PresidentReview from "@/components/Review/President";
import { TestimonialSection } from "@/components/Testimonials";
import { ContributorsSection } from "@/components/Contributors";
import { EventsSection } from "@/components/Events";

function Page() {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-[24px_1fr_24px] max-w-7xl mx-auto">
      {/* Left Decoration */}
      <div className="hidden lg:block relative w-3 xl:w-5 border-r border-l">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#e5e7eb_0px,#e5e7eb_2px,transparent_2px,transparent_7px)] dark:opacity-5 pointer-events-none" />
      </div>

      {/* Main content area */}
      <div className="w-full max-w-7xl relative">
        <HeroSection />
        <Rsvp />
        <LogoClouds />
        <EventsSection />
        <Team />
        <PresidentReview />
        <FAQs />
        <ContributorsSection />
        {/* <TestimonialSection /> */}
        <ContactUs />
        <CallToAction />
      </div>

      {/* Right Decoration */}
      <div className="hidden lg:block relative w-3 xl:w-5 border-r border-l">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#e5e7eb_0px,#e5e7eb_2px,transparent_2px,transparent_7px)] dark:opacity-5 pointer-events-none" />
      </div>
    </div>
  );
}
export default Page;
