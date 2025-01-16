import React, { useState } from "react";
import logo from "./../assets/logo.png";
import whatsapp from "./../assets/what.png";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+8801862938306"; // Replace with your number
  const message = "Hello, I need some information."; // Optional pre-filled message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="flex max-w-[1240px] mx-auto justify-between items-center py-6 lg:px-0 px-4 overflow-hidden">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-[#FCFBFC] rounded-full w-[478px] h-[58px]  lg:flex hidden justify-center items-center gap-3">
        <a
          href="#about"
          className="text-[20px] leading-[32px] font-[700] uppercase"
        >
          About
        </a>
        <a
          className="uppercase text-[20px] leading-[32px] font-[400]"
          href="#works"
        >
          Works
        </a>
        <a
          className="uppercase text-[20px] leading-[32px] font-[400]"
          href="#resume"
        >
          Resume
        </a>
      </div>
      <Link
        target="_blank"
        to={whatsappLink}
        className="py-3 px-2 bg-[#030606] text-white rounded-full  lg:w-[162px] w-[250px] lg:flex hidden items-center poppins gap-2 lg:text-[20px] font-[600] justify-center"
      >
        {" "}
        <img
          className="w-[36px] h-[36px]"
          src={whatsapp}
          alt="case study"
        />{" "}
        Contact
      </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="hamburg flex lg:hidden flex-col gap-1"
      >
        <span
          className={`w-7 h-1 bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-[7.5px] rotate-45" : "translate-y-0"
          }`}
        ></span>
        <span
          className={`w-7 h-1 bg-black transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`w-7 h-1 bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? "-translate-y-[9px] -rotate-45" : "translate-y-0"
          }`}
        ></span>
      </div>
      {
        <div
          className={`bg-white absolute left-0 top-0 inset-0 h-[300px] px-10 transition-transform duration-500 ease-in-out rounded-b-[36px] z-30 flex lg:hidden flex-col gap-0 ${
            !isOpen ? "translate-x-[400px] hidden" : "translate-x-0"
          } `}
        >
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="absolute cursor-pointer text-black text-2xl right-2 top-6   p-3  rounded-xl"
          >
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="hamburg flex lg:hidden flex-col gap-1"
            >
              <span
                className={`w-7 h-1 bg-black transition-transform duration-300 ease-in-out ${
                  isOpen ? "translate-y-[7.5px] rotate-45" : "translate-y-0"
                }`}
              ></span>
              <span
                className={`w-7 h-1 bg-black transition-opacity duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-7 h-1 bg-black transition-transform duration-300 ease-in-out ${
                  isOpen ? "-translate-y-[9px] -rotate-45" : "translate-y-0"
                }`}
              ></span>
            </div>
          </button>
          <div className="flex flex-col mt-20 justify-center items-center">
            <a
              onClick={() => setIsOpen(!isOpen)}
              href={`#about`}
              className="text-[20px] leading-[32px] font-[600] uppercase"
            >
              About
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href={`#works`}
              className="text-[20px] leading-[32px] font-[600] uppercase"
            >
              Works
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href={`#resume`}
              className="text-[20px] leading-[32px] font-[600] uppercase"
            >
              RESUME
            </a>
          </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
