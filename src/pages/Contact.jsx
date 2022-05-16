import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {

  const [popup, setPopup] = useState(false);

  return (
    <div className='contact'>
      <ContactForm />
      <div className="whatsapp-cta">
        <button 
          className="whatsapp" 
          onMouseEnter={() => setPopup(true)} 
          onMouseLeave={() => setPopup(false)}
          >
          <a href="https://wa.me/0635167962" target='_blank' rel='noopener noreferrer'>
          <i className="fa fa-2x fa-whatsapp whatsapp-icon"></i>
          </a>
        </button>
        {
          popup && (
            <div className="popup">
              <p>Vous préférez Whatsapp ?</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Contact;