import React from "react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import work1 from "./../assets/work1.png";
import Workcard from "./Workcard";
const Works: React.FC = () => {
  return (
    <div className="min-h-screen pt-[125px] rounded-[36px] bg-red-500 w-full">
      <div className="max-w-[1240px] mx-auto mt-5">
        <Heading title="Works" />
        <div className=" mt-4 relative">
          <div className="bg-white opacity-50 mx-auto  w-[1102px] h-[430px]  rounded-[32.96px]"></div>
          <div className="absolute top-4 left-4 h-[582px]">
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

export default Works;
