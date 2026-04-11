import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState([]);

  const btnclicked = async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');


    setData(response.data);

     console.log(response.data);
     

  }

  return (
    <div>

      <button onClick={btnclicked}>fetch data</button>

      <div>
        {
          data.map(function (elem, idx) {

            return <h3>Hello {elem.title} {idx}</h3>
          })
        }
      </div>
    </div>
  )
}

export default App
