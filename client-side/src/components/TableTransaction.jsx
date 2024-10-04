
import { useEffect, useState } from "react";
import formatDate from "../helpers/formatDate";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction, fetchTransaction, fetchUpdateStatusTransaction } from "../features/transactionSlice";
import { useParams } from "react-router-dom";
import RenderEmployee from "./RenderEmployee";
import Swal from "sweetalert2";

export default function TableTransaction({data}) {
  
    const dispatch = useDispatch()
    const params = useParams()
    const transactions = useSelector((state)=> state.transactions)
        
    useEffect(() => {
        dispatch(fetchTransaction());
    }, []);

    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          // Perform the delete action here
          dispatch(deleteTransaction(id))
        }
      });
    };

  return (
    <>
      <div className="overflow-x-auto px-10 flex">
        <table className="table table-zebra">

          <thead>
            <tr>
              <th>No</th>
              <th>Vehicle</th>
              <th>Employee</th>
              <th>Booking Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            {transactions.data.map((el, i) => (
              <tr key={el.id}>
                <td>{i+1}</td>
                <td>{el.Vehicle.name}</td>

                <td><RenderEmployee id={el.EmployeeId}/></td>
                <td>{formatDate(el.createdAt)}</td>
                <td>
                  <div className=" w-1/2 flex flex-nowrap justify-between text-center items-center w-full flex justify-between">
                  {el.status === "Paid" ? el.status : <Button onClick={() => dispatch(fetchUpdateStatusTransaction(el.id))} name="Pay" />}
                    <Button onClick={()=>handleDelete(el.id)} name="Delete" />

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   </>
  );
}
