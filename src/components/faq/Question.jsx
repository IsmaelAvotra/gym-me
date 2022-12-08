import React, { useState } from 'react'
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'

const Question = ({ question, answer }) => {
  const [showResponse, setShowResponse] = useState(false)
  return (
    <article className='accordion'>
      <header>
        <h3>{question}</h3>
        <button className='btn' onClick={() => setShowResponse(!showResponse)}>
          {showResponse ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
        </button>
      </header>
      {showResponse && <p>{answer}</p>}
    </article>
  )
}

export default Question
