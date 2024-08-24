import React from "react";
import Heading from "./Heading";
import Testimonialcard from "./Testimonialcard";
import img1 from "./../assets/user1.png";
import img2 from "./../assets/user2.png";
import img3 from "./../assets/user3.png";
const Testimonial: React.FC = () => {
  return (
    <div className="mt-10 mb-10 max-w-[1240px] mx-auto min-h-screen">
      <Heading title="TESTIMONIAL" />
      <div className="mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
          <Testimonialcard
            img={img1}
            name="John Doe"
            designation="Founder or lorem"
            description="I-Tech BD's digital marketing services have significantly boosted our online presence. Their strategic approach and attention to detail have delivered impressive results. helping us achieve our goals efficiently. Highly recommended for anyone seeking reliable and effective digital maketing salutions."
          />
          <Testimonialcard
            img={img2}
            name="John Doe"
            designation="Founder or lorem"
            description="I-Tech BD's digital marketing services have significantly boosted our online presence. Their strategic approach and attention to detail have delivered impressive results. helping us achieve our goals efficiently. Highly recommended for anyone seeking reliable and effective digital maketing salutions."
          />
          <Testimonialcard
            img={img3}
            name="John Doe"
            designation="Founder or lorem"
            description="I-Tech BD's digital marketing services have significantly boosted our online presence. Their strategic approach and attention to detail have delivered impressive results. helping us achieve our goals efficiently. Highly recommended for anyone seeking reliable and effective digital maketing salutions."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
