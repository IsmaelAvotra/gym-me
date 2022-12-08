import React from 'react'
import './Join.css'

import { join } from '../../data'

const Join = () => {
  const { image, subtitle, btnText } = join
  return (
    <div className='join'>
      <div className='text-image'>
        <div
          className='image'
          data-aos='fade-right'
          data-aos-offset='100'
          data-aos-delay='200'
        >
          <img src={image} />
        </div>
        <div
          className='text'
          data-aos='fade-left'
          data-aos-offset='100'
          data-aos-delay='200'
        >
          <h1>
            Wanna join <span>&</span> have fun{' '}
          </h1>
          <p>{subtitle}</p>
          <button>{btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default Join
