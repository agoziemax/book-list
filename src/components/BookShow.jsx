import React, { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete }) {

  const [showEdit, setSowEdit] = useState(false)

  // here onClick is called and the id of the book is fed into the prop from App.js as an arguement
  const handleDeleteClick = () => {
    onDelete(book.id)
  }
  // End

  // Function to handle what shows when the edit button is clicked
  const handleEditClick = () => {
    setSowEdit(!showEdit)
  }

  // This code handles what shows when showEdit is true ie instance of the BookEdit class
  let content = showEdit ? <BookEdit /> : <h3>{book.title}</h3>;

  return (
    <div className='book-show'>
      {content}
      <div className='actions'>
        <button className="edit" onClick={handleEditClick} >Edit</button>
        <button className='delete' onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
