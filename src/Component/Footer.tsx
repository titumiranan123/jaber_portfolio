import React from "react";
import arrow from "./../assets/arrow.svg";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <div className="max-w-[1240px] md:mt-[131px] mx-auto mt-[60px]">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-[#030606] font-[600] md:text-[64px] md:leading-[96px] text-[32px] poppins text-center">
          HAVE A PROJECT ?
        </h1>
        <p className="lg:text-[20px] text-[16px] font-[400px] lg:leading-[30px] text-center">
          I am always available to take your project.
        </p>

        <div className="md:mt-16 mt-10 flex justify-center items-center">
          <Link
            to={"https://calendly.com/jaber-uiux/1-1-meeting"}
            target="_blank"
            className="py-4 px-4 bg-[#030606] text-white rounded-full lg:h-[68px] h-[58px] lg:w-[200px] w-[180px] flex items-center poppins gap-2 lg:text-[20px] font-[600] justify-center"
          >
            {" "}
            Book a Call
            <img
              className="w-[36px] h-[36px]"
              src={arrow}
              alt="case study"
            />{" "}
          </Link>
        </div>
        <p className="flex justify-center items-center text-black lg:mt-[130px] mt-[80px] mb-[40px]">
          &copy; Jaber Hossain 2024 . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
