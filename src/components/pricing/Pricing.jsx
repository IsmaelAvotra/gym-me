import React from 'react'
import './Pricing.css'
import { BsCheckCircleFill } from 'react-icons/bs'

import { pricing } from '../../data'
import { useState } from 'react'

const Pricing = () => {
  const { icon, title, plans } = pricing
  const [index, setIndex] = useState(1)
  return (
    <div className='pricing'>
      <div
        className='heading'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
      >
        <img src={icon} alt='' className='icon' />
        <h2>
          {title}
          <span>.</span>
        </h2>
      </div>
      <div className='plans'>
        {plans.map(({ name, price, list, delay }, currentIndex) => {
          return (
            <div
              className='plan'
              key={currentIndex}
              style={{
                color: currentIndex === index ? '#ffffff' : '#131316',
                background:
                  currentIndex === index ? '#131316' : 'rgba(19, 19, 22, 0.05)',
              }}
              onClick={() => setIndex(currentIndex)}
              data-aos='fade-up'
              data-aos-offset='200'
              data-aos-delay={delay}
            >
              <div className='offres'>
                <h3
                  style={{
                    color: currentIndex === index ? '#131313' : '#ffffff',
                    background: currentIndex === index ? '#ffffff' : '#131316',
                  }}
                >
                  {name}
                </h3>
                <h2>
                  {' '}
                  <span>
                    {price}
                    <strong>$</strong>
                  </span>
                  /month
                </h2>
              </div>
              <ul>
                {list.map(({ name }, num) => {
                  return (
                    <div className='list' key={num}>
                      <BsCheckCircleFill />
                      <p>{name}</p>
                    </div>
                  )
                })}
              </ul>
              <div className='button'>
                <button
                  style={{
                    background: currentIndex === index ? '#ffffff' : 'none',
                    border:
                      currentIndex === index ? 'none' : '1px solid #131316',
                  }}
                >
                  join now
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Pricing
