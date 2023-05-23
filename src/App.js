import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css';

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [...books, { id: Math.round(Math.random() * 999), title }];

    setBooks(updatedBooks);
    console.log(updatedBooks);
  };
  return (
    <div className='App'>
      <h4 className='is-size-3 has-text-weight-bold ml-6'>Reading List</h4>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
