import React from 'react'
import LandingPageImage from "../Assets/landingimage.svg";
import '../Components/LandingPageStyles.scss';
import Navbar from '../Components/Navbar';
import {Link} from  'react-router-dom';

export default function LandingPage() {
  return (
    <div>
        <Navbar/>
        <div className='container page'>
            <div className='info'>
                <h1>Track <span>colleges</span> you applied for!</h1>
                <p>
                    Keep a track of all the colleges you have applied
                    for at a single place.
                </p>
                <Link to = "/register">
                  <button className='btn-reg-log'>Register/ Login</button>
                </Link>
            </div>
            <img className='main-img' src={LandingPageImage} alt='landingpage' />
        </div>
    </div>
  )
}
