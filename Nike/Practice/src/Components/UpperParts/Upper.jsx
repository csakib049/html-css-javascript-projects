import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Login from './Login'


const Upper = () => {
  return (
      <div className=' flex justify-between m-5'>
        <Logo/>
        <Navbar/>
        <Login/>

      </div>
  )
}

export default Upper
