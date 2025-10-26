import React from 'react'

const Form = () => {
  return (
    <div>
      
      <form action="" className='flex flex-col  size-[300px] mt-8 gap-4'>
        <input className='border-2 border-stone-400' type="text" placeholder='Name'  />
        <input className='border-2 border-stone-400' type="text" placeholder='Email'  />
        <input className='border-2 border-stone-400 size-[500px]' type="text" placeholder='Text'  />
      </form>
    </div>
  )
}

export default Form
