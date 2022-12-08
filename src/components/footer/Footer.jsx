import React from 'react'
import './Footer.css'

import { footer } from '../../data'

const Footer = () => {
  const { logo, copyrightText } = footer
  return (
    <div className='footer'>
      <a href='/'>
        <img src={logo} alt='' />
      </a>
      <p>{copyrightText}</p>
    </div>
  )
}

export default Footer
