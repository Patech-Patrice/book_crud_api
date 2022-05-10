import './App.css';
import axios from 'axios';
import { useState, useEffect, Fragment, useContext } from 'react';
import { Routes, Route, Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import Books from './components/books/books.js';
import Book from './components/book/book.js';

import EditBook from './components/books/books.js';
import NewBook from './components/new-book/new-book.js';



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

// const Book = () => {
//   return (
//     <div>
//       This is the book single page
//       </div>
//   );
// }

// const NewBook = () => {
//   return (
//     <div>
//       This is the new book page
//       <h4> Create a New Book:</h4>
//           <Link className='' to="/books"> View All Books </Link>
//       <form  onSubmit={''}>
//       Title: <textarea type='text' rows="1" cols="45" name=""  onChange={''} />
//       <br />
//           Genre: <textarea rows="2" cols="45" name=""  onChange={''} /> 
//       <br />
//       Cover Image URL: <textarea rows="2" cols="45" name="" onChange={''} />
//       <br />
//       Description: <textarea name="body" rows="4" cols="50"  onChange={''} />  
//       <br />
//       <br />
//       Author: <input name=""  onChange={''} />
//       <br />
//       <button onChange={''} type="submit">Create Book</button>
//       </form>
//       </div>
//   );
// }

const App = () => {


  return (
    <div className="App">
      <h2>Welcome to the Book Logger App</h2>
      <Link to="/books">View Books</Link>

      <div>
      {/* <Link className="nav-links-container"  to='books/create'> Add New Book</Link> */}
      
            <div>
              {/* <BookInput /> */}
            </div>
   
      
      </div>
   

            <Routes>
                                               
                          {/* <Route path='/books/create' element={<BookInput/>} />
                          <Route path='/books/update/:id' element={<EditBook />} />
                          <Route path="/books" element={<Books />} />  
                           <Route path="/books/:id" element={<Book />} /> 
                          <Route index element={<Home/>} />                         */}

                      <Route path='/' element={<Home/>} /> 
                      <Route path='/books/new' element={<NewBook/>} />
                          <Route path='/books/update/:id' element={<EditBook />} />
                        
                          <Route path="/books" element={<Books />} />  
                           <Route path="/books/:id" element={<Book />} /> 
                     


                    
                   </Routes>
    </div>
  );
}

export default App;
