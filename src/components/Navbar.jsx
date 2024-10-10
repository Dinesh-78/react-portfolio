import React from 'react'
import logo from '../assets/photo.jpeg'
import './Navbar.css'
const Navbar =() => {
  return (
    <div className='navbar'>
        <h1>VEERAPAREDDY DINESH</h1>
        <p className='tag'>Web Designer</p>
        <ul className='nav-menu'>
         <li>Home</li>
         <li>About Me</li>
         <li>Services</li>
         <li>Projects</li>
         <li>Contact</li>
        </ul>
        <div className='connect'> <a target='_' href="https://www.linkedin.com/in/dinesh-veerapareddy/"> Connect with Me</a></div>
        </div>
  )
}

export default Navbar