/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import Header from "../Component/Header";
import About from "../Component/About";
import Testimonial from "../Component/Testimonial";
import ScrollSection from "./ScrollSection";

import ScrollNav from "./ScrollNav";
import Works from "../Component/Works";
// import Works from "../Component/Works";

type SectionRefs = React.RefObject<HTMLDivElement>[];

const Home: React.FC = () => {
  // Define the refs array with HTMLDivElement type
  const sectionRefs: SectionRefs = Array.from({ length: 4 }, () =>
    useRef<HTMLDivElement>(null)
  );

  return (
    <div>
      {/* Pass refs array with correct type */}
      <ScrollNav sections={sectionRefs} />

      {/* Scrollable Sections with Components as Children */}
      <div>
        <ScrollSection ref={sectionRefs[0]}>
          <Header />
        </ScrollSection>

        <ScrollSection ref={sectionRefs[1]}>
          {" "}
          <About />{" "}
        </ScrollSection>

        <ScrollSection ref={sectionRefs[2]}>
          <Works />
        </ScrollSection>

        <ScrollSection ref={sectionRefs[3]}>
          <Testimonial />
        </ScrollSection>
      </div>
    </div>
  );
};

export default Home;
