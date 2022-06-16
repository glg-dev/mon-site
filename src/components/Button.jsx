import React from 'react';
import send from '../assets/send-icon.svg'

const Button = ({props}) => {
  return (
    <button type="submit" className={props === 'send' ? 'send--button' : 'button'} >
      {
        props === 'success' ? "Message envoyé !"
        : props === 'error' ? "Retourner à l'accueil" 
        : props === 'send' ? <img src={send} alt="Envoyer" />
        : "Envoyer"
      }
    </button>

  );
};

export default Button;