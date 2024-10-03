import { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../features/vehicleSlice";

export default function Homepage() {
  const dispatch = useDispatch()

  const vehicles = useSelector((state)=> state.vehicles)
  
  useEffect(() => {
    dispatch(fetchVehicles())
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center w-full gap-10 p-10 bg-slate-300">
        {vehicles.data.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </>
  );
}
