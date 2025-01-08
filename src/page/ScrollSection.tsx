// ScrollSection.tsx
import React, { ReactNode, useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  children: ReactNode;
}

const ScrollSection = forwardRef<HTMLDivElement, ScrollSectionProps>(
  ({ children }, ref) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
          },
        });
      }
    }, []);

    // Combine the forwarded ref with the local ref
    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(sectionRef.current);
        } else {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current =
            sectionRef.current;
        }
      }
    }, [ref]);

    return (
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-center"
      >
        {children}
      </section>
    );
  }
);

export default ScrollSection;
