import React from 'react'
import Form from './Form'

const button = () => {
  return (
    <div>
      <div className='mt-10'>
        <button className='uppercase bg-black  hover:bg-stone-900 active:bg-stone-800 text-white font-bold text-1xl h-12 w-50 '>Via Support chat</button>
        <button className='uppercase bg-black  hover:bg-stone-900 active:bg-stone-800 text-white font-bold text-1xl h-12 w-50 ml-10 '>   Via Call</button>
      </div>
      
        <Form/>

      <button className='uppercase bg-black hover:bg-stone-900 active:bg-stone-800 text-white font-bold text-1xl h-12 w-50 ml-75 mt-10 '>submit</button>
    </div>
  )
}

export default button
