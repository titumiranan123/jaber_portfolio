import React from "react";
import user from "./../assets/user.png";

const Header: React.FC = () => {
  return (
    <div className="header_bg mt-10  w-full snap-start relative ">
      <div className="max-w-[1240px] flex justify-center items-center flex-col mx-auto pt-10">
        <div className="flex justify-center items-center flex-col">
          <h1 className="bold text-center w-[1050px] absolute top-[30%] mx-auto text-white textshadow text-[167px] leading-[86.4px]">
            DESIGNER
          </h1>
          
          <div className="relative">
            <p className="absolute left-[120px] text-[32px] text-white w-[284px] h-[60px] top-[54%] -rotate-[18deg] bg-[#18281E] bg-opacity-[21%] px-[24px] py-2 rounded-[12px] text-center">
              UI/UX Designer
            </p>
            <img
              className={`   mt-10 transition-transform duration-700  z-30`}
              src={user}
              alt=""
            />
           
            <p className="absolute right-[130px] top-[54%] w-[284px] h-[60px] bg-[#18281E] bg-opacity-[21%] px-[24px] rotate-[18deg] py-2 text-[32px] text-white rounded-[12px] text-center">
              Product Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
