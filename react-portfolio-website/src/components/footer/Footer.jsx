import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Homeless</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://twitter.com"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Homeless. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer