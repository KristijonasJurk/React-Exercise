import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <div>
      <h2>{firstValue}</h2>
      {text || <h2>yas</h2>}
    </div>
  )
};

export default ShortCircuit;
