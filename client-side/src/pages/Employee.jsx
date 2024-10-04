import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../features/employeeSlice";
import Card from "../components/Card";

export default function Employee() {
  const dispatch = useDispatch();

  const employees = useSelector((state) => state.employees)

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <div className="flex flex-wrap justify-center w-full gap-10 p-10 bg-slate-300">
      {employees.data.map((el) => (
        <Card key={el.id} data={el} />
      ))}
    </div>
  );
}
