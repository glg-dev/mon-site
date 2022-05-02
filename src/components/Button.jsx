import React from 'react';

const Button = ({props}) => {
  return (
    <button type="submit" >
      {
        props === 'success' ? "Message envoyé !"
        : props === 'error' ? "Retourner à l'accueil" 
        : "Envoyer"
      }
    </button>

  );
};

export default Button;