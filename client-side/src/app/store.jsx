import {configureStore} from '@reduxjs/toolkit'
import employeeReducer from '../features/employeeSlice'
import transactionReducer from '../features/transactionSlice'
import { transactionSlice } from '../features/transactionSlice'
import vehicleReducer from '../features/vehicleSlice'

export const store = configureStore({
    reducer:{
        employees : employeeReducer,
        transactions : transactionReducer,
        vehicles : vehicleReducer
    }
})