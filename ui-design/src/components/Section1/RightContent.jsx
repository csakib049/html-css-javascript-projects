import React from 'react'
import RightCard1 from './RightCard1'
import RightCard2 from './RightCard2'
import RightCard3 from './RightCard3'
import RightCard4 from './RightCard4'
import RightCard5 from './RightCard5'

const RightContent = () => {
  return (
    <div className='h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto '>
      <RightCard1/>
      <RightCard2/>
      <RightCard3/>
      <RightCard4/>
      <RightCard5/>
      
    </div>
  )
}

export default RightContent



