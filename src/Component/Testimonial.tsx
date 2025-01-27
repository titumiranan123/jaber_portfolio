/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import client1 from "./../assets/client1.png";
import client2 from "./../assets/client2.png";
import client3 from "./../assets/client3.png";
import client4 from "./../assets/client4.png";
import Heading from "./Heading";

interface Slide {
  designation: string;
  name: string;
  content: string;
  image: string;
}

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const slides: Slide[] = [
    {
      designation: "Samiul Arafat Imon",
      name: "Founder & CEO, Montage Motion",
      content:
        "Working with Jaber Hossain was an absolute pleasure! His expertise as a UI/UX designer is unmatched. Jaber designed both my personal and agency websites, as well as landing pages for my business, and the results were phenomenal. He has an incredible eye for detail and a deep understanding of user experience, ensuring every design was not only visually stunning but also functional and user-friendly. <br/> I highly recommend Jaber for anyone looking to enhance their digital presence!",
      image: client1,
    },
    {
      designation: "Abul Hasnat",
      name: "Front-end Engineer , Dashur Al, LLC",
      content:
        "Jaber's work in designing my Figma page was nothing short of exceptional. His creativity and visual appeal truly exceeded expectations, and he was incredibly polite and proactive throughout the process. I love his fluent communication and stellar delivery. He is setting up the bar so high!!!",
      image: client2,
    },
    {
      designation: "Owner, Zuprex",
      name: "Solaiman Swiim ",
      content:
        "Jaber Hossain brought our vision for Zuprex to life with his outstanding UI/UX design skills. He designed a modern and intuitive interface that not only looks amazing but also delivers a seamless shopping experience for our customers. His dedication, creativity, and attention to detail made all the difference. We highly recommend Jaber for any design project!",
      image: client3,
    },
    {
      designation: "CEO and Founder of Edit Simplified",
      name: "MD Yeasin Bhuyan",
      content:
        "Jaber's audit of our website's UX was nothing short of transformative. He quickly identified pain points we had overlooked and provided actionable insights that significantly enhanced our user experience. His keen eye for detail and deep understanding of user behavior helped us make critical improvements, leading to increased engagement and a more seamless journey for our visitors.",
      image: client4,
    },
  ];

  const handleTextNavigationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div
      id="#resume"
      className="bg-[#0E151A] lg:pt-[75px] pb-[80px] w-full rounded-b-[36px]"
    >
      <div className=" max-w-[1240px] mx-auto  ">
        <div>
          <Heading title="TESTIMONIAL" />
          <p className="md:text-[20px] poppins  md:leading-[30px] text-[16px] leading-[20px] font-[400] text-white text-center">
            What my clients say about my work.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  items-center gap-10  mt-[60px] lg:px-0 px-4">
          {/* Left-side Text Navigation */}
          <div className="w-full lg:w-[500px] space-y-1">
            {slides.map((slide, index) => (
              <div key={index}>
                <motion.button
                  onClick={() => handleTextNavigationClick(index)}
                  className={`px-[14px] py-[19px] lg:w-[440px] h-[117px] hover:bg-[#121B22] transition-all duration-150 ease-in-out ${
                    index === activeIndex ? "bg-[#121B22] rounded-lg" : ""
                  }`}
                >
                  <div className="flex gap-3  items-center">
                    <img className="w-10 h-10" src={slide.image} alt="" />
                    <div>
                      <p
                        className={`text-left text-white font-[600] ${
                          index === activeIndex
                            ? "text-[16px] lg:text-[20.5px] leading-[30px]"
                            : "text-[14px] lg:text-[20.5px] leading-[30px]"
                        }`}
                      >
                        {slide.name}
                      </p>
                      <p
                        className={`text-left text-white font-[500] ${
                          index === activeIndex
                            ? "text-[14px] lg:text-[15.37px] leading-[23.06px]"
                            : "text-[14px] lg:text-[15.37px] leading-[23.06px]"
                        }`}
                      >
                        {slide.designation}
                      </p>
                    </div>
                  </div>
                </motion.button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#121B22] p-4 rounded-xl lg:hidden"
                  >
                    <p className="text-white font-[400] poppins lg:text-[20px] lg:leading-[30px] text-[18px] leading-[24.5px]">
                      {slide.content.split("<br/>").map((p, i) => (
                        <span key={i}>{p}</span>
                      ))}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Main Slider */}
          <div className="w-full lg:block hidden lg:w-[780px] rounded-xl  overflow-hidden">
            <Swiper
              direction="vertical"
              spaceBetween={30}
              slidesPerView={1}
              mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
              modules={[Navigation, Mousewheel]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full h-[530px] lg:h-[415px]"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row gap-5 lg:p-8 rounded-lg "
                  >
                    <div className=" text-white  font-[400] poppins lg:text-[20px] lg:leading-[30px] text-[18px] leading-[24.5px]">
                      {slide.content.split("<br/>").map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
