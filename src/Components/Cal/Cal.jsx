import React from 'react';
import { monthName, day } from '../DT/DT';
import './Cal.css';

const Cal = () => {
  return (
    <div className='Cal-Wrapper'>
        <div className='Cal-month'>
            {monthName}
        </div>
        <div className='Cal-day'>
            {day}
        </div>
    </div>
  )
}

export default Cal