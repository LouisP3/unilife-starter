import React from 'react'
import "./Header.css"
import logo from "../../assets/logo-img.png"
import {BsHeart  } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
function Header() {
  return (
    <div className='Headercontainer'>
        <a href='/' className='logoimg'><img src={logo} 
        /> UniLife</a>
        <div className='shortlistcontact'>
        <a href='/' className='shortlistimg'><BsHeart/>Shortlist</a>
        <a href='/' className='contactimg'><FiMail/> Contact Us</a>

        </div>
        


    </div>
  )
}

export default Header