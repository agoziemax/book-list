import {  useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';
import './index.css';

function App() {

  const {fetchBooks} = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);





  return (
    <div className='App'>
      <h4 className='is-size-3 has-text-weight-bold ml-6'>Reading List</h4>
      <BookList />
      <BookCreate/>
    </div>
  );
}

export default App;
