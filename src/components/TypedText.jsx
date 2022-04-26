import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = ({ string }) => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: string,
      typeSpeed: 42,
      startDelay: 2500,
      backSpeed: 60,
      backDelay: 1500,
      smartBackspace: true, // this is a default
      loop: false,
      showCursos: false,
      cursorChar: ''
    }

    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    }
  }, []);
  


  return (
    <div className='wrap'>
      <div className="type-wrap">
        <span ref={el}></span>
      </div>
    </div>
  );
};

export default TypedText;