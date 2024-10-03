import { Link } from "react-router-dom";


export default function NavbarMenu(){

    return(
        <>
        <li>
            <Link to="/">
            Home
            </Link>
          </li>
          <li>
            <Link to="/profile">
            Profile
            </Link>
          </li>
          <li>
            <Link to="/employee">
            Employee
            </Link>
          </li>
          <li>
            <Link to="/addtransaction">
            Book Now!
            </Link>
          </li>
        </>
    )
}