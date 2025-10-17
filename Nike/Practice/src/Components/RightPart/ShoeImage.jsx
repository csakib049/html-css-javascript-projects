import React from 'react'
import RedShoe from './RedShoe.png' // ✅ Correct import

const ShoeImage = () => {
  return (
    <div className=' '>
      <img src={RedShoe} alt="red shoe image" />
    </div>
  )
}

export default ShoeImage
