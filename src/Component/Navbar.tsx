import React from "react";
import logo from "./../assets/logo.png";
import whatsapp from "./../assets/what.png";
const Navbar: React.FC = () => {
  return (
    <div className="flex max-w-[1240px] mx-auto justify-between items-center py-6">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-[#FCFBFC] rounded-full w-[478px] h-[58px]  flex justify-center items-center gap-3">
        <a
          href="#about"
          className="text-[20px] leading-[32px] font-[700] uppercase"
        >
          About
        </a>
        <a
          className="uppercase text-[20px] leading-[32px] font-[400]"
          href="#about"
        >
          Works
        </a>
        <a
          className="uppercase text-[20px] leading-[32px] font-[400]"
          href="#about"
        >
          Resume
        </a>
      </div>
      <button className="py-3 px-2 bg-[#030606] text-white rounded-full  lg:w-[162px] w-[250px] flex items-center poppins gap-2 lg:text-[20px] font-[600] justify-center">
        {" "}
        <img
          className="w-[36px] h-[36px]"
          src={whatsapp}
          alt="case study"
        />{" "}
        Contact
      </button>
    </div>
  );
};

export default Navbar;
