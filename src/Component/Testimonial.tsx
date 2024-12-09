/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import design from "./../assets/user1.png";
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
      designation: "Design",
      name: "Design",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
      image: design,
    },
    {
      designation: "Web Development",
      name: "E-Comerce",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
      image: design,
    },
    {
      designation: "Video Editing",
      name: "Billie Pierce",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
      image: design,
    },
  ];

  const handleTextNavigationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
  return (
    <div className=" bg-[#0E151A] lg:px-0 px-4 lg:pt-[64px]  rounded-[36px] lg:h-screen h-[1800px] w-full">
      <div className="">
        <Heading title="TESTIMONIAL" />
      </div>
      <div className="flex flex-col justify-between lg:flex-row max-w-[1240px] items-center gap-10 mx-auto mt-[20px] lg:mt-[20px] lg:px-0 px-4">
        {/* Left-side Text Navigation */}
        <div className="w-full lg:w-[460px] lg:h-[350px] rounded-[20px] lg:p-4 flex flex-col justify-center space-y-4">
          {slides.map((slide, index) => (
            <div key={index}>
              <motion.button
                key={index}
                onClick={() => handleTextNavigationClick(index)}
                whileHover={{ scale: 1.05 }} // Hover effect
                whileTap={{ scale: 0.95 }} // Tap effect
                className={`${
                  index === activeIndex ? "bg-[#121B22] " : ""
                } px-[14px] py-[19px] w-[415px] h-[117px] `}
              >
                <div className="flex gap-2">
                  <img className="w-10 h-10" src={slide.image} alt="" />
                  <div>
                    <p
                      className={`flex items-center text-left inter transition-all duration-300 text-white ${
                        index === activeIndex
                          ? "ms-1 text-[16px] lg:text-[20.5px] leading-[30px] font-[600]"
                          : "text-[14px] lg:text-[20.5px] leading-[30px] font-[600]"
                      }`}
                    >
                      {slide.name}
                    </p>
                    <p
                      className={`flex inter items-center text-left transition-all duration-300 text-white ${
                        index === activeIndex
                          ? "ms-1 text-[14px] lg:text-[15.37px] leading-[23.06px] font-[500]"
                          : "text-[14px] lg:text-[15.37px] leading-[23.06px] font-[500]"
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
                  className="bg-[#121B22] p-4 rounded-lg lg:hidden"
                >
                  <p className="text-white text-[14px] lg:text-[16px]">
                    {slide.content}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Main Slider */}
        <div className="w-full lg:block hidden lg:w-[780px] lg:h-[440px] rounded-xl overflow-hidden">
          <Swiper
            direction="vertical"
            spaceBetween={30}
            slidesPerView={1}
            mousewheel={true}
            modules={[Navigation, Mousewheel]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full h-[530px] lg:h-[415px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Initial slide-in state
                  animate={{ opacity: 1, x: 0 }} // On animation state
                  exit={{ opacity: 0, x: -50 }} // On exit state
                  transition={{ duration: 0.5 }} // Duration of animation
                  className="flex flex-col lg:flex-row gap-5   lg:p-8 rounded-lg shadow-lg"
                >
                  <p className="text-[14px] lg:text-[16px] mt-6 poppins lg:mt-8 font-normal text-white">
                    {slide.content}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
