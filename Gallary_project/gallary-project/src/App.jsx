import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setuserData] = useState([]);

  async function getData() {
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30');

    setuserData(response.data);

    console.log(userData);
  }


  let printUserData = "no user available";


  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return (
        <div key={idx}>
          <a href={elem.url} target='_blank'>
            <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
              <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
            </div>
            <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
        </div>

      )
    });
  }



  return (
    <div className='bg-black overflow-auto h-screen p-5  text-white'>
      <button onClick={getData} className='bg-green-600 text-white px-5 py-2  rounded active:scale-90'>get data</button>


      <div className='flex flex-wrap gap-3' >
        {printUserData}
      </div>



    </div>



  )
}

export default App


//8:44