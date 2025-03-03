import React from "react";
import arrow1 from "./../assets/bg-black-arrow.svg";
import { Link } from "react-router-dom";
interface Props {
  work: {
    title: string;
    link: string;
    content: string;
    image: string;
  };
}

const Workcard: React.FC<Props> = ({ work }) => {
  return (
    <div className="max-w-[400px] md:max-w-[700px] lg:max-w-[1200px] w-full lg:h-[453px] md:h-[360px]  h-[640px] flex items-center justify-between md:flex-row flex-col py-8 px-5 lg:py-8 lg:px-8 rounded-[36px] bg-white gap-5 lg:gap-16 mx-auto">
      <img
        src={work.image}
        alt="work1"
        className="flex-shrink-0 lg:max-w-full h-auto max-w-[320px]"
      />
      <div className="flex flex-col gap-4 lg:w-[552px]">
        <h1 className="poppins font-semibold text-[20px] lg:text-[24px] leading-snug">
          {work.title}
        </h1>
        <p className="font-[400] poppins lg:text-[20px] lg:leading-[30px] text-[18px] leading-[24.5px]">
          {work.content}
        </p>
        {work?.link?.length !== 0 && (
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mt-5">
            <Link
              to={`${work.link}`}
              target="_blank"
              className="py-4 px-7 border border-[#030606] text-[#030606] rounded-[12px] lg:h-[68px] h-[58px] w-full flex items-center justify-center gap-3 text-[16px] lg:text-[20px] font-semibold"
            >
              Visit Live Site
              <img src={arrow1} alt="live site" className="w-[36px] h-[36px]" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workcard;
