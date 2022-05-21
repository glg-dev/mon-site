import React from 'react';

const Glitch = ({text}) => {
  return (
      <span className='glitch' data-glitch={text}>{text}</span>
  );
};

export default Glitch;