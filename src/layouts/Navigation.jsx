import React from 'react';
import { useTranslation } from 'react-i18next';
import avatar from '../assets/avatar.png';

const Navigation = ({ handleMouseEnter, handleMouseLeave }) => {

  const { t } = useTranslation()
  return (
    <nav 
      className='navigation' 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="avatar">
        <img src={avatar} alt="Gaël" />
      </div>

      <div className="navbar">
        <button className='button'><a href='#about'>{t("About me")}</a></button>
        <button className='button'><a href='#portfolio'>Portfolio</a></button>
        <button className='button'><a href='#contact'>Contact</a></button>
        <button className="glowing-button">
          <a href="./assets/CV.pdf" target='_blank' rel='noopener noreferrer'>CV</a>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;