import './App.css';
import axios from 'axios';
import { useState, useEffect, Fragment, useContext } from 'react';
import { Routes, Route, Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import Books from './components/books/books.js';





const Home = () => {
  return (
    <div>
      This is the home page
      </div>
  );
}


// const Books = () => {
//   return (
//     <div>
//       This is the books page
//       </div>
//   );
// }

const App = () => {
  const backend_url = 'http://localhost:3000/api/v1/books'

  useEffect(() => {
    axios.get(backend_url)
        .then(res => setBooks(res.data))
        .catch(error => console.log(error))
  }, []);

  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <h2>Books:</h2>

      <div>
        {books.map((book,_) => {
        return (
            <div>
              {book.id}. {book.title} {book.body} 
              {book.genre} {book.image_url}
            </div>
        )
        })}
      </div>
      <Routes> 
               {/* <Route path='/books/create' element={<BookInput/>} />
               <Route path='/books/update/:id' element={<EditBook />} /> */}              
                 <Route path="/books" element={<Books />} />  
                <Route path='/' element={<Home/>}/>    
            {/* <Route path="/books/:id" element={<Book />} />  */}
            </Routes> 
    </div>
  );
}

export default App;
