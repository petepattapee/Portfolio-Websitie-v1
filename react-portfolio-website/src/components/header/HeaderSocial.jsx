import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://facebook.com" target="_blank"><AiFillFacebook/></a>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com/" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocial