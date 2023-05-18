import React from 'react';
import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
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
