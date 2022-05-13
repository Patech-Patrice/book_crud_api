import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Books from './components/books/books.js';
import Book from './components/book/book.js';

import UpdateBook from './components/update-book/update-book.js';
import NewBook from './components/new-book/new-book.js';




const Home = () => {
  return (
    <div>
      This is the home page
      </div>
  );
}

// const UpdateBook = () => {
//   return (
//     <div>
//       This is the update book  page
//       </div>
//   );
// }

const App = () => {


  return (
    <div className="App">
      <h2>Welcome to the Book Logger App</h2>
      <Link to="/books">View Books</Link>

 
   

            <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/books/new' element={<NewBook/>} />
                <Route path='/books/update/:id' element={<UpdateBook />} />
                <Route path="/books" element={<Books />} />  
                <Route path="/books/:id" element={<Book />} />
                <Route path="/books/:id" element={<Navigate to='/books' />} />
            </Routes>
    </div>
  );
}

export default App;
