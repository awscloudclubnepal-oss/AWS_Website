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
    <div className="relative mx-auto w-full">
      {/* Main content area with decorative elements positioned relative to it */}
      <div className="w-full relative max-w-7xl mx-auto">
        {/* Decorative elements - positioned just outside the content area */}
        <div className="hidden lg:block absolute -left-8 xl:-left-12 w-3 xl:w-5 inset-0 bg-[repeating-linear-gradient(-45deg,#e5e7eb_0px,#e5e7eb_2px,transparent_2px,transparent_7px)] dark:opacity-5 pointer-events-none" />
        <div className="hidden lg:block absolute top-0 -right-8 xl:-right-12 bottom-0 w-3 xl:w-5 bg-[repeating-linear-gradient(45deg,#e5e7eb_0px,#e5e7eb_2px,transparent_2px,transparent_7px)] dark:opacity-5 pointer-events-none" />
        
        <HeroSection />
        <Rsvp />
        <LogoClouds />
        <EventsSection />
        <Team />
        <ContributorsSection />
        <PresidentReview />
        <FAQs />
        <TestimonialSection />
        <ContactUs />
        <CallToAction />
      </div>
    </div>
  );
}

export default Page;
