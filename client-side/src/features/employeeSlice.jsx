import { createSlice } from "@reduxjs/toolkit";
import useAxios from "../helpers/useAxios";

export const employeeSlice = createSlice({
    name: 'employee',
    initialState:{
        data:[],
        detail:{}
    },
    reducers:{
        setEmployees : (state, action) =>{
            console.log(action, "STATES") //{payload:[], type:""}
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
        console.log(response.data)
        dispatch(setEmployees(response.data))
    }
}

export const fetchEmployeeById = (employeeId)=>{
    return async (dispatch) => {
        const {data} = await axios.get(`https://hp-api.herokuapp.com/api/character/${employeeId}`)
        dispatch(setEmployee(data))
    }
}

export default employeeSlice.reducer