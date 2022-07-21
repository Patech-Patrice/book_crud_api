import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';




const Books = () => {

  const backend_url = 'http://localhost:3000/api/v1/books'


  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");



  const navigate = useNavigate();



       useEffect(() => {
            axios.get(backend_url)
                .then(res => setBooks(res.data))
                .catch(error => console.log(error))
          }, []);


          const handleDelete = (id) => {
            fetch( `http://localhost:3000/api/v1/books/` + id, {
              method: 'DELETE'
            }).then(() => {
              alert('Book deleted!');
              navigate('/books');
            }).catch(err => {
              console.error(err)
            });
          }




          
        
           return (
                    <div>
                      <input
                        type="search"
                         placeholder="Search by genre..."
                         onChange={event => {setQuery(event.target.value)}} />
                           <br /> <br />
      
                           <Button href="/books/new">Add New Book</Button> 
                              <CardGroup>
                                   {books.filter((book)=> {
                                      if (query === "") {
                                        return book
                                      }else if (book.genre.toLowerCase().includes(query.toLowerCase())) {
                                        return book
                                       }
                                     }).map((book, index) => {
                                        return (
                                          <div key={book.id}>
                                            <Link className="card-title" href={book.title} to={`/books/${book.id}`}>{book.title}  </Link>
                                            <br/>
                                              <Card>
                                                <Card.Img variant="top" style={{ width: '20rem', alignSelf: 'center' }} src={book.image_url}/>
                                                      <Card.Body>    
                                                          <Card.Title>Author: {book.author}</Card.Title>
                                                            <Card.Text>{book.body} </Card.Text>       
                                                            </Card.Body>
                                                          <Card.Footer>
                                                            <small className="text-muted"> {book.genre} </small>
                                                            <br/>
                                                     
                                                          {/* <Link to={`/`} onClick={() => {handleDelete(book.id)}}> Delete Book </Link> */}

                                                         <Button href="/books" onClick={() => {handleDelete(book.id)}} >Delete Book</Button> 
                                                     
                        
                                                          </Card.Footer>
                                                </Card> 
                                                  <br /><br />     
                                                </div>
                                             );
                                         })} 
                               </CardGroup>
                            </div>

                            );
                        }

export default Books;












