import React, { useState } from 'react';
import { ocprojects } from '../data/ocProjects';
import leftArrow from '../assets/arrow_left.svg'
import PortfolioProject from './PortfolioProject';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = ocprojects.length;

  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const handlePrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <div>
      {
        ocprojects.map((project, index) => index === current && (
          <div className="slide" key={index}>
            <PortfolioProject project={project} />
            <span>{current + 1} / {length}</span>
          </div>
        ))
      }
      <div className="buttons">
        <div onClick={handlePrev}>
          <img src={leftArrow} alt="left arrow" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;