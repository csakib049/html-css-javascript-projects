import React from 'react'
import Upper from './Components/UpperParts/Upper'
import ShoeImage from './Components/RightPart/ShoeImage'
import LeftPart from './Components/LeftPart/LeftPart'



const App = () => {
  return (
    <div>
      <Upper />
      <div className='flex'>
        <LeftPart />
        <ShoeImage />
      </div>



    </div>
  )
}

export default App
