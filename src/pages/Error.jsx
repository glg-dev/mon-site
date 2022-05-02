import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const Error = () => {
  return (
    <div className='error'>
      <p className='glitch' data-glitch='Page non trouvée'>Page non trouvée</p>
      <NavLink to='/'>
        <Button props={"error"} />
      </NavLink>
    </div>
  );
};

export default Error;