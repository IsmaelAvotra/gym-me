import React from 'react'
import './Mission.css'

import { about } from '../../data'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const Mission = () => {
  const { icon, title, subtitle1, subtitle2, link } = about
  return (
    <div className='mission' data-aos='fade-up' data-aos-delay='100'>
      <img src={icon} className='user' />
      <h2>
        {title}
        <span>.</span>
      </h2>
      <p className='sub1' data-aos='fade-up' data-aos-delay='200'>
        {subtitle1}
      </p>
      <p className='sub2' data-aos='fade-up' data-aos-delay='300'>
        {subtitle2}
      </p>
      <div className='link' data-aos='fade-up' data-aos-delay='400'>
        <a href='/'>
          {link}
          <IoIosArrowDroprightCircle />
        </a>
      </div>
    </div>
  )
}

export default Mission
