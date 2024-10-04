import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../features/employeeSlice";
import { fetchVehicles } from "../features/vehicleSlice";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../helpers/http-client";
import Swal from "sweetalert2";

export default function AddForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const employees = useSelector((state) => state.employees);
  const vehicles = useSelector((state) => state.vehicles)

  const [formTransaction, setTransaction] = useState({
    VehicleId:0,
    EmployeeId:"",
    price:25000,
    status:"Book"
  })

  useEffect(() => {
    dispatch(fetchEmployees());
    
  }, []);

  useEffect(()=>{
    dispatch(fetchVehicles())
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      console.log(localStorage.getItem("access_token"))
      // const response = await tryPost("transactions", formTransaction)
      const response = await baseURL.post("transactions", formTransaction, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        }
      })
      if(response.status === 201) Swal.fire("Queue has created")
      navigate("/profile")
    } catch (error) {
      if(error.name) Swal.fire(error.response.data.message)
      Swal.fire(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Add New Queue
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Vehicle Brand
          </label>
          <div className="mt-2">
            <select
              value={vehicles.name}
              onChange={handleChange}
              className="select select-bordered block w-full flex bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              id="VehicleId"
              name="VehicleId"
            >
              <option className="w-full" value="">
                Select Category
              </option>
              {vehicles.data.map((el) => {
                return (
                  <option className="w-full" value={el.id} key={el.id}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Employee Name
          </label>
          <div className="mt-2">
            <select
              value={employees.name}
              onChange={handleChange}
              className="select select-bordered block w-full flex bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              id="EmployeeId"
              name="EmployeeId"
            >
              <option className="w-full" value="">
                Select Category
              </option>
              {employees.data.map((el) => {
                return (
                  <option className="w-full" value={el.id} key={el.id}>
                     {el.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        
        <div>
          <Button  name="Save" />
        </div>
        
      </div>
    </div>

    </form>
  );
}
