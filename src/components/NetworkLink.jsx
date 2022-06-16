import React from 'react';
import { useState } from 'react';

const NetworkLink = ({link}) => {

  const [popup, setPopup] = useState(false);
  const {url, icon, popupText} = link;

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
          <p className="popup">{popupText}</p>
        )
      }
    </div>
  );
};

export default NetworkLink;