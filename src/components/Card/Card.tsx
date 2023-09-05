import React, {FC} from 'react';
import {Col} from 'antd'
import Button from '../Button/Button';
import CardDate from '../CardDate/CardDate';
import CardPlane from '../CardPlane/CardPlane';
import { ITicket } from '../../models/index';


interface CardProps {
    ticket: ITicket
}
const Card: FC<CardProps> = ({ticket}) => {
    return (
        <div className='card'>
            <div className='card__left'>
                <div className='card__logo'>
                    <img className='card__image' src='./assets/TurkishAirlinesLogo.jpg' alt='TurkishAirlinesLogo'/>
                </div>
                <div className='card__button'>
                    <Button currency={ticket.currency} price={ticket.price}/>
                </div>
            </div>
            <div className='card__right'>
                <CardDate city={ticket.arrive.city} date={ticket.arrive.date} time={ticket.arrive.time}/>
                <CardPlane transfer={ticket.transfer.toUpperCase()}/>
                <CardDate city={ticket.departure.city} date={ticket.departure.date} time={ticket.departure.time}/>
            </div>
        </div>
    );
};

export default Card;