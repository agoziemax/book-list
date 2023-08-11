import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
// import BooksContext from './context/books';
import './index.css';

function App() {
  const [books, setBooks] = useState([]);

  // Function to delete books by their id
  const deleteBookById = (id) =>{
    // Syntax for deleting an item from an array
    const updatedBooks = books.filter((book)=>{
    return book.id !== id;
    });

    // Update the book state after the book has been deleted
    setBooks(updatedBooks);
  };
// End

// Function for creating a new Book object
  const createBook = (title) => {
    // Syntax for updating an array with new items.
    // If a state is an array or object, be careful how you update it.
    // This below updates the array from the back, to update from the front, reverse the syntax
    const updatedBooks = [...books, { id: Math.round(Math.random() * 999), title }];

    // Update the book state after the book has been deleted
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <h4 className='is-size-3 has-text-weight-bold ml-6'>Reading List</h4>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
