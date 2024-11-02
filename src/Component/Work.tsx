import React from "react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import work1 from "./../assets/work1.png";
import Workcard from "./Workcard";

const Work: React.FC = () => {
  return (
    <div className=" bg-[#0E151A] pt-48 w-full">
      <div className="min-h-screen   max-w-[1440px] px-[120px] mt-10 mx-auto ">
      <Heading title="Works" />
      <div className="relative mt-10">
        <div className="bg-white opacity-50 mx-auto ms-14 w-[1102px] h-[430px]  rounded-[32.96px]"></div>
        <div className="absolute top-4 h-[582px]">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={{ forceToAxis: true }} 
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel]}
            className="mySwiper h-full"
          >
            <SwiperSlide>
              <Workcard work1={work1} />
            </SwiperSlide>
            <SwiperSlide>
              <Workcard work1={work1} />
            </SwiperSlide>
            <SwiperSlide>
              <Workcard work1={work1} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    </div>
  );
};


export default Work;
