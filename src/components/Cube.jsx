import React from 'react';

const Cube = () => {
  return (
    <div>
      <div className="container">
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
      </div>
    </div>
  );
};

export default Cube;