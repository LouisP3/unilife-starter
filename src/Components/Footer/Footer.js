import React from 'react'
import "./Footer.css"
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footertop'>
            <div className='left'>
                <h3>Keep in touch</h3>
                <p className='textleft'>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
                <input className="input" type={'email'} placeholder="Your email"/>

            </div>
            <div className='right'>
                <h3>Let's Socialize</h3>
                <a href='/' className='facebook'><CiFacebook/>Facebook</a>
                <a href='/' className='twitter'><CiTwitter/>Twitter</a>
                <a href='/' className='twitter'><CiInstagram/>Instagram</a>


            </div>
        </div>
        <div className='footerbottom'>
            <div className='footerleft'>
                <p>Terms & Conditions</p>
                <p>Privacy & Cookie Policies</p>
            </div>
            <div className='footerright'>
                <p>2022</p>
                <p>&copy;UniLife</p>
            </div>
        </div>
     </div>
  )
}

export default Footer