import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'



const App = () => {

  return (
    <div>
     <Navbar text='--->sakib can do it'/>
     <Card user='sakib' age={24} image='https://i.pinimg.com/736x/b5/65/e0/b565e018a585329f395ded91a44b4f5f.jpg'/>   
     <Card user='shahriar' age={22} image='https://i.pinimg.com/736x/56/32/9b/56329b21866b798235339716b5c5c5a0.jpg'/>
     <Card user='Nazifa' age={14} image='https://i.pinimg.com/1200x/7e/69/1c/7e691c15f6af8afddd8fa17fa8be2568.jpg'/>   
 

      
    

    </div>
  )
}

export default App
