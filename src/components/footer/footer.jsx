import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
export const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className='footer_logo'>Shankar</a>
        <ul className='permalinks'>
<li> <a href='#'>Home</a></li>
<li> <a href='#about' >About</a></li>
<li>  <a href='#experience' >Experience</a></li>
<li>   <a href='#portfolio' >Projects</a></li>
<li>  <a href='#contact' >Contact</a></li>
        </ul>
        <div className='footer_socials'>
        <a href='https://www.facebook.com/'><FaFacebookF /></a>
        <a href='https://www.instragam.com/'><FiInstagram /></a>
        </div>
        <div className='footer_copy'>
          <small>&copy; Shankar. All Rights Reserved</small>
        </div>
      </footer>
    </div>
  )
}