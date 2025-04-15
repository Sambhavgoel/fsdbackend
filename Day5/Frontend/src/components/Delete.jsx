import React from "react";
import axios from 'axios';

const Delete=()=>{
    const handleDelete = async (e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        await axios.delete(`https://fsdbackend-lczx.onrender.com/users/${id}`)
        alert('Product deleted successfully')
    }
    return (
        <div class="container" style={{backgroundColor:"pink",color:"white",padding:"30px",textAlign:"center"}}>
            <h2 style={{color:"black"}}>Delete User</h2>
            <form onSubmit={handleDelete}>
                <input type="text" placeholder="Enter Product ID" name="id" style={{padding: '10px',border: '1px solid #ccc',borderRadius: '8px',width: '30%',fontSize: '16px',marginRight:'30px', marginBottom:'25px'}}/>
                <button type="submit" style={{padding: '10px 20px',backgroundColor: '#ff4d6d',color: 'white',border: 'none',borderRadius: '8px',fontSize: '16px',cursor: 'pointer'}}>Delete</button> 
            </form>
        </div>
    )
}

export default Delete