import { createSlice } from "@reduxjs/toolkit";
import useAxios from "../helpers/useAxios";
import axios from "axios";

export const employeeSlice = createSlice({
    name: 'employee',
    initialState:{
        data:[],
        detail:{}
    },
    reducers:{
        setEmployees : (state, action) =>{
            state.data = action.payload
        },
        setEmployee : (state, action) => {
            state.detail = action.payload
        }

    }
})

const {tryFetchWizard} = useAxios()

export const {setEmployee, setEmployees} = employeeSlice.actions


export const fetchEmployees = () =>{
    return async (dispatch) =>{
        const response = await tryFetchWizard("");
        dispatch(setEmployees(response.data))
    }
}

export const fetchEmployeeById = (employeeId)=>{
    return async (dispatch) => {
        const {data} = await axios.get(`https://hp-api.herokuapp.com/api/character/${employeeId}`)
        console.log(data)
        dispatch(setEmployee(data))
    }
}

export default employeeSlice.reducer