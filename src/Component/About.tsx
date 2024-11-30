import React from "react";
import Heading from "./Heading";

const About: React.FC = () => {
  return (
    <div className="min-h-screen lg:pt-40 lg:-mt-0 -mt-[580px] rounded-[36px] bg-[#0E151A] w-full lg:px-0 px-4">
      <div className="max-w-[1240px] mx-auto lg:mt-5 mt-20">
        <Heading title={"About"} />
        <div className="text-white font-[400] poppins lg:text-[20px] lg:leading-[30px] text-[18px] leading-[24.5px] mt-[64px]">
          <p>
            I am a UI/UX Designer with the expertise of brand identity designa
            and video editing. Throughout my design journey I have created
            seamless and engaging user experiences. I am highly concerned about
            providing user-centric design solutions and meeting business goals.
          </p>{" "}
          <br />
          <p>
            My expertise lies in user & competitor research, interaction design,
            wireframing, user interface design, prototyping, testing, as well as
            cross-functional collaboration with project manager, developers and
            stakeholders. I have a thorough understanding of lean-agile
            methodologies to quickly build the MVP (Minimum Viable Product).
          </p>{" "}
          <br />
          <p>
            I always love learning about new trends in UI/UX design, tools and
            keeping myself updated.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
