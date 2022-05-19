import React, { useState } from 'react';

const PortfolioProject = ({project}) => {

  const [isHovered, setIsHovered] = useState(false);
  const {name, languages, languagesIcons, source, repo, description, skills, picture} = project;

  return (
    <div className='PortfolioProject'>
      <div className="thumbnail" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={picture} alt={name} />
        <div className="header">
          <h2>{name}</h2>
          {languagesIcons && (
            <div className="icons">
              {languagesIcons.map((icon) => 
              <i className={icon} key={icon}></i>
              )}
            </div>
          )}
        </div>
      </div>
      {
        isHovered && (
          <div className="hovered-infos" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="source-code">
              {source && (
                <a href={source} target="_blank" rel="noopener noreferrer">Accéder au site</a>
              )}
              {repo && (
                <a href={repo} target="_blank" rel="noopener noreferrer">Accéder au code</a>
              )}
            </div>
            {description && (
              <p className="description">{description}</p>
            )}
            <div className="specs">
              {languages && (
                <ul className="languages">
                  <h3>Langages :</h3>
                  <div className="languages-list">
                    {languages.map((language) =>
                      <li key={language}>{language}</li>
                    )}
                  </div>
                </ul>
              )}
              {skills && (
                <ul className="skills">
                  <h3>Compétences :</h3>
                  <div className="skills-list">
                    {skills.map((skill) =>
                      <li key={skill}>{skill}</li>
                    )}
                  </div>
                </ul>
              )}
            </div>
          </div>
        )
      }
      {/* <div className="project-header">
        <div className="title">
          <h2>{name}</h2>
          {languagesIcons && (
            <div className="icons">
              {languagesIcons.map((icon) => 
                <i className={icon} key={icon}></i>
                )}
            </div>
          )}
        </div>
        {picture && <img className='thumbnail' src={picture} alt={name} />}
      </div>
      <div className="project-infos">
        <div className="source-code">
          {source && (
            <a href={source} target="_blank" rel="noopener noreferrer">Accéder au site</a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">Accéder au code</a>
          )}
        </div>
        {description && (
          <p className="text">{description}</p>
        )}
        <div className="specs">
          {languages && (
            <ul className="languages">
              <h3>Langages utilisés :</h3>
              <div className="languages-list">
                {languages.map((language) =>
                  <li key={language}>{language}</li>
                )}
              </div>
            </ul>
          )}
          {skills && (
            <ul className="skills">
              <h3>Compétences acquises :</h3>
              <div className="skills-list">
                {skills.map((skill) =>
                  <li key={skill}>{skill}</li>
                )}
              </div>
            </ul>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default PortfolioProject;