import React, { useState, useEffect } from 'react';



const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', changeSize);
    return () => {
      window.removeEventListener('resize', changeSize);
    }
  })
  return <>
    <h2>Window</h2>
    <h3>{size}</h3>
  </>;
};

export default UseEffectCleanup;
