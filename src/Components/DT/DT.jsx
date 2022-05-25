import React from 'react';
import './DT.css';

const DT = () => {
    const theDate = new Date();
    const day = theDate.getDate();
    const month = theDate.getMonth() + 1;
    const hours = theDate.getHours();
    const minutes = theDate.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    // get the day of the week.
    const dayOfWeek = theDate.getDay();
    let dayOfWeekString = '';
    switch (dayOfWeek) {
        case 0:
            dayOfWeekString = 'Sunday';
            break;
        case 1:
            dayOfWeekString = 'Monday';
            break;
        case 2:
            dayOfWeekString = 'Tuesday';
            break;
        case 3:
            dayOfWeekString = 'Wednesday';
            break;
        case 4:
            dayOfWeekString = 'Thursday';
            break;
        case 5:
            dayOfWeekString = 'Friday';
            break;
        case 6:
            dayOfWeekString = 'Saturday';
            break;
        default:
            dayOfWeekString = 'Unknown';
    }
    // get the first three characters of dayOfWeekString.
    const currentDay = dayOfWeekString.substring(0, 3);

    // Get the corresponding month that matches the "month" variable.
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[month - 1];

    // Make sure hours are in 12 hour format.
    let hours12 = hours;
    if (hours > 12) {
        hours12 = hours - 12;
    }
    // Set the time format.
    const currentTime = `${hours12}:${minutes} ${ampm.toUpperCase()}`;

  return (
    <div className="Date-Wrapper">
        <div className="Date-month">
        {currentDay}  {monthName}  {day}
        </div>
        <div className="Date-time">
            {currentTime}
        </div>
    </div>
  )
}

export default DT;
export { monthName, day } from './DT.jsx';
