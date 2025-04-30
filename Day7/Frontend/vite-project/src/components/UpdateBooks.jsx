import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UpdateBook.css';

const UpdateBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    date: '',
    image: ''
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:9000/books');
      setBooks(res.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching books');
    }
  };

  const handleSelect = (id) => {
    const selected = books.find(book => book._id === id);
    if (selected) {
      setSelectedBookId(id);
      setFormData({
        title: selected.title,
        author: selected.author,
        date: selected.date,
        image: selected.image
      });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9000/books/${selectedBookId}`, formData);
      alert('Book updated successfully');
      fetchBooks();
    } catch (error) {
      console.error(error);
      alert('Error updating book');
    }
  };

  return (
    <div className="update-book-container">
      <h2>Update Book</h2>
      <h4>Select a book to update:</h4>
      <ul className="book-list">
        {books.map(book => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author}
            <button onClick={() => handleSelect(book._id)}>Edit</button>
          </li>
        ))}
      </ul>

      {selectedBookId && (
        <form onSubmit={handleUpdate} className="update-book-form">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            required
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Publish Date"
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <button type="submit">Update Book</button>
        </form>
      )}
    </div>
  );
};

export default UpdateBook;