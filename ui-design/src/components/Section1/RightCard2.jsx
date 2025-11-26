import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard2 = () => {
    return (
        <div className=' h-full w-80 shrink-0  rounded-4xl relative overflow-hidden'>

            <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" />
            <RightCardContent />
        </div>
    )
}

export default RightCard2
