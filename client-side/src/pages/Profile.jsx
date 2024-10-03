import { useState, useEffect } from "react";
import useAxios from "../helpers/useAxios";
import Button from "../components/Button";
import TableTransaction from "../components/TableTransaction";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const { tryFetch } = useAxios();
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });

  const params = useParams()

  const transactions = useSelector((state)=> state.transactions.detail)

  const fetchProfile = async () => {
    try {
      const response = await tryFetch("customers/profile");
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchProfile();
  }, []);


  return (
    <div className="w-full flex flex-wrap p-10 bg-slate-300">
      <div className="w-1/3 flex justify-center">
        <div className="card bg-white w-96 h-96 shadow-xl">
          <figure>
            <img src={profile.avatar} alt="avatar" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-center">{profile.fullName}</h2>
          </div>
        </div>
      </div>

      <div className=" w-2/3">
      <TableTransaction />
      </div>
    </div>
  );
}
