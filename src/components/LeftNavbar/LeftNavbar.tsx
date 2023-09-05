import {Col} from 'antd'
import { useState, useEffect } from 'react';
import type { CheckboxChangeEvent} from 'antd/es/checkbox'
import type { RadioChangeEvent } from 'antd/es/radio';
import Radiogroup from '../Radiogroup/Radiogroup';
import Checkbox from '../Checkbox/Checkbox';
import { Checkbox as CheckboxANTD } from 'antd'
import { dataTransfer } from '../../data/index';
import { fetchFlights } from '../../store/reducer/ActionCreators';
import { useAppDispatch } from '../../hooks/hooks';


export type currencyType = 'rub' | 'usd' | 'eur'

const LeftNavbar = () => {

    const [currency, setCurrency] = useState<currencyType>('rub')
    const [listTransfer, setListTransfer] = useState<string[]>(dataTransfer)

    

    useEffect(() => {
        fetchFlights(dispatch, {listTransfer, currency})
    }, [listTransfer, currency])

    const dispatch = useAppDispatch()

    const changeCurrency = (e: RadioChangeEvent) => {
        setCurrency(e.target.value)
    }

    const changeCheckbox = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            setListTransfer([...listTransfer, e.target.name])
        } else {
            setListTransfer(listTransfer.filter((el) => {
                if (el !== e.target.name)
                return el
            }))
        }
    }
    const changeCheckboxAll=(e:CheckboxChangeEvent)=>{
        if (e.target.checked) {
            setListTransfer(dataTransfer)
        } else {
            setListTransfer([])
        }
    }

    const clickLabel = (checkbox:string) => {
        setListTransfer([checkbox])
    }

    return (
        <Col span={5}>
            <div className='filter'>
                <div className='filter__currency'>
                    <p className='filter__title'>ВАЛЮТА</p>
                    <Radiogroup currency={currency} changeCurrency={changeCurrency}/>
                </div>
                <div className='filter__currency'>
                    <p className='filter__title'>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
                    <div className='filter__transfer'>
                        <CheckboxANTD onChange={changeCheckboxAll}>Все</CheckboxANTD>
                        { dataTransfer.map((transfer) => {
                            return (
                                <Checkbox 
                                    changeCheckbox={changeCheckbox}
                                    clickLabel={clickLabel}
                                    listTransfer={listTransfer}
                                    transfer={transfer}
                                    key={transfer}
                                />
                            )
                        }) }
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default LeftNavbar;