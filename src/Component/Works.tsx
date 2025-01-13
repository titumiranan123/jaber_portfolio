import React from "react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import work1 from "./../assets/work1.png";
import Workcard from "./Workcard";
const Works: React.FC = () => {
  return (
    <div
      id="#works"
      className="  pt-[64px]  bg-[#0E151A] w-full lg:h-screen h-[886px]"
    >
      <div className="max-w-[1240px] mx-auto ">
        <Heading title="Works" />
        <div className=" mt-[20px] relative">
          <div className="bg-white opacity-50  mx-auto  max-w-[1052px] h-[400px]  rounded-[32.96px] lg:block hidden"></div>
          <div className="lg:absolute top-2 left-4 ">
            <Swiper
              direction="vertical"
              spaceBetween={30}
              slidesPerView={1}
              mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
              }}
              modules={[Mousewheel]}
              touchReleaseOnEdges={true}
              speed={600} // Set transition speed to 600ms for smoother transitions
              onTouchEnd={(swiper) => {
                if (swiper.isEnd || swiper.isBeginning) {
                  document.body.style.overflowY = "auto";
                }
              }}
              onReachEnd={() => {
                document.body.style.overflowY = "auto";
              }}
              onReachBeginning={() => {
                document.body.style.overflowY = "auto";
              }}
              className="mySwiper"
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
