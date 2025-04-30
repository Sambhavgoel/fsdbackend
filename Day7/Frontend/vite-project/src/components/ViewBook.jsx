import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ViewBook.css'

const ViewBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    handleview();
  },[])
  const handleview = async () => {
    try {
      const res = await axios.get('https://fsdbackend-1-i9cc.onrender.com/books');
      setBooks(res.data);
    }
    catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div>
      <h1>View Book Details</h1>
      
      <div style={{display:'flex',flexWrap: 'wrap',gap: "20px"}}>
        {
          books.map((book)=>(
            <div key={book._id}>
              <img src={book.image} style={{border: '1px solid green',borderRadius: '15px',width: '250px',height: '300px'}} />
              <h3>{book.title}</h3>
              <h2>{book.author}</h2>
              <h2>{book.date}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ViewBook