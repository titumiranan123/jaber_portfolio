import React from "react";
import Header from "../Component/Header";
import About from "../Component/About";
import Work from "../Component/Work";
import Testimonial from "../Component/Testimonial";

const Home: React.FC = () => {
  return (
    <div className="scroll-container">
      <section className="scroll-section">
        <Header />
      </section>
      <section className="scroll-section">
        <About />
      </section>
      <section className="scroll-section">
        <Work />
      </section>
      <section className="scroll-section">
        <Testimonial />
      </section>
    </div>
  );
};

export default Home;
