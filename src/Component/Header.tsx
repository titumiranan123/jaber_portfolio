import React, { useEffect, useState } from "react";
import user from "./../assets/user.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
const Header: React.FC = () => {
 
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 0; 

      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
        setIsMoving(true);
      } else {
        setIsVisible(false);
        setIsMoving(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header_bg h-[1063px] w-full">
      <div className="max-w-[1240px] flex justify-center items-center flex-col mx-auto pt-10">
      <Navbar />
        <div className="flex justify-center items-center flex-col">
          <div>
            <h1 className="bold text-center w-[1050px] mt-20 mx-auto text-white text-[72px] leading-[86.4px]">
              Grow{" "}
              <span className="text-[#A1AD77]">Personal Brand & Agency</span>{" "}
              With My Design
            </h1>
          </div>
          <div className="relative">
          <motion.p
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100,rotate: -16 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute -left-20 text-[32px] text-white -rotate-[16deg] w-[284px] h-[60px] top-[8%] bg-[#18281E] bg-opacity-[21%] px-[24px] py-2 rounded-[12px] text-center"
    >
      UI/UX Designer
    </motion.p>
            <img
              className={`w-[674px] h-[655px] transition-transform duration-700 ${
                isMoving ? "translate-y-[-160px]" : "-translate-y-[10px]"
              }`}
              src={user}
              alt=""
            />
            <motion.p
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100,rotate: 16 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
              className={`absolute rotate-[16deg] -right-28 top-[9%] w-[284px] h-[60px] bg-[#18281E] bg-opacity-[21%] px-[24px] py-2 text-[32px] text-white rounded-[12px] text-center transition-opacity duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Product Design
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
