import React, { FC } from 'react';
import {Radio} from 'antd'
import {currencyType} from '../LeftNavbar/LeftNavbar'
import type { RadioChangeEvent } from 'antd/es/radio';
import { dataCurrency } from '../../data/index';

interface RadiogroupProps {
    currency: currencyType
    changeCurrency: (e: RadioChangeEvent) => void
}



const Radiogroup: FC<RadiogroupProps> = ({currency, changeCurrency}) => {
    return (
        <Radio.Group size='large' value={currency} onChange={changeCurrency}>
            { dataCurrency.map((cur, index) => {
                return (
                    <Radio.Button key={index} className={currency === cur? 'active' : ''} value={cur}>
                        { cur.toUpperCase() }
                    </Radio.Button>
                )
            }) }
        </Radio.Group>
    );
};

export default Radiogroup;