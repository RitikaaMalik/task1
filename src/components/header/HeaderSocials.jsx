import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ritikamalik3112" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/RitikaaMalik"><FaGithub/></a>
      <a href="https://dribble.com"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
