import React, { useState,useEffect } from 'react'
import axios from 'axios'
const View = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        viewdata();
    },[])
    const viewdata = async ()=>{
        const res=await axios.get('https://fsdbackend-lczx.onrender.com/users');
        console.log(res);
        setUsers(res.data);
    }
    const thStyle = { padding: '12px', color: '#4b0039', fontSize: '16px', fontWeight: 'bold', borderBottom: '2px solid #b565a7' };
    const tdStyle = { padding: '10px', fontSize: '15px', borderBottom: '1px solid #eee', color: '#333' };
  return (
    <div style={{ backgroundColor: '#f3e0f7', padding: '30px', textAlign: 'center', maxWidth: '100%', color: '#4b0039' }}>
        <h2 style={{ marginBottom: '20px', color: '#4b0039' }}>Registered Users List</h2>
    
        <table style={{ borderCollapse: 'collapse', width: '70%', backgroundColor: '#ffffff', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',margin:'0 auto' }}>
            <thead style={{ backgroundColor: '#d9a7d0' }}>
                <tr>
                    <th style={thStyle}>ID</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id} style={{ textAlign: 'center' }}>
                        <td style={tdStyle}>{user.id}</td>
                        <td style={tdStyle}>{user.name}</td>
                        <td style={tdStyle}>{user.age}</td>
                    </tr>))}
            </tbody>
        </table>
    </div>
    
  )
}

export default View