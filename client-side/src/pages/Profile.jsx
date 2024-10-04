import { useState, useEffect } from "react";
import useAxios from "../helpers/useAxios";
import Button from "../components/Button";
import TableTransaction from "../components/TableTransaction";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

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
      // console.log(error);
      Swal.fire(error.response.data.message)
    }
  };


  useEffect(() => {
    fetchProfile();
  }, []);


  return (
    <div className="w-full flex flex-col md:flex-row flex-wrap p-4 md:p-10 bg-white">
    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
      <div className="card bg-white w-full h-96 max-w-sm shadow-xl">
        <figure className="px-4 pt-4">
          <img 
            src={profile.avatar} 
            alt="avatar" 
            className="rounded-xl w-full h-auto object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl md:text-2xl">{profile.fullName}</h2>
        </div>
      </div>
    </div>

    <div className="w-full md:w-2/3">
      <TableTransaction />
    </div>
  </div>
  );
}
