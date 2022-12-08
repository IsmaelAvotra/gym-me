import React, { useState } from 'react'
import Question from './Question'
import './Faq.css'

import { faq } from '../../data'

const Faq = () => {
  const { icon, title, accordions } = faq
  return (
    <div className='faq'>
      <div
        className='image'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
      >
        <img src={icon} className='icon' />
      </div>
      <h2 data-aos='fade-up' data-aos-offset='200' data-aos-delay='200'>
        {title}
        <span>.</span>
      </h2>

      <div
        className='accordions'
        data-aos='fade-up'
        data-aos-offset='300'
        data-aos-delay='200'
      >
        {accordions.map((accordion, currentIndex) => {
          return <Question key={currentIndex} {...accordion} />
        })}
      </div>
    </div>
  )
}

export default Faq
