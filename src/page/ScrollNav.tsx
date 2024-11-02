// ScrollNav.tsx
import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface ScrollNavProps {
  sections: React.RefObject<HTMLDivElement>[];
}

const ScrollNav: React.FC<ScrollNavProps> = ({ sections }) => {
  const scrollToSection = (index: number) => {
    if (sections[index]?.current) {
      gsap.to(window, { duration: 1, scrollTo: sections[index].current });
    }
  };

  const sectionNames = [" ", "About", "Works", "Resume"];

  return (
    <div className="fixed top-12 right-[37%] z-10 ">
      <div className="h-[60px] rounded-[16px] w-[400px] flex  bg-[#3E5D6D66] items-center justify-center ">
        {sections.map((_section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className="px-4 py-2 me-7 text-white rounded-md"
          >
            {sectionNames[index] || `Section ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollNav;
