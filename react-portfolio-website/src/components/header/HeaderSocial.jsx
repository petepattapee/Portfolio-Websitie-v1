import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://facebook.com/divisition" target="_blank">
        <AiFillFacebook />
      </a>
      <a href="https://github.com/petepattapee" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://www.instagram.com/pete_pattapee/" target="_blank">
        <AiFillInstagram />
      </a>
    </div>
  );
}

export default HeaderSocial