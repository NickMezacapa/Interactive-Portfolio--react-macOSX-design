import React from 'react';
import DisplayBG from './DisplayBG.png';
import './Bg.css';

const Bg = () => {
  return (
    <div className='Bg-Wrapper'>
        <img src={DisplayBG} alt="background for macOS display" id='Bg-Wrapper_img' />
    </div>
  )
}

export default Bg