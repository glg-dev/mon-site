import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLng } from '../functions';

const LanguageButton = () => {
    const { i18n } = useTranslation()
    const [language, setLanguage] = useState(localStorage.getItem('language') ? localStorage.getItem('language') : 'fr')

    const handleChangeLanguage = () => {
      language === 'fr' ? changeLng('en') : changeLng('fr')
      setLanguage(localStorage.getItem('language'))
    }

    useEffect(() => {
      i18n.changeLanguage(language)
    }, [language])
  
  return (
    <div className="language-button">
      <button className='button' onClick={handleChangeLanguage}>{ language === 'fr' ? 'Translate into English': 'Traduire en français'}</button>
    </div>
  );
};

export default LanguageButton;