import React from "react";
import user from "./../assets/user.png";

const Header: React.FC = () => {
  return (
    <div className="header_bg lg:mt-24  w-full snap-start relative ">
      <div className="max-w-[1240px] lg:min-h-screen   flex justify-center items-center flex-col mx-auto pt-10 lg:px-0 px-4">
        <div className="flex justify-center items-center flex-col">
          <h1 className="bold text-center lg:w-[1050px] absolute top-[30%] mx-auto text-white textshadow text-[71px] lg:text-[167px] leading-[86.4px] ">
            DESIGNER
          </h1>

          <div className="relative">
            <p className="absolute  md:-left-[130px] text-[32px] text-white w-[284px] h-[60px] lg:top-[54%] -rotate-[18deg] bg-[#18281E] bg-opacity-[21%] px-[24px] py-2 rounded-[12px] text-center lg:block hidden">
              UI/UX Designer
            </p>
            <img
              className={`lg:w-full lg:h-auto  mt-20  w-full h-[322px]  lg:mt-48 transition-transform duration-700  z-30`}
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
