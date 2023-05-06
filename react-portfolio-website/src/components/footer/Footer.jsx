import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Homeless
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href="#service">Services</a></li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/divisition">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/pete_pattapee">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/petepattapee">
          <AiFillGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Homeless. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer