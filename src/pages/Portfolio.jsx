import React from 'react';
import PortfolioProject from '../components/PortfolioProject';
// import RotatingGlass from '../components/RotatingGlass';
import TypedText from '../components/TypedText';
import { ocprojects } from '../data/ocProjects';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      {/* <RotatingGlass /> */}
      <TypedText string={[`Voici mon portfolio.<br />^1600 Vous retrouverez ici mes créations.`]} />
      <div className="projects">
        {
          ocprojects.map(project => {
            return (
              <PortfolioProject key={project.id} project={project} />
              )
            })
          }
      </div>
    </div>
  );
};

export default Portfolio;