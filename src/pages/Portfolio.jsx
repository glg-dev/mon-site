import React from 'react';
import RotatingGlass from '../components/RotatingGlass';
import TypedText from '../components/TypedText';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <RotatingGlass />
      <TypedText string={[`Voici mon portfolio.<br />^1600 Vous retrouverez ici mes créations.`]} />
    </div>
  );
};

export default Portfolio;