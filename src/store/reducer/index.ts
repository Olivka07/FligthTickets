import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ITicket } from '../../models/index'

interface IticketsPayload {
    tickets: ITicket[]
}

interface IticketsInitialState {
    tickets: ITicket[]
}


const initialState: IticketsInitialState = {tickets: []}

export const ticketsSlice = createSlice(
    {
        name: 'tickets',
        initialState,
        reducers: {
            filter: (state, action:PayloadAction<IticketsPayload>) => {
                state.tickets = [...action.payload.tickets]
            }
        }
    }
)

export const {filter} = ticketsSlice.actions
export default ticketsSlice.reducer