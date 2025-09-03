import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const SectionObserver = ({ id, className, ...rest }) => {
  const sectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    // These are the intersection observer options
    // root ?: Element | Document | null;
    // rootMargin ?: string;
    // threshold ?: number | number[];
    const intersectionOptions = {
      root: null,
      threshold: 0.53, //this means 53% viewable
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isInView = entry.isIntersecting;
        if (isInView) {
          router.replace(`/#${id}`);
        }
      });
    }, intersectionOptions);

    intersectionObserver.observe(sectionElement);

    // cleaning the observer
    return () => {
      intersectionObserver.unobserve(sectionElement);
    };
  }, [id, router]);

  return (
    <section
      id={id}
      className={cn("md:pb-8 pb-4", className)}
      {...rest}
      ref={sectionRef}
    >
      {rest.children}
    </section>
  );
};

export default SectionObserver;
