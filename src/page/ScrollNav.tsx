// ScrollNav.tsx
import React, { useState } from "react";

import close from "./../assets/close.png";
import { Link } from "react-router-dom";
const ScrollNav: React.FC = () => {
  const sectionNames = ["About", "Works", "Resume"];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative ">
      <div className="fixed top-8 lg:right-[37%] right-[35%] z-10 ">
        <div className="h-[60px] hidden rounded-[16px] w-[400px] md:flex  bg-[#3E5D6D66] items-center justify-center ">
          {sectionNames.map((section, index) => (
            <Link
              to={`#${sectionNames[index]?.toLowerCase()}`}
              key={index}
              className="px-4 py-2 me-7 text-white rounded-md"
            >
              {section}
            </Link>
          ))}
        </div>
        {!isOpen && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-[129px] h-[64px] md:hidden  py-4 px-[42px] text-white bg-[#3E5D6D66] rounded-xl flex justify-center items-center text-[20px]"
          >
            Menu
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className={`bg-white absolute left-0 top-0 inset-0 h-[300px] px-10 transition-transform duration-500 ease-in-out rounded-b-[36px] z-30 flex flex-col gap-0 `}
        >
          <button
            onClick={() => {
              console.log("asd");
              setIsOpen(!isOpen);
            }}
            className="absolute cursor-pointer text-black text-2xl right-4 top-8   p-3 border rounded-xl"
          >
            <img className="w-4 h-4" src={close} alt="close" />
          </button>
          <div className="flex flex-col mt-20 justify-center items-center">
            <a href={`#about`} className="px-4 py-2 me-7 text-black rounded-md">
              About
            </a>
            <a href={`#works`} className="px-4 py-2 me-7 text-black rounded-md">
              Works
            </a>
            <a
              href={`#resume`}
              className="px-4 py-2 me-7 text-black rounded-md"
            >
              Testiomonial
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollNav;
