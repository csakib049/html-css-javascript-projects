import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'


const LeftContent = () => {
  return (
    <div className=' h-full w-1/4 bg-white flex flex-col justify-between '>
         <HeroText/>
         <Arrow/>
    </div>
  )
}

export default LeftContent
