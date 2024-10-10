import React from 'react'
import './contact.css';
import logo from '../assets/photo.jpeg';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-left">
        <h1>Lets' Talk</h1>
        <p>I am Ready Kick Start Your Project</p>
        <div className="contact-detail">
        <a href="mailto:veerapareddydinesh@gmail.com"><FaFacebook className='icons' size={25}  /></a>
        <a target="_" href="https://www.instagram.com/dinesh_reddy_.24/"><RiInstagramFill className='icons' size={25} /></a>
        <a target="_" href="https://www.linkedin.com/in/dinesh-veerapareddy/"><FaLinkedin className='icons' size={25} /></a>
        <a target="_" href="tel:8374330906"><IoLogoWhatsapp className='icons' size={25} /></a>
        <a target="_" href="https://x.com/vdinesh2222"><FaTwitter className='icons' size={25} /></a>     
            
        </div>
        </div>
      <div className="contact-right">
        <h1>Contact me</h1>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='name'/>
        <label htmlFor="">email</label>
        <input type="text" placeholder='email' />
        <label htmlFor="">Description</label>
        <textarea placeholder='Description' />
        <button>SUBMIT</button>
      </div>

    </div>
  )
}

export default Contact