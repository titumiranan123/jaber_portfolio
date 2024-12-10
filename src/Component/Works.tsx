import React from "react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import work1 from "./../assets/work1.png";
import Workcard from "./Workcard";
const Works: React.FC = () => {
  return (
    <div className="  pt-[64px] rounded-[36px] bg-[#0E151A] w-full lg:h-screen h-[1056px]">
      <div className="max-w-[1240px] mx-auto ">
        <Heading title="Works" />
        <div className=" mt-[20px] relative">
          <div className="bg-white opacity-50  mx-auto  max-w-[1052px] h-[400px]  rounded-[32.96px] lg:block hidden"></div>
          <div className="absolute top-2 left-4 ">
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
