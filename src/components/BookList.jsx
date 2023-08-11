import React from 'react';
import BookShow from './BookShow';

function BookList({ books, onDelete }) {
  // This function is used to map through the books array in App.js,
  // and it returns Bookshow components

  const renderedBooks = books.map((book) => {
    return <BookShow onDelete={onDelete} key={book.id} book={book} />;

  });

  return <div className='book-list'> {renderedBooks}</div>;
}

export default BookList;
