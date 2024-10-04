import { createSlice } from "@reduxjs/toolkit";
import useAxios from "../helpers/useAxios";

export const transactionSlice = createSlice({
    name : 'transaction',
    initialState:{
        data:[],
        detail:{}
    },
    reducers:{
        setTransactions : (state, action) =>{
            state.data = action.payload
            // console.log(action)
        },
        setTransaction : (state, action) =>{
            state.detail = action.payload
        }
    }
})

const {tryFetch, tryUpdate, tryDelete} = useAxios()

export const {setTransaction, setTransactions} = transactionSlice.actions

export const fetchTransaction = () =>{
    return async (dispatch) =>{
        const response = await tryFetch("/transactions");
        dispatch(setTransactions(response.data))
    }
}

export const fetchUpdateStatusTransaction = (id)=>{

    return async (dispatch) => {                
        await tryUpdate(`/transactions/${id}`, { status: "Paid"})
        dispatch(fetchTransaction())
    }
}

export const deleteTransaction = (id)=>{
    return async (dispatch)=>{
        await tryDelete(`/transactions/${id}`)
        dispatch(fetchTransaction())
    }
}

export default transactionSlice.reducer