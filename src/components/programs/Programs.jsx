import React from 'react'
import './Programs.css'
import { workouts } from '../../data'
import WorkoutSlider from './WorkoutSlider'

const Programs = () => {
  const { icon, title, programs } = workouts
  return (
    <div className='programs'>
      <div className='heading' data-aos='fade-up' data-aos-delay='200'>
        <img src={icon} className='icon' />
        <h2>
          {title}
          <span>.</span>
        </h2>
      </div>
      {/* slider  */}
      <div data-aos='fade-left' data-aos-offset='200' data-aos-delay='300'>
        <WorkoutSlider programs={programs} />
      </div>
    </div>
  )
}

export default Programs
