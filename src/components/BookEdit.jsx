import React, { useState } from 'react'


function BookEdit({book, onEdit, toggleEdit}) {

  const [title, setTitle] = useState(book.title);

  const handleClick = (e) => {
   e.preventDefault();
   onEdit(book.id, title)
   toggleEdit();
  }

  const handleInput = (e) => {
  setTitle(e.target.value);

  };

  return (
    <form onSubmit={handleClick} className='book-edit' action=''>
      <label htmlFor=''>Title</label>
      <input className='input' onChange={handleInput} value={title} />
      <button className='button is-primary'>Save</button>
    </form>
  );
}

export default BookEdit
