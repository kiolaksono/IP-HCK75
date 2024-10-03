import axios from 'axios'
import { baseURL } from './http-client'
import Swal from 'sweetalert2'

function useAxios(){

    const tryAuth = async (url, data)=>{
        try {

            const response = await baseURL.post(url, data)
            return response
        } catch (error) {
            console.log(error)
            // Swal.fire(error.response.data.error)
        }
    }

    const tryFetchWizard = async ()=>{
        try {
            const response = await axios.get("https://hp-api.herokuapp.com/api/characters")
            return response
        } catch (error) {
            console.log(error)
        }
    }

    const tryFetchWizardById = async (id)=>{
        try {
            const response = await axios.get(`https://hp-api.herokuapp.com/api/character/${id}`)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    const tryFetch = async (url) => {
        try {
            const response  = await baseURL.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                  },
            })

            return response
            
        } catch (error) {
            console.log(error)
            Swal.fire(error.response.data.error)
        }
    }

    const tryPost = async (url, data) =>{
        try {
            const response = await baseURL.post(url, data,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            })
            console.log(response,"<<<<<")
            console.log(localStorage.getItem("access_token"))
            // return response
        } catch (error) {
            console.log(error)
            // Swal.fire(error.response.data.error)
        }
    }

    const tryUpdate = async (url, data) =>{
        try {            
            const response = await baseURL.put(url,data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                  }
            })

            console.log(response)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    const tryDelete = async (url)=>{
        try{
            const response = await baseURL.delete(url,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                  },
            })
            return response
        }catch(error){
            console.log(error)
            // Swal.fire(error.response.data.error)
        }
    }

    return {tryFetch, tryFetchWizard, tryFetchWizardById, tryAuth, tryDelete, tryPost, tryUpdate}

}

export default useAxios