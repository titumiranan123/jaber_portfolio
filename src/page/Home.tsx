import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from '../Component/Header';
import About from '../Component/About';

const Home: React.FC = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Parallax ref={parallax} pages={2}>
        
        {/* Parallax layer for the Header component */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1}
          
        >
          <Header />
        </ParallaxLayer>

        {/* Parallax layer for the About component */}
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
        >
          <About />
        </ParallaxLayer>

        {/* Optional: Add a clickable layer to scroll */}
        <ParallaxLayer
          offset={0.9}
          speed={0.2}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <p style={{ color: 'white' }}>Scroll down to see About</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
