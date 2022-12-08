import React, { useState } from 'react'
import './Header.css'

import { header } from '../../data'
import { nav } from '../../data'

import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'

const Header = () => {
  const { logo, btnLoginText, btnSignupText } = header
  const [showNav, setShowNav] = useState(false)
  return (
    <div className='header'>
      <a href='/'>
        <img src={logo} alt='logo' className='logo' />
      </a>
      <nav>
        <ul className={`${showNav ? 'active' : 'none'}`}>
          {nav.map((element, index) => {
            return (
              <li key={index}>
                <a href={element.href}>{element.name}</a>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className='buttons'>
        <button className='log'>{btnLoginText}</button>
        <button className='sign'>{btnSignupText}</button>
      </div>
      <div
        className='menu'
        onClick={() => {
          setShowNav(!showNav)
        }}
      >
        {showNav ? <RiCloseFill /> : <RiMenu4Fill />}
      </div>
    </div>
  )
}

export default Header
