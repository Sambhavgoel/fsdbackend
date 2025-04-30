import React, { useState } from 'react';
import axios from 'axios';
import './SearchBook.css';

const SearchBook = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    if (!query) {
      alert('Please enter a title to search');
      return;
    }

    try {
      const res = await axios.get(`https://fsdbackend-1-i9cc.onrender.com/search?title=${query}`);
      setBooks(res.data);
    } catch (error) {
      console.error(error);
      alert('Error while fetching books');
    }
  };

  return (
    <div className="search-container">
      <h2>🔍 Search Books</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="results-grid">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="book-card" key={book._id}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Date:</strong> {book.date}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No books found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBook;