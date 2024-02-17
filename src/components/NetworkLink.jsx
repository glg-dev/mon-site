import React, { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NetworkLink = ({link}) => {

  const [popup, setPopup] = useState(false);
  const [isFr, setIsFr] = useState(true)
  const {url, icon, popupTextFr, popupTextEn} = link;
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.language === "fr" ? setIsFr(true) : setIsFr(false)
  }, [i18n.language])

  return (
    <div 
      className='network-link'
      onMouseEnter={() => setPopup(true)} 
      onMouseLeave={() => setPopup(false)}
    >
      <a href={url} target="_blank" rel='noopener noreferrer'>
        <i className={icon}></i>
      </a>
      {
        popup && (
          <p className="popup">{isFr ? popupTextFr : popupTextEn}</p>
        )
      }
    </div>
  );
};

export default NetworkLink;