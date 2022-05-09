import React, { useState } from 'react';
import { ocprojects } from '../data/ocProjects';
import PortfolioProject from './PortfolioProject';

const Carousel = ({projectType}) => {
  const [current, setCurrent] = useState(0);
  const length = projectType.length;

  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const handlePrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <div className='carousel'>
      {
        projectType.map((project, index) => index === current && (
          <div className="slide" key={index}>
            <PortfolioProject project={project} />
            <span>{current + 1} / {length}</span>
          </div>
        ))
      }
      {
        length > 1 && (
          <div className="controls">
            <div className='prev-button' onClick={handlePrev}>
              <i className='fas fa-4x fa-caret-left'/>
            </div>
            <div className='next-button' onClick={handleNext}>
              <i className='fas fa-4x fa-caret-right'/>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Carousel;