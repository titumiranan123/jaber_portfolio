/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import user from "./../assets/user.png";
import ScrollNav from "../page/ScrollNav";
interface props {
  sectionRefs: any;
}
const Header: React.FC<props> = ({ sectionRefs }: any) => {
  return (
    <div className="header_bg   w-full  relative ">
      <ScrollNav sections={sectionRefs} />
      <div className="max-w-[1240px] lg:h-screen h-[846px]    flex justify-center items-center flex-col mx-auto  lg:px-0 px-4">
        <div className="flex justify-center items-center flex-col">
          <h1 className="bold text-center absolute top-[34.6%] lg:w-[1050px]  mx-auto text-white textshadow text-[61px] lg:text-[167px] leading-[86.4px] ">
            DESIGNER
          </h1>
          <div className="relative mt-[106px] ">
            <p className="absolute  md:-left-[130px] text-[32px] text-white w-[284px] h-[60px] lg:top-[54%] -rotate-[18deg] bg-[#18281E] bg-opacity-[21%] px-[24px] py-2 rounded-[12px] text-center lg:block hidden">
              UI/UX Designer
            </p>
            <img
              className={`lg:w-full lg:h-[550px]  mt-[238px]  w-full h-[322px]  lg:mt-36 transition-transform duration-700  z-30`}
              src={user}
              alt="jaber"
              loading="lazy"
            />

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
