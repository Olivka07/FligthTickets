import React, { FC } from 'react';
import { currencyType } from '../LeftNavbar/LeftNavbar';

interface ButtonProps {
    price: number
    currency: currencyType
}

const Button: FC<ButtonProps> = ({price, currency}) => {
    return (
        <button className='card__btn'>
            Купить<br/> за {price}{currency==='rub' ? '₽': currency === 'usd'? '$': '€'}
        </button>
    );
};

export default Button;