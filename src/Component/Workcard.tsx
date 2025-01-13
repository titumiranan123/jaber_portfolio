import React from "react";

interface Props {
  work1: string;
}

import arrow from "./../assets/arrow.png";
import arrow1 from "./../assets/arrow1.png";

const Workcard: React.FC<Props> = ({ work1 }) => {
  return (
    <div className="max-w-[400px] lg:max-w-[1200px] w-full lg:h-[453px] h-[720px] flex items-center justify-between lg:flex-row flex-col py-5 px-5 lg:py-8 lg:px-8 rounded-[36px] bg-white gap-5 lg:gap-16 mx-auto">
      <img src={work1} alt="work1" className="flex-shrink-0" />
      <div className="flex flex-col gap-4 lg:w-[552px]">
        <h1 className="poppins font-semibold text-[20px] lg:text-[24px] leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <p className="poppins font-normal text-[16px] lg:text-[20px]">
          I am a passionate UI/UX designer with a knack for turning concepts
          into seamless digital experiences. Armed with a keen eye for
          aesthetics.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mt-5">
          <button className="py-4 px-7 bg-[#2C4250] text-white rounded-[12px] lg:h-[68px] h-[58px] lg:w-[302px] w-[250px] flex items-center justify-center gap-2 text-[16px] lg:text-[20px] font-semibold">
            VIEW CASE STUDY
            <img src={arrow} alt="case study" className="w-[36px] h-[36px]" />
          </button>
          <button className="py-4 px-7 border border-[#2C4250] text-[#2C4250] rounded-[12px] lg:h-[68px] h-[58px] w-[193px] flex items-center justify-center gap-3 text-[16px] lg:text-[20px] font-semibold">
            LIVE SITE
            <img src={arrow1} alt="live site" className="w-[36px] h-[36px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
