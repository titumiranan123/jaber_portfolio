import React from "react";
import Header from "../Component/Header";
import About from "../Component/About";
import Work from "../Component/Work";
import Testimonial from "../Component/Testimonial";

const Home: React.FC = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <About />
      <Work />
      <Testimonial />
    </div>
  );
};

export default Home;
