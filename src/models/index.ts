import { currencyType } from "../components/LeftNavbar/LeftNavbar"

export interface ITicketDate {
    time: string
    city: string
    date: string
}

export interface ITicket {
    price: number
    arrive: ITicketDate
    departure: ITicketDate
    transfer: string
    currency: currencyType
}