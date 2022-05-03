import React from 'react';
import Carousel from '../components/Carousel';
import PortfolioProject from '../components/PortfolioProject';
// import RotatingGlass from '../components/RotatingGlass';
import TypedText from '../components/TypedText';
import { ocprojects } from '../data/ocProjects';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      {/* <RotatingGlass /> */}
      <TypedText string={[`Voici mon portfolio.<br />^1600 Vous retrouverez ici mes créations.`]} />
      <h1 className='glitch' data-glitch='Projets OpenClassrooms'>Projets OpenClassrooms</h1>
      <div className="projects">
        <Carousel />
        {/* {
          ocprojects.map(project => {
            return (
              <PortfolioProject key={project.id} project={project} />
              )
            })
          } */}
      </div>
    </div>
  );
};

export default Portfolio;