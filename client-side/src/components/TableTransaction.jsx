
import { useEffect, useState } from "react";
import formatDate from "../helpers/formatDate";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction, fetchTransaction, fetchUpdateStatusTransaction } from "../features/transactionSlice";
import { useParams } from "react-router-dom";
import RenderEmployee from "./RenderEmployee";

export default function TableTransaction({data}) {
  
    const dispatch = useDispatch()
    const params = useParams()
    const transactions = useSelector((state)=> state.transactions)
        
    useEffect(() => {
        dispatch(fetchTransaction());
    }, []);

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
                  {el.status === "Paid" ? el.status : <Button onClick={() => dispatch(fetchUpdateStatusTransaction(el.id))} name="Pay" />}
                    <Button onClick={()=> dispatch(deleteTransaction(el.id))} name="Delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   </>
  );
}
