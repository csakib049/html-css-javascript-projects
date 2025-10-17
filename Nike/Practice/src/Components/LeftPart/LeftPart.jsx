import React from 'react'
import Buttons from './Buttons'
import Text from './Text'
import Flipcart_and_amazon from './Flipcart_and_amazon'

const LeftPart = () => {
  return (
    <div className='m-25'>
        
      <Text/>  
      <Buttons/>
      <h4 className='text-gray-700'>Also Available On</h4>
      <Flipcart_and_amazon/>

    </div>
  )
}

export default LeftPart
