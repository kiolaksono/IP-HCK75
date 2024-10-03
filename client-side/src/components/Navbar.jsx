import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Link } from 'react-router-dom'
import NavbarMenu from "./NavbarMenu";


export default function Navbar() {

  const navigate = useNavigate()


  function handleLogout(){
    localStorage.clear()
    
    navigate("/")
  
  }

  return (
    <div className="navbar bg-base-100 sticky top-0 z-[100]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavbarMenu />
          </ul>
        </div>
        <h1 className="btn btn-ghost text-xl"><Link to="/">Magic Steam App</Link></h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavbarMenu />
        </ul>
      </div>
      <div className="navbar-end">
        <Button onClick={handleLogout} name="Logout"/>
      </div>
    </div>
  );
}
