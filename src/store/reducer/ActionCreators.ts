import { currencyType } from "../../components/LeftNavbar/LeftNavbar";
import { AppDispatch } from "..";
import axios from "axios";
import { ITicket } from "../../models/index";
import { filter } from "../reducer/index";

interface IFilter {
    listTransfer: string[]
    currency: currencyType
}
export const fetchFlights = async(dispatch: AppDispatch, {listTransfer, currency}: IFilter) => {
    try {
        const mokTickets = await axios.get<ITicket[]>('./mokTickets/tickets.json')
        let candidatesTickets = mokTickets.data.filter((el) => {
            if (listTransfer.includes(el.transfer)) {
                return el
            }
        })
        candidatesTickets = candidatesTickets.map((el) => {
            if (currency === 'rub') {
                return {
                    ...el,
                    currency: currency
                }
            } else if (currency === 'eur') {
                return {
                    ...el,
                    price: Number((el.price/104.42).toFixed(2)),
                    currency: currency
                }
            } else {
                return {
                    ...el,
                    price: Number((el.price/96.62).toFixed(2)),
                    currency: currency
                }
            }
        })
        dispatch(filter({tickets: candidatesTickets}))
    } catch (e) {
        console.log((e as Error).message)
    }
}