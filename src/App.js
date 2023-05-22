import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
  const [books, setBooks] = useState([]);

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
      <BookList books ={books} onDelete={deleteBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
