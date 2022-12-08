import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import './CommunitySlider.css'

const CommunitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={15}
      navigation={true}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className='communitySlider'
    >
      {testimonials.map((testimonial, idx) => {
        const { image, name, message } = testimonial
        return (
          <SwiperSlide key={idx}>
            <img src={image} alt='' />
            <div className='author'>
              <p>{message}</p>
              <h3>
                <span>~</span>
                {name}
              </h3>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default CommunitySlider
