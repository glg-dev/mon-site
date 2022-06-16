import React from 'react';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className="navbar">
        <a href='#'>Home</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#contact'>Contact</a>
        <div className="resume">
          <a href="./assets/CV.pdf" target='_blank' rel='noopener noreferrer'>CV</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;