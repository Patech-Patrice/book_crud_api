import React, {useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const EditBook = (callback) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editBookInput, setEditBookInput] = useState({
    book: {
      title: '',
      body: '',
      genre:'',
      image_url:'', 
      author: '',
    }
  });

    const handleChange = (event) => {
      event.persist();
      setEditBookInput({ ...editBookInput, [event.target.name]: event.target.value });
    };

    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/api/v1/books/' + id, {
          body: JSON.stringify(editBookInput),
          method: 'POST',
        }).then(response => {
          setEditBookInput(editBookInput);
          navigate('/books')
          // navigate('/books', {state: title, genre, image_url, body, author })
          // do something if the server responds positively
    }).catch(err => {
      // do something if sending data went wrong
    })
        
    }


         const handleEdit = (event, id) => {
          fetch('http://localhost:3000/api/v1/books/' + editBookInput.id, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(editBookInput)
              }).then(response => response.json()).then(book => {
                  setEditBookInput({editBookInput})
              })
              console.log(editBookInput)
                alert('Book Updated')
                 navigate('/books') 
           }


  useEffect(() => {
    const url = "http://localhost:3000/api/v1/books/" + id
    const fetchData = async() => {
      try{
        const response = await fetch(url);
        const book = await response.json();
        console.log(book);
        setEditBookInput(book)
          }catch (error){
            alert("error", error);
          }      
    };
      fetchData();
      console.log('');
}, []);


    return (
      <div className="App">
          <h2> Edit Book Form: </h2>
          <form   onSubmit={handleSubmit}>
          Title: <input type='text' name="title" value={editBookInput.title ?? ""} onChange={handleChange} />
          <br />
          <br />
          Genre: <input name="genre" value={editBookInput.genre ?? ""} onChange={handleChange} />
          <br />
          <br />
          Cover Image URL: <input name="image_url"  value={editBookInput.image_url ?? ""} onChange={handleChange} />
          <br />
          <br />
          <br />
          Description: <textarea name="body" rows="4" cols="50"  value={editBookInput.body ?? ""} onChange={handleChange} />  
          <br />
          <br />
          Author: <input name="author" value={editBookInput.author ?? ""} onChange={handleChange} />
          <br />
          <br />
          {/* <button className="update" type="button"onClick={handleEdit} >
                      Update Book
                  </button> */}
          
             <button className="update" type="button"onClick={(e) => handleEdit(e, editBookInput.id)} >
                      Update Book
                  </button>
          </form>
    </div>
    );
  };

  export default EditBook;


