import React from "react";
import Header from "../Component/Header";
import About from "../Component/About";
import Testimonial from "../Component/Testimonial";

import Works from "../Component/Works";
import Footer from "../Component/Footer";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="bg-[#0E151A] rounded-t-[36px] rounded-b-[36px]">
        <section id="about">
          <About />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="resume">
          <Testimonial />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
