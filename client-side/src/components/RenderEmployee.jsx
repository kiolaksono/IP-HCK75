import { useEffect, useState } from "react"
import useAxios from "../helpers/useAxios"

export default function RenderEmployee({id}){
    const [employee, setEmployee] = useState([])

    const {tryFetchWizardById} = useAxios()

    const fetchEmployeeById = async ()=>{
        try {
            const response = await tryFetchWizardById(id)
            // console.log(response.data[0].name)
            setEmployee(response.data[0].name)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchEmployeeById()
    },[id])

    // console.log(employee)

    
    return(

        <p>{employee}</p>
    )
}