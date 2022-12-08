import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import './WorkoutSlider.css'

import { Navigation } from 'swiper'
const WorkoutSlider = ({ programs }) => {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={32}
        navigation={true}
        breakpoints={{
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
        className='workoutSlider'
      >
        {programs.map((program, idx) => {
          const { image, name } = program
          return (
            <SwiperSlide key={idx}>
              <img src={image} alt='' />
              <div>
                <div className='workout-name'>{name}</div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default WorkoutSlider
