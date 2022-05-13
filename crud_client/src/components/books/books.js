import { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Books = () => {

  const backend_url = 'http://localhost:3000/api/v1/books'


  const [books, setBooks] = useState([]);
  const [searchGenre, setSearchGenre] = useState([]);
  const navigate = useNavigate();

  // const { id } = useParams();

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
                            <br />
                          </label>
                          <br />
                          <Row xs={1} md={2} className="g-4">
                            <Col>
                            <br/><br />
                          <CardGroup>
                              <Link className="nav-links-container" href="" to="/books/new"> Add New Book</Link><br />
                              <br />

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
                                                <small className="text-muted"> {book.genre} </small>
                                                <br/>
                                                {/* <Button to={`/books`} onClick={() => {handleDelete(book.id)}}> Delete Book </Button> */}
                                                <Link to={`/home`} onClick={() => {handleDelete(book.id)}}> Delete Book </Link>
                                              </Card.Footer>

                                            
                                             
                                        




                                        </Card> 
                                        <br />
                                        <br />   
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












