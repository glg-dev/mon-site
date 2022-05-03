import React, { useState } from 'react';

const PortfolioProject = ({project}) => {

  const [showInfos, setShowInfos] = useState(false);

  const {name, languages, languagesIcons, source, repo, description, skills, picture} = project;

  return (
    <div className='PortfolioProject'>
      <div className="project-header">
        <div className="project-name" onClick={() => setShowInfos(true)}>{name}</div>
        {languagesIcons && (
          <div className="icons">
            {languagesIcons.map((icon) => 
              <i className={icon} key={icon}></i>
            )}
          </div>
        )}
      </div>
      <img className='thumbnail' src={picture} alt={name} onClick={() => setShowInfos(!showInfos)} />
      {showInfos && (
        <div className="infos-screen">
          <div className="project-infos">
            <div className="head">
              <h2 className='glitch' data-glitch={name}>{name}</h2>
              <div className="source-code">
                {source && (
                  <a href={source} target="_blank" rel="noopener noreferrer">Accéder au site</a>
                )}
                {repo && (
                  <a href={repo} target="_blank" rel="noopener noreferrer">Accéder au code</a>
                )}
              </div>
            </div>
            {description && (
              <p className="text">{description}</p>
            )}
            {languages && (
              <ul className="languages">
                <h3>Langages utilisés :</h3>
              {languages.map((language) =>
                <li key={language}>{language}</li>
              )}
              </ul>
            )}
            {skills && (
              <ul className="skills">
                <h3>Compétences acquises :</h3>
              {skills.map((skill) =>
                <li key={skill}>{skill}</li>
              )}
              </ul>
            )}
            <button onClick={() => setShowInfos(false)}>Retourner sur la page</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioProject;