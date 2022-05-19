import React from 'react';
import PortfolioProject from '../components/PortfolioProject';
import Skills from '../components/Skills';
// import PortfolioProject from '../components/PortfolioProject';
import TypedText from '../components/TypedText';
import { ocprojects } from '../data/ocProjects';
import { persoProjects } from '../data/persoProjects';
import { work } from '../data/work';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <TypedText string={[`Voici mon portfolio.<br />^1600 Vous retrouverez ici mes créations.`]} />

      <h1 className='glitch' data-glitch='Mes travaux'>Mes travaux</h1>
      <div className="projects">
        {
          ocprojects.map((project, index) => (
            <PortfolioProject project={project} key={index} />
          ))
        }
        {
          work.map((project, index) => (
            <PortfolioProject project={project} key={index} />
          ))
        }
      </div>

      <h1 className='glitch' data-glitch='Projets personnels'>Projets personnels</h1>
      <div className="projects">
      {
          persoProjects.map((project, index) => (
            <PortfolioProject project={project} key={index} />
          ))
        }
      </div>

      <h1 className='glitch' data-glitch='Mes compétences'>Mes compétences</h1>
      <Skills />
    </div>
  );
};

export default Portfolio;