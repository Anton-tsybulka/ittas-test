import React from 'react';
import { maxMinSort } from '../helpers';

const MaxMinShow = ({ cityWeather }) => {
    
    const { maxT, maxC, minT, minC } = maxMinSort(cityWeather);

    return (
        <div style={{display: 'flex', width: '340px', padding: '1% 1%'}}>
            <p style={{width: '150px', margin: 'auto', textAlign: 'center'}}>Макс.:{` ${maxC} ${maxT}`}</p>
            <p style={{width: '150px', margin: 'auto', textAlign: 'center'}}>Мин.:{` ${minC} ${minT}`}</p>
        </div>
    )
}

export default MaxMinShow;