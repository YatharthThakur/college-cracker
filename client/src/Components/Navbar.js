import React from 'react'
import logo from "../Assets/logo.png";
import "../Components/NavbarStyles.scss"
import {Link} from  'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to = "/">
          <img src={logo} alt='logo'/>
        </Link>
      </nav>
    </div>
  )
}
