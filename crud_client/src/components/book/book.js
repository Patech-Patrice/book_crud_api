import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditBook from '../../components/edit-book/edit-book.js';

const Book = (props) => {

  const [book, setBook] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [genre, setGenre] = useState("");
 
  const [img, setImg] = useState(null);
  const [author, setAuthor] = useState('');







  const { id } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
    
    const url = "http://localhost:3000/api/v1/books/" + id

    const fetchData = async() => {
      try{
        const response = await fetch(url);
        const book = await response.json();
         console.log(book);
      
        setTitle(book.title)
        setBody(book.body)
        setGenre(book.genre)
        setImg(book.image_url)
        setAuthor(book.author)
    
          }catch (error){
            alert("error", error);
          }      
    };
      fetchData();
    
}, []);








return (
      <div className='book-body-container' key={book.id} > 
          <div>
     
        </div>
   
            <h3>{title}</h3>
            <h6>{author}</h6>
            <div className="card-text">
                <small className="text-muted">{genre}</small>
                <p>{body}</p>
            </div>
            <div className="col-md-4">
                    {img && <img  src={img} style={{height: '300px', width: '200px'}} ></img>}
            </div>
          
         
         
            <button>
            <Link className='update' to={`/books/update/` + id }>Edit</Link>
            {/* <Link className=""  to={`/books/${book.id}`}> Edit Book  </Link> */}
            </button>


      </div>
  
      )
}

 
export default Book;


   
