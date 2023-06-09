import React from 'react';
import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookCreate() {
  const [title, setTitle] = useState('');
  const {createBook} = useState(BookCreate);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className='book-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input className='input' id='title' onChange={handleChange} value={title} placeholder='Enter book title' />
        <button className='button'>Create Book!</button>
      </form>
    </div>
  );
}

export default BookCreate;
