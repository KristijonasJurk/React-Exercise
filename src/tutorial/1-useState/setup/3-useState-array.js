import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeName = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h2>{name}</h2>
            <button onClick={() => removeName(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        delete all
      </button>
    </>
  );
};

export default UseStateArray;
