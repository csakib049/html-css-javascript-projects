import React from 'react'
import Practice from './Practice'
import { jog, biyog } from './Practice2'

const App = () => {

  let name="sakib";
  let p=23;
  let q=33;

  function abc(){
    return "montu mia ki khobor !!!" ; 
  }


  return (
    <div>
      <Practice />
      <h1>{jog(1, 2)}</h1>    
      <h3>{biyog(3, 4)}</h3>
      <h1>wowwww {name}</h1>
      <h3>{p+q} is a good {name}</h3>   
      
      <h1>{abc()}</h1>

    </div>
  )
}

export default App
