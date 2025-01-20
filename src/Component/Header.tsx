import React from "react";
import user from "./../assets/user.png";
import arrow from "./../assets/arrow.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="max-w-[1240px] lg:w-[700px] lg:mt-[175px] lg:mb-[175px] mb-20 mx-auto  lg:px-0 px-4  poppins relative">
      <button className="border lg:ms-7 text-black mt-[72px] py-2 px-4  rounded-full lg:h-[40px] h-[58px] lg:w-[162px] w-[148px] flex items-center poppins lg:gap-2 gap-2 font-[400] justify-center lg:text-[16px] text-[14px]">
        <span className="bg-green-500 w-2 h-2 rounded-full ripple"></span> Open
        to work
      </button>

      <div className="flex justify-center items-center flex-col mt-5">
        <div className="font-[600] lg:text-[88px] lg:leading-[105.6px] text-[44px] leading-[62px] flex justify-center items-center lg:gap-3">
          <h1 className="text-[#A0A0A0]">Hi, I'm</h1>
          <img
            className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
            src={user}
            alt="user"
          />
          <h1 className="text-[#030606]  text-center">Jaber</h1>
        </div>
        <h1 className="font-[400] lg:mt-6 mt-4 lg:text-[20px] lg:leading-[26.4px] text-[16px] leading-[26.5px] text-center">
          UI/UX Designer{" "}
          <span className="text-[#A0A0A0] ">
            for SaaS, ERP, POS, Website & Landing Page
          </span>
        </h1>
        <Link
          to={"https://calendly.com/jaber-uiux/1-1-meeting"}
          target="_blank"
          className=" lg:mt-[72px] mt-10 py-4 px-7 bg-[#030606] text-white rounded-full lg:h-[68px] h-[58px] lg:w-[208px] w-[200px] flex items-center poppins lg:gap-2 gap-1 lg:text-[18px] text-[16px] font-[600] lg:justify-center justify-between"
        >
          {" "}
          Book A Call
          <img
            className="w-[36px] h-[36px]"
            src={arrow}
            alt="case study"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
