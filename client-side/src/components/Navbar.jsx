import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Link } from 'react-router-dom'
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
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
        </ul>
      </div>
      <div className="navbar-end">
        <Button onClick={handleLogout} name="Logout"/>
      </div>
    </div>
  );
}
