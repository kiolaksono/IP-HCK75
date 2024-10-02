import { useState } from "react"
import useAxios from "../helpers/useAxios"
import RegisterForm from "../components/RegisterForm"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register(){

  const [formRegister, setFormRegister] = useState({
    fullName: "",
    email:"",
    password: "",
    avatar: ""
  })

  const { tryPost } = useAxios();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await tryPost("register", formRegister);
      if(response.status === 201) Swal.fire("New Account has created")
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  
  const handleInputRegister = async (e)=>{
    const {name, value} = e.target
    setFormRegister((form)=>({
      ...form,
      [name]:value
      
    }))
  }
  
  return(
        <>
        <RegisterForm data={formRegister} handleInputRegister={handleInputRegister} handleSubmit={handleSubmit}/>
        
        </>
        
    )
}