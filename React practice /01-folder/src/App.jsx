import React, { useState } from 'react'

const App = () => {

  const [title,setTitle]=useState('');

  const submitHandler=(e)=>{
     e.preventDefault();
     console.log("form submited by ",title);
     
     setTitle('');
  }


  return (
    <div> 
       <form action="" onSubmit={(e)=>{
            submitHandler(e);
       }}>
        <input 
        type="text" 
        placeholder='write a title ' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />

        <button>submit</button>
       </form>
    
    </div>
  )
}

export default App
