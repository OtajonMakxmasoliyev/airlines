import React from 'react'
import "./navbar.scss"
import Logo from "../../images/logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/home"}>Help</Link>
        </li>
        <li>
          <Link to={"/home"}>Log in</Link>
        </li>
        <li>
          <Link to={"/home"}>Sign up</Link>

        </li>
      </ul>
    </div>
  )
}

export default Navbar