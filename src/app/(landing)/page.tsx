import ContactUs from "@/components/ContactUs/ContactUs";
import CallToAction from "@/components/CTA/CTA";
import Rsvp from "@/components/CTA/Rsvp";
import FAQs from "@/components/FAQ/FAQ";
import { HeroSection } from "@/components/Hero/Hero";
import LogoClouds from "@/components/LogoCloud/LogoCloud";
import PresidentReview from "@/components/Review/President";
import dynamic from "next/dynamic";

// Lazy load heavy components to reduce initial bundle size
const Team = dynamic(() => import("@/components/Teams/Team"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/10" />,
});

const EventsSection = dynamic(() => import("@/components/Events").then(mod => ({ default: mod.EventsSection })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/10" />,
});

const ContributorsSection = dynamic(() => import("@/components/Contributors").then(mod => ({ default: mod.ContributorsSection })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/10" />,
});

const SponserUs = dynamic(() => import("@/components/CountDown/SponserUsComponent"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/10" />,
});

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
