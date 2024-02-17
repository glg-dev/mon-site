import React, { Suspense, useState } from 'react';
import About from '../layouts/About';
import Contact from '../layouts/Contact';
import Portfolio from '../layouts/Portfolio';
import Footer from '../layouts/Footer';
import Cursor from '../components/Cursor';
import Navigation from '../layouts/Navigation';

const Home = () => {
  const [cursorTop, setCursorTop] = useState()
  const [cursorLeft, setCursorLeft] = useState()
  const [cursorOpacity, setCursorOpacity] = useState(0)
  const [hoverNav, setHoverNav] = useState(false)


  const followCursor = (e) => {
    setCursorTop(`${e.pageY}px`)
    setCursorLeft(`${e.pageX}px`)
  }

  const customCursorStyle = {
    insetBlockStart: cursorTop,
    insetInlineStart: cursorLeft,
    opacity: cursorOpacity
  }
  
  return (
    <Suspense fallback="loading">
      <div className="home"
        onMouseMove={(e) => followCursor(e)}
        onMouseEnter={() => setCursorOpacity(1)} 
        onMouseLeave={() => setCursorOpacity(0)}
      >
        <Navigation handleMouseEnter={() => setHoverNav(true)} handleMouseLeave={() => setHoverNav(false)} />
        <Cursor customStyle={customCursorStyle} onNav={hoverNav} />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div> 
    </Suspense>
    
  );
};

export default Home;