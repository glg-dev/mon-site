import React from 'react';

const Skills = () => {

  const skills = ['Sass','JavaScript', 'React', 'Node.js', 'Tests unitaires et fonctionnels', 'Git', 'GitHub', 'Figma', 'Méthodes agiles', 'Anglais', 'SEO', 'WCAG', 'Notion.so', 'Gestion de projet', 'Vercel']

  return (
    <div className='my-skills'>
      {
        skills.map((skill, index) => {
          return (
            <div className="skill" key={index}>
              <button className="skill-name">{skill}</button>
            </div>
          )
        })
      }
    </div>
  );
};

export default Skills;