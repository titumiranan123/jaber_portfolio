import React, { useEffect, useState } from "react";
import user from "./../assets/user.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);

      // Update visibility and image position based on scroll position
      if (currentScrollPosition >= 100 && currentScrollPosition <= 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header_bg sticky top-0 h-[800px] w-full snap-start">
      <div className="max-w-[1240px] flex justify-center items-center flex-col mx-auto pt-10">
        <Navbar />
        <div className="flex justify-center items-center flex-col">
          <div>
            <h1 className="bold text-center w-[1050px] mt-20 mx-auto text-white text-[72px] leading-[86.4px]">
              Grow Personal Brand & Agency With My Design
            </h1>
          </div>
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, x: 300, rotate: -16 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? -60 : 100 ,y:isVisible ? 200:200,
                rotate: -16,
                zIndex: isVisible ? 10 : 1, // Adjust z-index based on visibility
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute -left-20 text-[32px] text-white w-[284px] h-[60px] top-[8%] bg-[#18281E] bg-opacity-[21%] px-[24px] py-2 rounded-[12px] text-center"
            >
              UI/UX Designer
            </motion.p>
            <img
              className={`w-[674px]  h-[655px] transition-transform duration-700 ${
                scrollPosition > 200 ? "translate-y-[-100px]" : "translate-y-0"
              }`}
              src={user}
              alt=""
            />
            <motion.p
              initial={{ opacity: 0, x: 300, rotate: 16 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 80 : -100,y:isVisible ? 200:200,
                rotate: 16,
                zIndex: isVisible ? 10 : 1, // Adjust z-index based on visibility
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute -right-28 top-[9%] w-[284px] h-[60px] bg-[#18281E] bg-opacity-[21%] px-[24px] py-2 text-[32px] text-white rounded-[12px] text-center"
            >
              Product Design
            </motion.p>
          </div>
        </div>
        {/* Display the scroll position for debugging */}
        <div className="fixed bottom-0 right-0 p-4 bg-gray-900 text-white">
          Scroll Position: {scrollPosition}px
        </div>
      </div>
    </div>
  );
};

export default Header;
