import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <nav><h1>This is a Navbar</h1>  </nav>

     
     <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
     <Link to='/contact'>Contact</Link>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

      <footer><h1>This is a footer</h1> </footer>

    </div>
  )
}

export default App
