import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import Card2 from './components/Card2.jsx';


const App = () => {
     
     const userArray=[
      {username:"sakib",age:23},
      {username:"sakidfb",age:2334},
      {username:"saskib",age:2233},
      {username:"sakijjjb",age:26783}
     ]

  return (
     <div>
         {
          userArray.map(function(elem){
            return <Card2 userName={elem.username} age={elem.age}/>
          })
         }
         
     </div>
  )
}

export default App
