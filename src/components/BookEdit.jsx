import React, { useState, } from 'react'


function BookEdit({book, onEdit, handleEditClick}) {

  const[title, setTitle] = useState(book.title)

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onEdit(book.id, title)
    handleEditClick()

  }

  return (
    <form  className='book-edit' action='' onSubmit={handleSubmit}>
     <label htmlFor="">Title</label>
     <input type="text" className="input" value={title} onChange={handleChange} />
     <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit
