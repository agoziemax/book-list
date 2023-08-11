import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
// import BooksContext from './context/books';
import './index.css';

function App() {
  const [books, setBooks] = useState([]);

// Function for creating a new Book object
  const createBook = (title) => {
    // Syntax for updating an array with new items.
    // If a state is an array or object, be careful how you update it.
    const updatedBooks = [...books, { id: Math.round(Math.random() * 999), title }];

    setBooks(updatedBooks);
  };

  const newBook = books.map((book) => {
    const tit = book.title;
    return <div>{tit}</div>;
  });

  console.log(newBook);

  return (
    <div className='app'>
      <h4 className='is-size-3 has-text-weight-bold ml-6'>Reading List</h4>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
