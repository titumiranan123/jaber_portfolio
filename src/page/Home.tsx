import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import About from '../Component/About';
import Work from '../Component/Work';


const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="parallax-layer header">
        <Header />
      </div>

      <div className="parallax-layer about">
        <About />
      </div>

      <div className="parallax-layer work" style={{ transform: `translateY(-${scrollY * 0.5}px)` }}>
        <Work />
      </div>
    </div>
  );
};

export default Home;
