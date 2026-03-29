import React from 'react'

const Card2 = (props) => {
  return (
    <div>
      <div>
          <h1>{`Hi there my name is :${props.username}
               and my age is :${props.age}
          `}</h1>
      </div>
    </div>
  )
}

export default Card2
