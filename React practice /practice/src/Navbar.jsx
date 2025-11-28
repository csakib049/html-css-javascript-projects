// import React from 'react'

// const Navbar = (props) => {

//     function changeTheme(){
//         if(props.theme=="Light"){
//             props.setTheme("Dark");
//         }else{
//             props.setTheme("Light");
//         }
//     }

//   return (
//     <div>
//       <button onClick={changeTheme}>change theme</button>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'

const Navbar = (props) => {

  function changeTheme(){
    if(props.theme=="light"){
      props.setTheme("dark");
    }else{
      props.setTheme("light");
    }
  }


  return (
    <div>
      <button onClick={changeTheme}>change theme</button>
    </div>
  )
}

export default Navbar
