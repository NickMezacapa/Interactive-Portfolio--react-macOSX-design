import React from 'react';
/* import { monthName, day } from '../DT/DT'; */
import './Cal.css';

const Cal = () => {
  const theDate = new Date();
  const day = theDate.getDate();
  const month = theDate.getMonth() + 1;

  // Get the corresponding month that matches the "month" variable.
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[month - 1];

  console.log(monthName);
  return (
    <div className='Cal-Wrapper'>
        <div className='Cal-month'>
            {monthName.toUpperCase()}
        </div>
        <div className='Cal-day'>
            {day}
        </div>
    </div>
  )
}

export default Cal