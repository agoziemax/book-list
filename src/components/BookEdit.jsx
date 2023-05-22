import React, { useState } from 'react'


function BookEdit({book}) {

  const [title, setTitle] = useState(book.title);

  const handleClick = (e) => {
   e.preventDefault();
  }

  const handleInput = (e) => {
  setTitle(e.target.value);

  };

  return (
    <form onSubmit={handleClick} className='book-edit' action=''>
      <label htmlFor=''>Title</label>
      <input className='input' onChange={handleInput} value={title} />
      <button className='button is-primary'>Edit</button>
    </form>
  );
}

export default BookEdit
