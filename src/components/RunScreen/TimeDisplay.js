import React from 'react';

const TimeDisplay = ({ time }) => {

    const date = new Date(time * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    return (
        <p>
            <b>Time: </b>
            {hours > 0 && <span>{hours}h </span>}
            {minutes > 0 && <span>{minutes}m </span>}
            <span>{seconds}s </span>
        </p>
    );

}

export default TimeDisplay;