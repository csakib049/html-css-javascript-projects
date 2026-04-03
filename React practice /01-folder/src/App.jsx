import React from 'react'

const App = () => {


  function inputChanging(val) {
    console.log(val);

  }


  return (
    <div>
      <h1>Hello world..</h1>


      <input type="text" onChange={function (elem) {
        inputChanging(elem.target.value);
      }} />


    </div>
  )
}

export default App
