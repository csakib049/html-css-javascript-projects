import React, { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState("");
  const [detailed, setDetailed] = useState("");

  const [task, setTask] = useState([]);



  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];  // creates a copy of your task

    copyTask.push({
      title: title,
      detailed: detailed
  });

    setTask(copyTask);

    console.log(task);


    setTitle("");     // to make the title bar empty after pressign submit
    setDetailed("");  // to make the detailed bar empty after pressign submit

  }




  return (
    <div className='h-screen bg-black text-white p-10  lg:flex'>

      <form onSubmit={(e) => {
        submitHandler(e);

      }} action="" className='flex  items-start   '>

        <h1 className='text-2xl font-bold  mr-9 '>Add Notes</h1>
        <div className='flex flex-col  gap-4 mr-9 '>

          {/* 1st input */}
          <input
            className='px-5 py-2 border-2 rounded w-full outline-none'
            type="text" placeholder='Enter task Heading '

            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              // console.log(e.target.value);
            }}
          />


          {/* detailed input */}
          <textarea className='px-5 py-2 border-2 rounded h-32 w-full outline-none ' type="text" placeholder='Enter your Notes'
            value={detailed}
            onChange={(e) => {
              setDetailed(e.target.value);
            }}
          />

          <button className='bg-white hover:bg-stone-300 active:bg-stone-400 text-black px-5 py-2  rounded  w-full outline-none '>Add notes</button>


        </div>


      </form>

      <div className=' lg:w-1/2 p-10  lg:border-l-2'>
        <h1 className='text-2xl font-bold '>Recent Notes</h1>
        <div className='flex flex-wrap  items-start justify-start gap-5 h-full overflow-auto'>

          {task.map(function (elem, idx) {

            return <div key={idx} className='h-52 w-40 rounded-xl p-4 text-black bg-white'>
              <h3 className='leading-tight  text-2xl font-bold '>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-600'>{elem.detailed}</p>
            </div>
          })}
        </div>

      </div>



    </div>
  )
}

export default App



// 6:56:20