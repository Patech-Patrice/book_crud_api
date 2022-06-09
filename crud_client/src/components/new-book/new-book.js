import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';



const NewBook = () => {


    const [bookInput, setBookInput] = useState({
        book: {
          title: '',
          body: '',
          genre:'',
          image_url:'', 
          author: '',
        }
      });

      const navigate = useNavigate();

    //turns book into an object
      const {
        title,
        body,
        genre,
        image_url,
        author
      } = bookInput.book;

      const handleSubmit = event => {
        event.preventDefault();
       const body = JSON.stringify(bookInput.book);
        fetch('http://localhost:3000/api/v1/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '*',
          },
          body: body,
        }).then((response) => {return response.json()})
        .then((book)=>{
           setBookInput(book)
           alert('Book successfully created!');
          navigate('/books', {state: title, 
            genre, 
            image_url, 
            body, 
            author })
        }) 
      }

      const handleChange = event => {
           event.preventDefault();
             setBookInput(prevState => {
               return {
                 book: {
                   ...prevState.book,
                   [event.target.name]: event.target.value,
                 }
           };
         });
       };





    return (
 

      <div className = "form-box">
          <h4> Create a New Book:</h4>
              <form onSubmit = { handleSubmit }>
                 <div className = "field1">
                          <input 
                              type ="text" 
                              className = "form-input"
                              name ="title" 
                              placeholder="Book Title"
                              onChange ={handleChange} 
                              value = {title}
                          />


                          <input 
                              type ="tel" 
                              className = "form-input"
                              name ="genre" 
                              placeholder="Book Genre"
                              onChange ={handleChange} 
                              value = {genre}
                          />

                          <input 
                              className = "form-input"
                              name ="image_url" 
                              placeholder="Book Cover Image URL"
                              onChange ={handleChange} 
                              value = {image_url}
                          />

                          <textarea 
                              type ="text" 
                              className = "form-input"
                              name ="body" 
                              placeholder="Book Summary"
                              onChange ={handleChange} 
                              defaultValue={body}
                          />
                  
                          <input 
                              type ="text" 
                              className = "form-input"
                              name ="author" 
                              placeholder="Author"
                              onChange ={handleChange} 
                              value = {author}
                          />
                          </div>

                          <button 
                          type = "submit"
                          id= "submitBtn"
                          className = "submitBtn"
                          onClick={handleSubmit} > Create Book </button>
                      </form>
                  </div>

                 );
             }

  export default NewBook;