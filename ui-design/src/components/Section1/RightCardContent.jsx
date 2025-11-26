import React from 'react'

const RightCardContent = () => {
    return (
        <div>
            <div className='absolute top-0 left-0 h-full w-full  p-5 flex flex-col justify-between '>
                <div className='bg-white rounded-full h-15 w-15 flex items-center justify-center'>
                    <h2 className='font-bold '>1</h2>
                </div>
                <div className=''>
                    <p className='text-xl leading-normal text-white mb-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam neque vitae quidem, recusandae quasi.</p>
                    <div>
                        <button className='bg-blue-600 text-white font-medium rounded-3xl h-10 w-20'>Satisfied</button>
                        <button className='bg-blue-600 text-white font-medium rounded-full h-10 w-10 ml-38'><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
