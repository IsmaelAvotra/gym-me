import React from 'react'

import { community } from '../../data'
import CommunitySlider from './CommunitySlider'

const Community = () => {
  const { icon, title, testimonials } = community
  return (
    <div className='community'>
      <div
        className='heading'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
      >
        <img src={icon} className='icon' />
        <h2>
          {title}
          <span>.</span>
        </h2>
      </div>
      {/* slider  */}
      <div data-aos='fade-left' data-aos-offset='200' data-aos-delay='300'>
        <CommunitySlider testimonials={testimonials} />
      </div>
    </div>
  )
}

export default Community
