import { useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';
import './index.css';

function App() {
const [books, setBooks] = useState([])

const createBook = (title) => {
console.log('title');
};

  return (
    <div className='App'>
      <h4 className='is-size-3 has-text-weight-bold ml-6'>Reading List</h4>
      <BookList />
      <BookCreate c />
    </div>
  );
}

export default App;
