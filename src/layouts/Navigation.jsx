import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className="navbar">
      <NavLink to='/' className={(nav) => (nav.isActive ? "navActive" : "")}>
        Accueil
      </NavLink>
      <NavLink to='/portfolio' className={(nav) => (nav.isActive ? "navActive" : "")}>
        Portfolio
      </NavLink>
      <NavLink to='/contact' className={(nav) => (nav.isActive ? "navActive" : "")}>
        Contact
      </NavLink>
      </div>
    </div>
  );
};

export default Navigation;