import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface NavbarProps {
  sections: React.RefObject<HTMLDivElement>[];
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const scrollToSection = (index: number) => {
    if (sections[index]?.current) {
      gsap.to(window, { duration: 1, scrollTo: sections[index].current });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" h-[60px] rounded-[44px] w-[400px] flex gap-[36px] items-center justify-center">
        <div
          className="text-white hover:font-bold font-normal cursor-pointer "
          onClick={() => scrollToSection(1)}
        >
          About
        </div>
        <div
          className="text-white hover:font-bold font-normal cursor-pointer"
          onClick={() => scrollToSection(1)}
        >
          WORKS
        </div>
        <div
          className="text-white hover:font-bold font-normal cursor-pointer"
          onClick={() => scrollToSection(1)}
        >
          RESUME
        </div>
      </div>
    </div>
  );
};

export default Navbar;
