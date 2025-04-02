import React from 'react'
import axios from 'axios'

function Update() {
  const handleUpdate = async(e)=>{
    e.preventDefault()
    const id = e.target.id.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const data = {name,age}
    await axios.put(`https://fsdbackend-lczx.onrender.com/users/${id}`,data)
    alert('Product updates successfully')
  }
  return (
    <div>
      <h1>Update user</h1>
      <form onSubmit={handleUpdate}>
        <label>
          ID:
          <input type="text" name='id' />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age :
          <input type="text" name='age'/>
        </label>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Update