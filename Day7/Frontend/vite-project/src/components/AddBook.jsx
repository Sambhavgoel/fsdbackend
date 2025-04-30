import React from 'react'
import axios from 'axios'
import './AddBook.css'

const AddBook = () => {
  const handlebook = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const date = e.target.date.value;
    const image = e.target.image.value;
    const books = { title, author, date, image };
    await axios.post('http://localhost:9000/books', books);
    alert('Book Added Successfully');
    e.target.reset();
  };

  return (
    <div className="add-book-container">
      <h1>Add Book</h1>
      <form onSubmit={handlebook} className="add-book-form">
        <label>
          Title:
          <input type='text' name='title' required />
        </label>
        <label>
          Author:
          <input type='text' name='author' required />
        </label>
        <label>
          Date:
          <input type='date' name='date' required />
        </label>
        <label>
          Image URL:
          <input type='text' name='image' required />
        </label>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;