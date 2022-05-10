import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';



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
         // console.log(book)
          navigate('/books', {state: title, 
            genre, 
            image_url, 
            body, 
            author })
        }) 
      }

      const handleChange = event => {
        // console.log(event.target.name);
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
      <div>
     
        <h4> Create a New Book:</h4>
        <form  onSubmit={handleSubmit}>
      Title: <textarea type='text' rows="5" cols="30" name="title" value={title} onChange={handleChange} />
      <br />
      <br />
          Genre: <textarea rows="2" cols="30" name="genre" value={genre} onChange={handleChange} /> 
      <br />
      <br />
      Cover Image URL: <textarea rows="6" cols="30" name="image_url" value={image_url} onChange={handleChange} />
      <br />
      <br />
      Description: <textarea name="body" rows="6" cols="50" defaultValue={body} onChange={handleChange} />  
      <br />
      <br />
      Author: <textarea  rows="2" cols="30" name="author" value={author} onChange={handleChange} />
      <br />
      <br />
      <button onChange={handleSubmit} type="submit">Create Book</button>
      </form>
        </div>
    );
  }

  export default NewBook;