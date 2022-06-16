import React, { useEffect, useState } from 'react';
import Glitch from '../components/Glitch';
import PortfolioProject from '../components/PortfolioProject';
import { ocprojects } from '../data/ocProjects';
import { persoProjects } from '../data/persoProjects';
import { work } from '../data/work';

const Portfolio = () => {

  const [filtersArray, setFiltersArray] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    ocprojects.map((project) => {
      project.filters.map((filters) => {
        if (!filtersArray.includes(filters)) {
          setFiltersArray([...filtersArray, filters]);
        }
        return filtersArray
      })
    })
    persoProjects.map((project) => {
      project.filters.map((filters) => {
        if (!filtersArray.includes(filters)) {
          setFiltersArray([...filtersArray, filters]);
        }
        return filtersArray
      })
    })
    work.map((project) => {
      project.filters.map((filters) => {
        if (!filtersArray.includes(filters)) {
          setFiltersArray([...filtersArray, filters]);
        }
        return filtersArray
      })
    })
    return filtersArray
  }, [filtersArray, selectedFilter])
  

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <h2>
        <Glitch text='Filtrer par item' />
      </h2>
      <div className="filters">
        {
          filtersArray.map((filter) => (
            <button
              key={filter} 
              className={(filter === selectedFilter ? "checked button" : "button")}
            >
              <input 
                type="radio" 
                name="radio" 
                id={filter} 
                value={filter} 
                onChange={(e) => setSelectedFilter(e.target.value)} 
              />
              <label htmlFor={filter}>{filter}</label>
            </button>
          ))
        }
        <button className={(selectedFilter === '' ? "checked button" : "button")}>
          <input 
            type="radio" 
            name="radio" 
            id="all" 
            value="all" 
            checked={selectedFilter === ''}
            onChange={() => setSelectedFilter('')} 
          />
          <label htmlFor="all">Tous</label>
        </button>
      </div>

      {/* <h1 className='glitch' data-glitch='Mes travaux'>Mes travaux</h1> */}
      <div className="projects">
        {
          work
          .filter(project => project.filters.includes(selectedFilter) || selectedFilter === '')
          .map((project, index) => (
            <PortfolioProject project={project} key={index} />
            ))
          }
        {
          persoProjects
            .filter(project => project.filters.includes(selectedFilter) || selectedFilter === '')
            .map((project, index) => (
              <PortfolioProject project={project} key={index} />
            ))
        }
          {
            ocprojects
              .filter(project => project.filters.includes(selectedFilter) || selectedFilter === '')
              .map((project, index) => (
                <PortfolioProject project={project} key={index} />
              ))
          }
      </div>
      {/* <h1 className='glitch' data-glitch='Mes compétences'>Mes compétences</h1>
      <Skills /> */}
    </div>
  );
};

export default Portfolio;