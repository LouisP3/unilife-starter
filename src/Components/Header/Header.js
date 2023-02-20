import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div className='Headercontainer'>
        <a href='/' className='logoimg'><img src="assets.logo-img.jpg" 
        /> UniLife</a>
        <div className='shortlistcontact'>
        <a href='/' className='shortlistimg'><img src="assets.shortlistheart.jpg" 
        /> Shortlist</a>
        <a href='/' className='contactimg'><img src="assets.mailimage.jpg" 
        /> Contact Us</a>

        </div>
        


    </div>
  )
}

export default Header