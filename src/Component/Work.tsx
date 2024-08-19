import React from "react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import work1 from "./../assets/work1.png";
import Workcard from "./Workcard";

const Work: React.FC = () => {
  return (
    <div className="h-screen bg-[#030403]  max-w-[1440px] px-[120px] mt-14 mx-auto ">
      <Heading title="Works" />
      <div className="relative">
        <div className="bg-white mx-auto ms-14 w-[1172px] h-[480px] rounded-[32.96px]"></div>
        <div className="absolute top-10 h-[582px]">
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
  );
};


export default Work;
