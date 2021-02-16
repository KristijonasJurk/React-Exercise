import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  )
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const changeSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', changeSize)
    return () => {
      window.removeEventListener('resize', changeSize)
    }
  }, [])
  return (
    <div style={{ marginTop: '20px' }}>
      <p>window size {size} px</p>
    </div>
  )
}

export default ShowHide;
