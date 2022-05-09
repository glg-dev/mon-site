import React from 'react';
import Carousel from '../components/Carousel';
// import PortfolioProject from '../components/PortfolioProject';
import TypedText from '../components/TypedText';
import { ocprojects } from '../data/ocProjects';
import { persoProjects } from '../data/persoProjects';
import { work } from '../data/work';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <TypedText string={[`Voici mon portfolio.<br />^1600 Vous retrouverez ici mes créations.`]} />

      <h1 className='glitch' data-glitch='Projets OpenClassrooms'>Projets OpenClassrooms</h1>
      <div className="projects">
        <Carousel projectType={ocprojects} />
      </div>

      <h1 className='glitch' data-glitch='Projets personnels'>Projets personnels</h1>
      <div className="projects">
        <Carousel projectType={persoProjects} />
      </div>

      <h1 className='glitch' data-glitch='Ils me font confiance'>Ils me font confiance</h1>
      <div className="projects">
        <Carousel projectType={work} />
      </div>
    </div>
  );
};

export default Portfolio;