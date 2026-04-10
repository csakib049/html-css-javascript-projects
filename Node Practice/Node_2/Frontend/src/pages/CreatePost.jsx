import React from 'react'

const CreatePost = () => {
  return (
      <section className='create-post-section'>
           <h1>Create Post</h1>

           <form >
            <input type="file" name='image' accept='image/*'/>
            <input type="text" name='caption' placeholder='Enter caption ' required/>
            <button type='submit'>Submit</button>
           </form>
      </section>
  )
}

export default CreatePost
