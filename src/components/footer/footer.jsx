import React from 'react'
import './footer.css'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='footer'>
      <a href="#" className='footer_logo'>Tusar</a>
      <ul className="parmalink">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><AiOutlineWhatsApp/></a>
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Tusar Kumar Nayak.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer