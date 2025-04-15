// https://fsdbackend-lczx.onrender.com/users
import React from 'react'
import axios from 'axios'

const Register = () => {
    const handleRegister=async(e)=>{
        e.preventDefault();
        const user={
            name:e.target.name.value,
            age:e.target.age.value
        }
        await axios.post("https://fsdbackend-lczx.onrender.com/users",user)
        alert("User registered successfully!!")
    }
  return (
    <div class="container" style={{backgroundColor:"#b3d8f5",color:"white",padding:"30px",textAlign:"center"}}>
      <h2 style={{color:"black"}}>Add User</h2>
      <form onSubmit={handleRegister}>
        <label style={{fontSize:'20px',color:'black'}}>Name: </label><input type="text" name="name" style={{padding: '10px',border: '1px solid #ccc',borderRadius: '8px',width: '20%',fontSize: '16px',marginRight:'30px', marginBottom:'25px'}}/>
        <label style={{fontSize:'20px',color:'black'}}>Age: </label><input type="text" name="age" style={{padding: '10px',border: '1px solid #ccc',borderRadius: '8px',width: '20%',fontSize: '16px',marginRight:'30px'}}/>
        <button type='submit' style={{
          padding: '10px 20px',
          backgroundColor: '#1e90ff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>Submit</button>
      </form>
    </div>
  )
}

export default Register