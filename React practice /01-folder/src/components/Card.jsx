// Card.js
import React from 'react'

const Card = (props) => {
  
  console.log(`Hiii!!! my name is ${props.user} and i am ${props.age} years old.`);
  return (
    <div className='card'>
      <h1>{`hi my name is ${props.user} and i am ${props.age} years old.`}</h1>
      <img
        className="cardimage"
        src={props.image}
        alt=""
      />
      <img  
        className='cardimage' 
        src={props.image} 
        alt="" 
      />


    </div>
  )
}

export default Card
