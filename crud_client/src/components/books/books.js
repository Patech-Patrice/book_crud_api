import { useState, useEffect, useNavigate } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';








const Books = () => {


  const backend_url = 'http://localhost:3000/api/v1/books'



  const [books, setBooks] = useState([]);
  const [searchGenre, setSearchGenre] = useState([]);

  // const deleteBook = (id) => {
  //   console.log(books.id);
  //     alert("Delete button pressed")
  // }

  // const deleteBook = (e, id) => {
  //   fetch('http://localhost:3000/api/v1/books/' + id, {
  //     method: 'DELETE',
  //   }).then(() => {
  //    console.log(books);
  //     setBooks();
  //    alert('Book Deleted');
  
  //    // navigate('/books'); 
  //   })
  // }



          

          useEffect(() => {
            axios.get(backend_url)
                .then(res => setBooks(res.data))
                .catch(error => console.log(error))
          }, []);

    

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
                    <Row xs={1} md={2} className="g-4">
                  
                      <Col>
                    <CardGroup>
                 
                <Link className="nav-links-container" href="" to="/books/new"> Add New Book</Link>

{/*                 
                    {books.filter((book)=> {
                      if (searchGenre == "") {
                        return book
                      }else if (book.genre.toLowerCase().includes(searchGenre.toLowerCase())) {
                        return book
                      } */}
                   {books.map((book, index) => {
                        return (
                    <div className="card" key={book.id}>
                       <Link className="card-title" href={book.title} to={`/books/${book.id}`}>{book.title}  </Link>

                      <Card>
                        <Card.Img variant="top" src={book.image_url}/>
                          <Card.Body>    
                            <Card.Title>{book.author}</Card.Title>
                          <Card.Text>
                           {book.body}
                          </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                          <small className="text-muted">{book.author} <br/> </small>
                          <small className="text-muted"> {book.genre} </small>
                        </Card.Footer>
                

                           
                       </Card>    
                    </div> 
                            );
                      })
                      
                      } 

                    </CardGroup>
                    </Col>
      
                    </Row>


 
                  </div>

          );
      }

export default Books;












