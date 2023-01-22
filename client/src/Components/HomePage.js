import React from 'react'
import NavbarHome from "./NavbarHome.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import "./HomePageStyles.scss";

export default function HomePage() {
  return (
    <div>
      <NavbarHome/>
      <div className='homepage-content'>
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  )
}
