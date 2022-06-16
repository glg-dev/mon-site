import React from 'react'
import TypedText from '../components/TypedText';
import avatar from '../assets/avatar.png';


function Header() {
  return (
    <header id='header'>
      <TypedText string={[`Bonjour !  Moi c'est Gaël !`]} />
      <div className="avatar">
        <img src={avatar} alt="Gaël" />
      </div>
      <TypedText string={[`Bienvenue sur mon espace`,`Bienvenue sur mon portfolio !<br />^1600 C'est ici que vos idées prennent vie…`]} delayed />
    </header>
  )
}

export default Header