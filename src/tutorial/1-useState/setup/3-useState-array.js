import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const { people, setPeople } = React.useState(data)

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h2>{name}</h2>
            <button onClick={removeName(id)}>remove</button>
          </div>
        );
      })}


    </>
  )
};

export default UseStateArray;
