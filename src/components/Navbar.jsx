import React from 'react'
import Navicon from '../images/Navicon.jpg'

export default function Navbar() {
  return (
    <nav className="nav--container">
      <img
        className="nav--logo"
        src={Navicon}
      ></img>
      <h4 className='nav--text'>ConferenceNavigator</h4>
    </nav>
  );
}
