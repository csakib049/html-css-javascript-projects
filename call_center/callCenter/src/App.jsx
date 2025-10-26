import React from 'react'

import Uppertext from './Components/Section1/Uppertext'
import Button from './Components/Section2/LeftPart/Button'
import Image from './Components/Section2/RightPart/Image'

const App = () => {
  return (
    
    <div className='m-30'>

      <Uppertext />

      <div className='flex'>
        <Button />
        <Image />
      </div>


    </div>
  )
}

export default App
