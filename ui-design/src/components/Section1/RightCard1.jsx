import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard1 = (props) => {
  return (
    <div className=' h-full w-80 shrink-0  rounded-4xl relative overflow-hidden'>

        <img  className='h-full w-full object-cover ' src="https://plus.unsplash.com/premium_photo-1680124607787-9e54118b1624?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="working professional" /> 
        <RightCardContent/>
    </div>
  )
}

export default RightCard1
