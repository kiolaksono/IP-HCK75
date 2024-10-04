import { useEffect, useState } from "react";
import useAxios from "../helpers/useAxios";
import Card from "../components/Card";
import Login from "./Login"
import Register from "./Register";
import Swal from "sweetalert2";

export default function Homepublic() {
  const { tryFetch } = useAxios();

  const [vehicles, setVehicles] = useState([]);

  const fetchVehicle = async () => {
    try {
      const { data } = await tryFetch("");
      setVehicles(data);
    } catch (error) {
      // console.log(error);
      Swal.fire(error.response.data.message)
    }
  };

  useEffect(() => {
    fetchVehicle();
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center bg-no-repeat bg-cover bg-center bg-[url('./assets/bgform.jpg')] ">
        <div className="w-10/12 flex justify-center items-center ">
          <div className="bg-white w-4/6 h-4/6 bg-opacity-60  flex justify-center">
            <Login />
            
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-10 p-10 bg-slate-300">
        {vehicles.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </>
  );
}
