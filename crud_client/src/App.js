import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Books from './components/books/books.js';
import Book from './components/book/book.js';
import Home from './components/home/home.js';
import UpdateBook from './components/update-book/update-book.js';
import NewBook from './components/new-book/new-book.js';
import Movies from './routes/movies/movies.component.js'




// const Home = () => {
//   return (
//     <div>
//       This is the home page
//       </div>
//   );
// }

// const Movies = () => {
//   return (
//     <div>
//       This is the movies  page
//       </div>
//   );
// }

const App = () => {


  return (
    <div className="App">
      <h2>Welcome to the Book Logger App</h2>
      <Link to="/books">View Books</Link> <Link to="movies">View Movies</Link>
      {/* <Movies /> */}

 
   

            <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/books/new' element={<NewBook/>} />
                <Route path='/books/update/:id' element={<UpdateBook />} />
                <Route path="/books" element={<Books />} />  
                <Route path="movies" element={<Movies />} />  
                <Route path="/books/:id" element={<Book />} />
                <Route path="/books/:id" element={<Navigate to='/books' />} />
            </Routes>
    </div>
  );
}

export default App;
