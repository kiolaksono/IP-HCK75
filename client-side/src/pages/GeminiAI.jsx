import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../features/employeeSlice";
import Swal from "sweetalert2";
import { baseURL } from "../helpers/http-client";

export default function GeminiAI() {
  const dispatch = useDispatch();

  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const [employeeName, setEmployeeName] = useState("");
  const [gemini, setGemini] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setEmployeeName(value);
    try {
      const res = await baseURL.post("employees", { employeeName: value });

      setGemini(res.data);
    } catch (error) {

      Swal.fire(error.response.data.message);
    }
  };

  return (
    <>
    <div className="flex flex-wrap justify-center">
      <select
        className="select select-success w-full max-w-xs"
        value={employeeName}
        onChange={handleChange}
      >
        <option disabled selected>
          Pick your favorite employee
        </option>
        {employees.data.map((el) => {
          return (
            <option value={el.key} key={el.id}>
              {el.name}
            </option>
          );
        })}
      </select>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl">
       
        <div className="card-body">
          <h2 className="card-title">{employeeName}</h2>
          <p>{gemini}</p>
        </div>
      </div>
    </>
  );
}
