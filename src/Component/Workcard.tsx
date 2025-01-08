import React from "react";
interface props {
  work1: string;
}
import arrow from "./../assets/arrow.png";
import arrow1 from "./../assets/arrow1.png";

const Workcard: React.FC<props> = ({ work1 }) => {
  return (
    <div className="lg:max-w-[1200px] max-w-[400px] w-full overflow-hidden scale-95 lg:h-[430px] md:h-[450px] h-[620px] flex items-center justify-between lg:flex-row flex-col lg:py-[32px] lg:px-[30px] p-5 rounded-[36px] bg-[#fff]  lg:gap-[62px] mx-auto">
      <img className="" src={work1} alt="work1" />
      <div className="flex lg:w-[552px] flex-col gap-2">
        <h1 className="poppins font-[600] lg:text-[24px] text-[20px] leading-[24.5px] lg:leading-[32.5px]">
          Lorem ipsum dolor sit amet, consectetur adlplsing elit.
        </h1>
        <p className="poppins font-[400] lg:text-[20px] text-[16px]">
          I am a passionate UI/UX designer with a knack for turning concepts
          into seamless digital experiences. Armed with akeen eye for
          aesthetics.
        </p>
        <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-5 mt-5">
          <button className="py-4 px-7 bg-[#2C4250] text-white rounded-[12px] lg:h-[68px] h-[58px] lg:w-[302px] w-[250px] flex items-center poppins gap-2 lg:text-[20px] font-[600] justify-center">
            {" "}
            VIEW CASE STUDY{" "}
            <img
              className="w-[36px] h-[36px]"
              src={arrow}
              alt="case study"
            />{" "}
          </button>
          <button className="py-4 px-7 border-[#2C4250] border  text-[#2C4250] rounded-[12px] lg:h-[68px] h-[58px] w-[193px]  flex items-center poppins gap-3 lg:text-[20px] text-[18px] font-[600] justify-center ">
            LIVE SITE{" "}
            <img className="w-[36px] h-[36px]" src={arrow1} alt="case study" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
