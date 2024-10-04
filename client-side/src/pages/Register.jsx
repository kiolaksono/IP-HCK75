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
      console.log(response)
      Swal.fire("New Account has created")
      navigate("/");
    } catch (error) {
      // console.log(error);
      Swal.fire(error)
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
    <div className="w-full h-screen flex flex-wrap justify-center bg-no-repeat bg-cover bg-center bg-[url('./assets/bgform.jpg')] ">
    <div className="w-10/12 flex justify-center items-center ">
      <div className="bg-white w-4/6 h-4/6 bg-opacity-60  flex justify-center">
    
    <RegisterForm data={formRegister} handleInputRegister={handleInputRegister} handleSubmit={handleSubmit}/>
        
      </div>
    </div>
  </div>    

        
        
        
    )
}