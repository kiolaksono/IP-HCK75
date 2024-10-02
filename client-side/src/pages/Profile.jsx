import { useState, useEffect } from "react";
import useAxios from "../helpers/useAxios";
import formatDate from "../helpers/formatDate";
import Button from "../components/Button";

export default function Profile() {
  const { tryFetch } = useAxios();
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });

  const [transactions, setTransactions] = useState([]);

  const fetchProfile = async () => {
    try {
      const response = await tryFetch("customers/profile");
      // console.log(response)
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTransaction = async () => {
    try {
      const response = await tryFetch("transactions");
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div className="w-full flex flex-wrap p-10">
      <div className="w-1/3">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={profile.avatar} alt="avatar" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{profile.fullName}</h2>
          </div>
        </div>
      </div>

      <div className="w-2/3">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Vehicle</th>
              <th>Booking Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {transactions.map((el,i)=>(
            <tr>
              <td>{i}</td>
              <td>{el.Vehicle.name}</td>
              <td>{formatDate(el.createdAt)}</td>
              <td>{el.status==="paid" ?  el.status : <Button name="Pay"/>}</td>
            </tr>

            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
