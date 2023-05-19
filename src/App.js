import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBook = [...books, { id: 1, title: title }];

    setBooks(updatedBook);
    console.log(updatedBook);
  };
  return (
    <div className='App'>
      <div> Length {books.length}</div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
