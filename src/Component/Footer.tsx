import React from "react";
import arrow from "./../assets/arrow.png";
const Footer: React.FC = () => {
  return (
    <div className="max-w-[1240px] md:mt-[131px] mx-auto mt-[60px]">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-[#030606] font-[600] md:text-[64px] md:leading-[96px] text-[32px] poppins text-center">
          HAVE A PROJECT ?
        </h1>
        <p className="text-[20px] font-[400px] leading-[30px]">
          I am always available to take your project.
        </p>

        <div className="md:mt-16 mt-10 flex justify-center items-center">
          <button className="py-4 px-4 bg-[#030606] text-white rounded-full lg:h-[68px] h-[58px] lg:w-[212px] w-[250px] flex items-center poppins gap-2 lg:text-[20px] font-[600] justify-center">
            {" "}
            Get Started
            <img
              className="w-[36px] h-[36px]"
              src={arrow}
              alt="case study"
            />{" "}
          </button>
        </div>
        <p className="flex justify-center items-center text-black lg:mt-[130px] mt-[80px] mb-[40px]">
          &copy; Jaber Hossain 2024 . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
