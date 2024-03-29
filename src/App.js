import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';
// import BooksContext from './context/books';
import './index.css';


function App() {
  const [books, setBooks] = useState([]);

  // To edit book. The id is to link the exact book the click is taking place in.
  // The newTitle is used to put in the new title
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle};
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  // Function to delete books by their id
  const deleteBookById = (id) => {
    // Syntax for deleting an item from an array
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    // Update the book state after the book has been deleted
    setBooks(updatedBooks);
  };
  // End

  // Function for creating a new Book object in the code
  const createBook = (title) => {
    // Syntax for updating an array with new items.
    // If a state is an array or object, be careful how you update it.
    // This below updates the array from the back, to update from the front, reverse the syntax
    const updatedBooks = [...books, { id: Math.round(Math.random() * 999), title }];

    // Update the book state after the book has been deleted
    setBooks(updatedBooks);

    // API calls
    axios.post('http://3001/books', { title });
  };

  return (
    <div className='app'>
      <h4 className='is-size-3 has-text-weight-bold ml-6'>Reading List</h4>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
