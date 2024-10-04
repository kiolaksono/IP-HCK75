import { createSlice } from "@reduxjs/toolkit";
import useAxios from "../helpers/useAxios";

export const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState:{
        data:[],
        detail:{}
    },
    reducers:{
        setVehicles : (state, action) =>{
            state.data = action.payload

        },
        setVehicle : (state, action) => {
            state.detail = action.payload
        }

    }
})

const {tryFetch} = useAxios()

export const {setVehicles, setVehicle} = vehicleSlice.actions


export const fetchVehicles = () =>{
    return async (dispatch) =>{
        const response = await tryFetch("vehicles");
        dispatch(setVehicles(response.data))
    }
}

// export const fetchVehicleById = (employeeId)=>{
//     return async (dispatch) => {
//         const {data} = await tryFetch(`https://hp-api.herokuapp.com/api/character/${employeeId}`)
//         dispatch(setVehicle(data))
//     }
// }

export default vehicleSlice.reducer