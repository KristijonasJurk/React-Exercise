import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('change title')
  const handleTitle = () => {
    if (text === 'change title') {
      setText('random title')
    } else {
      setText('change title')
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" onClick={handleTitle} className='btn'>Change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
