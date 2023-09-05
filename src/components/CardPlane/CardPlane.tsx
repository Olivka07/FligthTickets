import React, { FC } from 'react';

interface CardPlaneProps {
    transfer: string
}
const CardPlane:FC<CardPlaneProps> = ({transfer}) => {
    return (
        <div className='card__plane'>
            <div>
                <div className='card__counttransfers'>{transfer.toUpperCase()}</div>
                <div className='card__imageplanewrap'>
                    <img className='card__imageplane' alt='plane' src='./assets/plane2.jpg'/>
                </div>
            </div>
        </div>
    );
};

export default CardPlane;