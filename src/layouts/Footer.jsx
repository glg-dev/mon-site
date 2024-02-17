import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();
  
  return (
    <div className='footer'>
      <div className="content">
        <small>GLG - {date}</small>
        <small>Logo by Lisa Cailleaux</small>
      </div>
    </div>
  );
};

export default Footer;