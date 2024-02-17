import React from 'react';

const Cursor = ({ customStyle, onNav }) => {

  return (
    <div className={`custom-cursor ${onNav ? 'on-nav' : ''}`} style={customStyle}></div>
  );
};

export default Cursor;