import React from "react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import work1 from "./../assets/work1.png";
import work2 from "./../assets/work2.png";
import work3 from "./../assets/work3.png";
import work4 from "./../assets/work4.png";
import work5 from "./../assets/work5.png";
import work6 from "./../assets/work6.png";
import Workcard from "./Workcard";
interface Works {
  title: string;
  link: string;
  content: string;
  image: string;
}
const Works: React.FC = () => {
  const works: Works[] = [
    {
      title: "Video Editor Portfolio Website",
      link: "https://montagemotion.com",
      content:
        "This the portfolio website for top rated video editor Samiul. In this website I made a smooth user flow for his target client to know about Samiul and his service and easily contact him or book a call",
      image: work2,
    },
    {
      title: "Video Editor Portfolio Website",
      link: "https://montagemotion.com",
      content:
        "This the portfolio website for top rated video editor Samiul. In this website I made a smooth user flow for his target client to know about Samiul and his service and easily contact him or book a call",
      image: work1,
    },
    {
      title: "Video Editor Portfolio Website",
      link: "https://montagemotion.com",
      content:
        "This the portfolio website for top rated video editor Samiul. In this website I made a smooth user flow for his target client to know about Samiul and his service and easily contact him or book a call",
      image: work3,
    },
    {
      title: "Video Editor Portfolio Website",
      link: "https://montagemotion.com",
      content:
        "This the portfolio website for top rated video editor Samiul. In this website I made a smooth user flow for his target client to know about Samiul and his service and easily contact him or book a call",
      image: work4,
    },
    {
      title: "Video Editor Portfolio Website",
      link: "http://itechpark.co/",
      content:
        "This the portfolio website for top rated video editor Samiul. In this website I made a smooth user flow for his target client to know about Samiul and his service and easily contact him or book a call",
      image: work5,
    },
    {
      title: "Video Editor Portfolio Website",
      link: "https://montagemotion.com",
      content:
        "This the portfolio website for top rated video editor Samiul. In this website I made a smooth user flow for his target client to know about Samiul and his service and easily contact him or book a call",
      image: work6,
    },
  ];
  return (
    <div
      id="#works"
      className="  pt-[83px]  bg-[#0E151A] w-full lg:h-screen h-[886px]"
    >
      <div className="max-w-[1240px] mx-auto ">
        <Heading title="Works" />
        <div className=" mt-[40px] relative">
          <div className="bg-white opacity-50  mx-auto  max-w-[1052px] h-[400px]  rounded-[32.96px] lg:block hidden"></div>
          <div className="lg:absolute top-2 lg:mt-0 left-4 ">
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
              {works.map((p, indx) => (
                <SwiperSlide key={indx}>
                  <Workcard work={p} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
