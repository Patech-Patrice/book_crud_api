import React, {useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';




const UpdateBook = (callback) => {
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
          //  fetch('http://localhost:3000/api/v1/books/' + id, {
            fetch('https://hidden-waters-38928.herokuapp.com/api/v1/books/' + id, {
             body: JSON.stringify(editBookInput),
             method: 'POST',
             }).then(response => {
            setEditBookInput(editBookInput);
            navigate('/books')
            }).catch(err => {
            alert('Something went wrong. Please try again.')
          })
       }


         const handleEdit = (event, id) => {
          fetch('https://hidden-waters-38928.herokuapp.com/api/v1/books/' + editBookInput.id, {
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
                const url = "https://hidden-waters-38928.herokuapp.com/api/v1/books/" + id
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
                }, [id]);


           return (

               <div className = "form-box">
                            <h4> Update Book</h4>
                                <form onSubmit = { handleSubmit }>
                                  <div className = "field1">
                                  <label> Book Title: </label>
                                            <input 
                                                type ="text" 
                                                className = "form-input"
                                                name ="title" 
                                                placeholder="Book Title"
                                                onChange ={handleChange} 
                                                value={editBookInput.title ?? ""} 
                                            />

                                        <label> Book Genre: </label>
                                            <input 
                                                type ="tel" 
                                                className = "form-input"
                                                name ="genre" 
                                                placeholder="Book Genre"
                                                onChange ={handleChange} 
                                                value={editBookInput.genre ?? ""}
                                            />
                                          <label> Book Cover Image URL </label>
                                            <input 
                                                className = "form-input"
                                                name ="image_url" 
                                                placeholder="Book Cover Image URL"
                                                onChange ={handleChange} 
                                                value={editBookInput.image_url ?? ""} 
                                            />
                                        <label> Book Summary: </label>      
                                            <textarea 
                                                type ="text" 
                                                className = "form-input"
                                                name ="body" 
                                                placeholder="Book Summary"
                                                onChange ={handleChange} 
                                                value={editBookInput.body ?? ""}
                                            />
                                    <label> Book Author: </label>
                                            <input 
                                                type ="text" 
                                                className = "form-input"
                                                name ="author" 
                                                placeholder="Author"
                                                onChange ={handleChange} 
                                                value={editBookInput.author ?? ""}
                                            />
                                            </div>

                                            <button 
                                            type = "submit"
                                            id= "submitBtn"
                                            className = "submitBtn"
                                            onClick={(e) => handleEdit(e, editBookInput.id)}> Update Book </button>


                                        </form>
                                    </div>


                              );
                        };

  export default UpdateBook;


