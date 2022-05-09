import './App.css';
import axios from 'axios';
import { useState, useEffect, Fragment, useContext } from 'react';
import { Routes, Route, Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import Books from './components/books/books.js';
//import Book from './components/book/book.js';
import BookInput from './components/books/books.js';
import EditBook from './components/books/books.js';



const Navigation = () => {
  return (
    <div>
     Here lives the nav bar
      </div>
  );
}

const Home = () => {
  return (
    <div>
      This is the home page
      </div>
  );
}

const Book = () => {
  return (
    <div>
      This is the book single page
      </div>
  );
}

// const BookInput = () => {
//   return (
//     <div>
//       This is the book input page
//       </div>
//   );
// }

const App = () => {


  return (
    <div className="App">
      <h2>Welcome to the Book Logger App</h2>
      <Link to="books">View Books</Link>

      <div>
      <Link className="nav-links-container"  to='books/new'> Add New Book</Link>
      
            <div>
              {/* <BookInput /> */}
            </div>
   
      
      </div>
      {/* <Routes>  */}
      {/* 
               <Route path='/books/update/:id' element={<EditBook />} />               
                 <Route path="/books" element={<Books />} />  
                <Route path='/' element={<Home/>}/>     */}
            {/* <Route path="/books/:id" element={<Book />} />  */}
            {/* <Route path='/' element={<Home/>}/>
            <Route path='/' element={<BookInput/>} /> */}
            {/* </Routes>  */}

            <Routes>
                                               
                          <Route path='/books/create' element={<BookInput/>} />
                          <Route path='/books/update/:id' element={<EditBook />} />
                        
                          <Route path="/books" element={<Books />} />  
                           <Route path="/books/:id" element={<Book />} /> 
                          <Route index element={<Home/>} />                        
                    
                   </Routes>
    </div>
  );
}

export default App;
