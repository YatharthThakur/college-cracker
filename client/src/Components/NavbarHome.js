// Navar after login
import React from 'react'
import "../Components/NavbarHomeStyles.scss"
import { FaUserCircle } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";

export default function NavbarHome() {
  const user = localStorage.getItem("user");
  return (
    <div className="navbar">
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          <FaAlignLeft color='#45B6C9' />
        </button>

        <h3 className="logo-text">College Cracker</h3>

        <div className="btn-container">
          <button type="button" className="btn btn-navbar">
            <FaUserCircle />
            {JSON.parse(user).name}
          </button>
        </div>
      </div>
    </div>
  )
}
