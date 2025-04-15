import React from "react";
import axios from 'axios';

const Update=()=>{
    const handleupdate = async (e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        const name=e.target.name.value;
        const age = e.target.age.value;
        const data ={name,age}
        await axios.put(`https://fsdbackend-lczx.onrender.com/users/${id}`,data)
        alert('Success')
    }
    return (
        <div class="container" style={{backgroundColor:"#b3e6e6",color:"white",padding:"30px",textAlign:"center"}}>
            <h2 style={{color:"black"}}>Update User</h2>
            <form onSubmit={handleupdate}>
                <label style={{fontSize:'20px',color:'black'}}>
                    ID:
                    <input type="text" name="id" style={{padding: '10px',border: '1px solid #ccc',borderRadius: '8px',width: '15%',fontSize: '16px',marginLeft:'4px',marginRight:'30px', marginBottom:'25px'}}/>
                </label>
                <label style={{fontSize:'20px',color:'black'}}>
                    Name:
                    <input type="text" name="name" style={{padding: '10px',border: '1px solid #ccc',borderRadius: '8px',width: '15%',fontSize: '16px',marginLeft:'4px',marginRight:'30px', marginBottom:'25px'}}/>
                </label>
                <label style={{fontSize:'20px',color:'black'}}>
                    Age:
                    <input type="text" name="age" style={{padding: '10px',border: '1px solid #ccc',borderRadius: '8px',width: '15%',fontSize: '16px',marginLeft:'4px',marginRight:'30px', marginBottom:'25px'}}/>
                </label>
                <label>
                    <button type="submit" style={{padding: '10px 20px',backgroundColor: '#008080',color: 'white',border: 'none',borderRadius: '8px',fontSize: '16px',cursor: 'pointer'}}>Update</button>
                </label>
            </form>
        </div>
    )
}

export default Update