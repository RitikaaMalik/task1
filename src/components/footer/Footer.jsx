import React from 'react'
import "./footer.css";
import {FaFacebook} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {IoLogoTwitter} from 'react-icons/io';
const Footer = () => {
  return (
    <footer>
       <a href="#" className='footer__logo'>RITIKA MALLIK</a>
        <ul class='permalinks'>
           <li><a href="#">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#experience">Experience</a></li>
           <li><a href="#services">Services</a></li>
           <li><a href="#portfolio">Portfolio</a></li>
           <li><a href="#testimonials">Testimonials</a></li>
           <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com"><BsInstagram/></a>
          <a href="https://instagram.com"><FaFacebook/></a>
          <a href="https://twitter.com"><IoLogoTwitter/></a>
        </div>

        <div className="footer__copyrights">
          <small>&copy; RITIKA. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
