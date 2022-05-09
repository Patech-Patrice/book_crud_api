import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';






const Books = () => {


  const backend_url = 'http://localhost:3000/api/v1/books'

  useEffect(() => {
    axios.get(backend_url)
        .then(res => setBooks(res.data))
        .catch(error => console.log(error))
  }, []);

  const [books, setBooks] = useState([]);
   
        
          const [searchGenre, setSearchGenre] = useState([]);
     
          const navigate = useNavigate();
          


       

           const handleDelete = (e, id) => {
          //    fetch('http://localhost:3000/api/v1/books/' + id, {
          //      method: 'DELETE',
          //    }).then(
          //        getBookData()
          //    )
          //    console.log(books)
          //      alert('Book Deleted')  
           }


 

    return (
      <div >

            <label htmlFor="search-form">
               <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-genre"
                  placeholder="Search by genre..."
                  onChange={event => {setSearchGenre(event.target.value)}}
                />
              </label>
          <Link className="nav-links-container" href="" to="/books/create"> Add New Book</Link>
        

        


        
              {books.filter((book)=> {
                if (searchGenre == "") {
                  return book
                }else if (book.genre.toLowerCase().includes(searchGenre.toLowerCase())) {
                  return book
                }
              }).map((book, index) => {
            
               
                  return (
              <div className="card" key={book.id}>
                <div className="card-body">
                <Link className="card-title" href={book.title} to={`/books/${book.id}`}>{book.title}  </Link>
                        <h6> {book.author} </h6>
                        <img  style={{height: '300px', width: '200px'}} src={book.image_url}></img>
                        <p className="card-description">  {book.body} </p>
                        <div className="card-text">
                          <p className="text-muted">{book.genre}</p>
                        </div>
                      
                  
                        <button className="card-button" type="button"onClick={(e) => handleDelete(e, book.id)} >
                              Delete Book
                        </button>


         

                        
              </div>


              </div>
                      );
                })} 
              
            </div>
            
  


    
     
 

  

      
    );
}

export default Books;












