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
import work7 from "./../assets/work7.png";
import work8 from "./../assets/work8.png";
import work9 from "./../assets/work9.png";
import work10 from "./../assets/work10.png";
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
      link: "https://samiularafat.com",
      content:
        "This the portfolio website for top rated video editor Samiul. In this website I made a smooth user flow for his target client to know about Samiul and his service and easily contact him or book a call",
      image: work2,
    },

    {
      title: "Digital Agency Website",
      link: "https://montagemotion.com",
      content:
        "Montage motion is the reliable digital solutions provider mainly on Video Editing. Additionally, they provide Audio Edition, 2D/3D Animation , Graphic design , Digital Marketing, UI/UX Design , Web Development and special service on Podcast.",
      image: work3,
    },
    {
      title: "Short -form video editing service landing page",
      link: "https://shorts.montagemotion.com",
      content:
        "Montage Motion aims to show personalized service on short form video editing. This landing page keep the target users focused on one service. ",
      image: work4,
    },
    {
      title: "Talking head video editing service landing page",
      link: "https://talkinghead.montagemotion.com",
      content:
        "Montage Motion aims to show personalized service on talking head video editing. This landing page keep the target users focused on one service.",
      image: work5,
    },
    {
      title: "Digital Agency Website",
      link: "http://itechpark.co/",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all ways possible. From Social Media Marketing, WordPress Customization to ranking your website in search engines(SEO), they assist you in your digital presence.",
      image: work6,
    },
    {
      title: "Web Developer Portfolio Website",
      link: "https://titumiranan.online",
      content:
        "Here the portfolio website design for Titumir Anan a passionate web developer. His portfolio showcases his works and experiences. This website is customized to grab the attention of the recruiters.",
      image: work1,
    },
    {
      title: "Web developer Portfolio Website",
      link: "",
      content:
        "Here is the portfolio website design for Saad Srabon a passionate web developer. His portfolio showcases his works and experiences. This website is customized to grab the attention of the recruiters.",
      image: work7,
    },
    {
      title: "Ecommerce Website",
      link: "",
      content:
        "Zuprex is an ecommerce business who sells sneakers. This is a trendy looking website to grab the attention of the young generation and get more sales",
      image: work8,
    },
    {
      title: "Ecommerce Website",
      link: "",
      content:
        "Abru Germany is a german based ecommerce website. They sell Indian sub-continential and traditional dresses.",
      image: work9,
    },
    {
      title: "Ecommerce Website",
      link: "",
      content:
        "SwiftShop is an ecommerce website. There target users belong to all age groups. In this platform multiple vendors can sell variour items.",
      image: work10,
    },
  ];
  return (
    <div
      id="#works"
      className="  pt-[83px]  bg-[#0E151A] w-full md:h-auto  h-[886px] lg:pb-20 pb-0"
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
