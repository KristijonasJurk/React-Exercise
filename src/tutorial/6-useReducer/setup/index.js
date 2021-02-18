import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState('')
  const [showModal, setShowModal] = useState(false)
  return <>
    {showModal && <Modal />}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input
          type="text"
          value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type='submit'>add</button>
    </form>
  </>;
};

export default Index;
