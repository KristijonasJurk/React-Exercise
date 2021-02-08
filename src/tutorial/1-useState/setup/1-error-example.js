import React from 'react';

const ErrorExample = () => {
  let title = 'helou';
  const changeTitle = () => {
    title = 'goodbyeee';
    console.log(title);
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={changeTitle}>Change title</button>
    </React.Fragment>
  )
};

export default ErrorExample;
