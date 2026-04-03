import React from 'react'
import  '../styles/Card2.css'

const Card2 = (props) => {
  return (
    <div>
      <div className=' '>
          <h1 className='bg-pink-400 border-2 mt-10'>{`Hi there my name is :${props.username}
               and my age is :${props.age}
          `}</h1>
      </div>
    </div>
  )
}

export default Card2


