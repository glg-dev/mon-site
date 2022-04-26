import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Stars = () => {
  
  let [stars, setStars] = useState([])
  
  function makeAStar() {
    const size = Math.random() * 2 + 'px'
    const colors = [ '#8CBFDB', '#303e8c', '#4369d9', '#1f1f26', '#9ad2df', '#333259', '#302f40' ];
    const index = Math.floor(Math.random() * colors.length)
    
    const Star = styled.span`
    position: absolute;
    border-radius: 50%;
    height: ${size};
    width: ${size};
    background: ${colors[index]};
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    ` 

    let star = <Star key={Math.random()}/>
    setStars([...stars, star])

    const timeout = setTimeout(() => {
      setStars((oldStars) => oldStars.filter(oldstar => oldstar !== star))
    }, 16000)
    return timeout
  }
    
    useEffect(() => {
      const interval = setInterval(() => {
      makeAStar()
    }, 5);
  return () => clearInterval(interval)
  }, [stars])

  
  // console.log(stars.length);
  return (
    <div className='stars'>
      {stars}
    </div>
  );
};

export default Stars;