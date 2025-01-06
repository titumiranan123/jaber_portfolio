/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import user from "./../assets/user.png";
import ScrollNav from "../page/ScrollNav";
import arrow from "./../assets/arrow.png";
interface props {
  sectionRefs: any;
}
const Header: React.FC<props> = ({ sectionRefs }: any) => {
  return (
    <div className="header_bg   w-full  relative ">
      <ScrollNav sections={sectionRefs} />
      <div className="max-w-[1240px] lg:h-screen h-[896px]    flex justify-center items-center flex-col mx-auto  lg:px-0 px-4">
        <div className="flex justify-center items-center flex-col">
          <h1 className="bold text-center absolute lg:top-[34%] top-[31%] lg:w-[1050px]  mx-auto text-white textshadow text-[61px] lg:text-[167px] leading-[86.4px] ">
            DESIGNER
          </h1>
          <div className="relative mt-[6px] ">
            <p className="absolute  md:-left-[130px] text-[32px] text-white w-[284px] h-[60px] lg:top-[54%] -rotate-[18deg] bg-[#18281E] bg-opacity-[21%] px-[24px] py-2 rounded-[12px] text-center lg:block hidden">
              UI/UX Designer
            </p>
            <div className="relative">
              <img
                className={`lg:w-full lg:h-[520px]  mt-[160px]  w-full h-[502px]  lg:mt-[250px] transition-transform duration-700  z-30`}
                src={user}
                alt="jaber"
                loading="lazy"
              />
              <button className="bg-[#1A2C38D1] absolute lg:bottom-28 bottom-24 lg:left-44 left-[80px] text-white lg:py-3 lg:px-6 py-2 px-4 rounded-[12px] flex gap-4">
                <p className="lg:text-xl normal text-lg">Play Video</p>
                <img className="w-7 h-7" src={arrow} alt="" />
              </button>
            </div>

            <p className="absolute -right-[150px] top-[54%] w-[284px] h-[60px] bg-[#18281E] bg-opacity-[21%] px-[24px] rotate-[18deg] py-2 text-[32px] text-white rounded-[12px] text-center lg:block hidden">
              Product Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
