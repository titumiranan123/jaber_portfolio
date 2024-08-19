import React from "react";
import Header from "../Component/Header";
import About from "../Component/About";
import Work from "../Component/Work";

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
    </div>
  );
};

export default Home;
