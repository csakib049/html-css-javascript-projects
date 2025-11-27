import React, { useState } from 'react'
import Navbar from './Navbar';

const App = () => {

  const [theme,setTheme]=useState("Light");


  return (
    <div>
      <h1>theme is {theme}</h1>
      <Navbar theme={theme}  setTheme={setTheme}/>
    </div>
  )
}

export default App
