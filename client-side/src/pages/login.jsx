import { useState } from "react"
import useAxios from "../helpers/useAxios"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import LoginForm from "../components/LoginForm"
import Swal from "sweetalert2"

export default function Login(){

    const [formLogin, setFormLogin] = useState({
        email : "",
        password:""
    }
    )

    let data = {email:formLogin.email, password:formLogin.password}

    const navigation = useNavigate()
  
    const {tryAuth} = useAxios()
    const handleLogin = async (e)=>{
      e.preventDefault()
  
      try {
        const response =  await tryAuth("login",data)
        localStorage.setItem("access_token", response.data.accessToken)
        if(localStorage.getItem("access_token")==="undefined"){
          Swal.fire("Email or password is incorrect")
          localStorage.clear()
          navigation("/")
        }else{
          Swal.fire("Login success")
          navigation("/home")

        }
      } catch (error) {
        // console.log(error)
        Swal.fire(error)
      }
    } 
    

    const handleInputLogin = (e)=>{
        const {name, value} = e.target
        setFormLogin((form)=>({
            ...form,
            [name]:value
        }))
    }

    

    return(
      <>
      
      <LoginForm data={formLogin} handleInputLogin={handleInputLogin} handleLogin={handleLogin}/>
      
      </>
        
    )
}