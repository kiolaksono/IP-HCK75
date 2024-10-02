import { useEffect, useState } from "react";
import useAxios from "../helpers/useAxios";
import Card from "../components/Card";

export default function Homepage() {
  const { tryFetch } = useAxios();

  const [vehicles, setVehicles] = useState([]);

  const fetchVehicle = async () => {
    try {
      const { data } = await tryFetch("");
      setVehicles(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVehicle();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center w-full gap-10 p-10 bg-slate-300">
        {vehicles.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </>
  );
}
