import React from "react";
import Header from "../Component/Header";
import About from "../Component/About";
import Testimonial from "../Component/Testimonial";

import Works from "../Component/Works";
import Footer from "../Component/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <Header />
        <section id="about">
          <About />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="resume">
          <Testimonial />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
