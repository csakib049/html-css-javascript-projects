import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
      <div className=' flex justify-between items-center  p-5 h-15 w-90 font-bold'>
        <ul className='flex gap-5 '>
            <li><a href="#MENU">MENU</a></li>
            <li><a href="#LOCATION">LOCATION</a></li>
            <li><a href="#ABOUT">ABOUT</a></li>
            <li><a href="#CONTACT">CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
