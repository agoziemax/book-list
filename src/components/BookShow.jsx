import React from 'react'
import BookEdit from './BookEdit';
import { useState } from 'react';

function BookShow({book, onDelete}) {

  const [showEdit, setShowEdit] = useState(false);

 const  handleClick = ()=>{
  onDelete(book.id);
  };

 const handleEditClick = ()=>{
  setShowEdit(!showEdit);

 }

  return (
    <div className='book-show'>
      {!showEdit ? book.title : <BookEdit book={book}/>}
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>Save</button>
        <button className='delete' onClick={handleClick}>
          Delete
        </button>

      </div>

    </div>
  );
}

export default BookShow
