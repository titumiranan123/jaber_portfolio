import React from "react";
import user from "./../assets/user.png";
import arrow from "./../assets/arrow.png";

const Header: React.FC = () => {
  return (
    <div className="max-w-[1240px] lg:w-[700px] lg:mt-[175px] lg:mb-[175px] mx-auto  lg:px-0 px-4  poppins">
      <button className="border ms-7 text-black mt-[72px] py-2 px-2  rounded-full lg:h-[40px] h-[58px] lg:w-[162px] w-[180px] flex items-center poppins gap-2 font-[400] justify-center lg:text-[16px]">
        <span className="pulse"></span> Open to work
      </button>

      <div className="flex justify-center items-center flex-col">
        <div className="font-[600] text-[88px] leading-[105.6px] flex justify-center items-center gap-3">
          <h1 className="text-[#A0A0A0]">Hi, I'm</h1>
          <img className="w-[100px] h-[100px]" src={user} alt="user" />
          <h1 className="text-[#030606]  text-center">Jaber</h1>
        </div>
        <h1 className="font-[400] mt-6 text-[20px] leading-[26.4px]">
          UI/UX Designer{" "}
          <span className="text-[#A0A0A0] ">
            for SaaS,ERP,POS, WEBSITE &Landing Page
          </span>
        </h1>
        <button className=" mt-[72px] py-4 px-7 bg-[#030606] text-white rounded-full lg:h-[68px] h-[58px] lg:w-[208px] w-[180px] flex items-center poppins gap-2 lg:text-[18px] font-[600] justify-center">
          {" "}
          Book A Call
          <img
            className="w-[36px] h-[36px]"
            src={arrow}
            alt="case study"
          />{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
