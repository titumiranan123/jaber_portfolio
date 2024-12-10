/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import Header from "../Component/Header";
import About from "../Component/About";
import Testimonial from "../Component/Testimonial";
import ScrollSection from "./ScrollSection";

import Works from "../Component/Works";

type SectionRefs = React.RefObject<HTMLDivElement>[];

const Home: React.FC = () => {
  // Define the refs array with HTMLDivElement type
  const sectionRefs: SectionRefs = Array.from({ length: 4 }, () =>
    useRef<HTMLDivElement>(null)
  );

  return (
    <div>
      <div className="overflow-hidden">
        <ScrollSection ref={sectionRefs[0]}>
          <Header sectionRefs={sectionRefs} />
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
