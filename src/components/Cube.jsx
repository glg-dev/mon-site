import React from 'react';
import arrowUp from '../assets/arrow-up.svg';
import arrowDown from '../assets/arrow-down.svg';

const Cube = () => {

  return (
    <div>
      <div className="container">
        <img className='arrow-up' src={arrowUp} onClick={() => window.scrollBy(0, -400)} />
        <div className="circle-container circle-1">
        </div>
        <div className="circle-container circle-2">
        </div>
        <div className="cube">
          <div className="side" id="front"></div>
          <div className="side" id="bottom"></div>
          <div className="side" id="top"></div>
          <div className="side" id="left"></div>
          <div className="side" id="right"></div>
          <div className="side" id="back"></div>
        </div>
        <img className='arrow-down' src={arrowDown} onClick={() => window.scrollBy(0, 400)} />
      </div>
    </div>
  );
};

export default Cube;