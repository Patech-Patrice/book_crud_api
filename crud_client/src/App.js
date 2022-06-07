import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Books from './components/books/books.js';
import Book from './components/book/book.js';
import Home from './components/home/home.js';
import UpdateBook from './components/update-book/update-book.js';
import NewBook from './components/new-book/new-book.js';
import AuthContext from './store/auth-context';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

import { useState, useContext } from 'react';



const App = () => {

const authCtx = useContext(AuthContext);

  return (
    <div className="App">
     
   <Layout>
       <Routes>
             <Route path='/' element={<HomePage/>} /> 
              {!authCtx.isLoggedIn && (
              <Route path="/auth" element={<AuthPage />} /> 
              )}
              { authCtx.isLoggedIn && (
               <Route path="/profile" element={<UserProfile />} />
              )}
              { authCtx.isLoggedIn && (
                <Route path="/books" element={<Books />} />
              )}
           
                <Route path='/books/new' element={<NewBook/>} />
                <Route path='/books/update/:id' element={<UpdateBook />} />
                <Route path="/books/:id" element={<Book />} />
                <Route path="*" element={<Navigate to="/" replace />}
    />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;




