import React from 'react'
import './Banner.css'
import { banners } from '../../data'

const banner = () => {
  const { titlePart1, titlePart2, subtitle, textBtn } = banners
  return (
    <div className='banner'>
      <div className='left'>
        <h1 className='title1' data-aos='fade-down' data-aos-delay='500'>
          {titlePart1}
        </h1>
        <h1 className='title2' data-aos='fade-down' data-aos-delay='500'>
          {titlePart2}
        </h1>
        <p>{subtitle}</p>
        <button>{textBtn}</button>
      </div>
      <div className='right'></div>
    </div>
  )
}

export default banner
