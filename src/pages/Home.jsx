import React from 'react';
import About from '../components/About';
import Contact from '../layouts/Contact';
import Header from '../layouts/Header';
import Portfolio from '../layouts/Portfolio';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;