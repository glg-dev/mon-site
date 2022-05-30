import React, { useEffect, useState } from 'react';
import { ocprojects } from '../data/ocProjects';
import { persoProjects } from '../data/persoProjects';
import { work } from '../data/work';

const Filters = () => {
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
    <div>
        {
          filtersArray.map((filter) => (
            <button
              key={filter} 
              className={(filter === selectedFilter ? "checked" : undefined)}
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
        <button className={(selectedFilter === '' ? "checked" : "")}>
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
  );
};

export default Filters;