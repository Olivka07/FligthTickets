import React, { FC, useState } from 'react';
import {Checkbox as CheckboxANTD} from 'antd'
import type { CheckboxChangeEvent} from 'antd/es/checkbox'
import { dataTransfer } from '../../data/index';

interface CheckboxProps {
    listTransfer: string[]
    changeCheckbox: (e: CheckboxChangeEvent) => void
    transfer: string
    clickLabel: (checkbox:string) => void
}


const Checkbox:FC<CheckboxProps> = ({changeCheckbox, clickLabel,listTransfer, transfer}) => {

    const [hoverCheckBox, setHoverCheckBox] = useState<string>(null)

    const focusDiv = (e: React.MouseEvent) => {
        setHoverCheckBox(dataTransfer.find((el) => {
            if ((e.target as HTMLSpanElement).innerHTML.includes(el)) {
            return el
        }}))
    }

    const leaveFocus = (e: React.MouseEvent) => {
        setHoverCheckBox('')
    }

    return (
        <CheckboxANTD
            onMouseLeave={leaveFocus} 
            onMouseEnter={focusDiv} 
            checked={listTransfer.find((el) => el === transfer) ? true : false} name={transfer} 
            onChange={changeCheckbox}
        >
            {transfer}
            {hoverCheckBox === transfer && <label onClick={() => clickLabel(transfer)} className="helper-hover">ТОЛЬКО</label>}
        </CheckboxANTD>
    );
};

export default Checkbox;