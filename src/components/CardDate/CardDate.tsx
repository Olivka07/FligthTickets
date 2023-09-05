import React, { FC } from 'react';

interface CardDateProps {
    time: string
    city: string
    date: string
}
const CardDate: FC<CardDateProps> = ({time, city, date}) => {
    return (
        <div className='card__date'>
            <div className='card__time'>{time}</div>
            <div className='card__city'>{city}</div>
            <div className='card__date-date'>{date}</div>
        </div>
    );
};

export default CardDate;