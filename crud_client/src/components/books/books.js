import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';



const Books = () => {

  const backend_url = 'http://localhost:3000/api/v1/books'


  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const currentUser = useContext(AuthContext);
  // console.log(query);
  // console.log(books.filter(book => book.genre.toLowerCase().includes("fa")));
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
                     <input
                        type="search"
                        placeholder="Search by genre..."
                        onChange={event => {setQuery(event.target.value)}} />
                          <br /> <br />
                      <Row xs={1} md={2} className="g-4">
                          <Col>
                             <br/><br />
                             <CardGroup>    
                               <Link className="nav-links-container" href="" to="/books/new"> Add New Book</Link>
                                 <br />
                                    {books.filter((book)=> {
                                      if (query === "") {
                                        return book
                                      }else if (book.genre.toLowerCase().includes(query.toLowerCase())) {
                                        return book
                                       }
                                     }).map((book, index) => {
                                        return (
                                          <div className="card" key={book.id}>
                                       
                                            <Link className="card-title" href={book.title} to={`/books/${book.id}`}>{book.title}  </Link>
                                            <br/>
                                              <Card>
                                                <Card.Img variant="top" src={book.image_url}/>
                                                      <Card.Body>    
                                                          <Card.Title>Author: {book.author}</Card.Title>
                                                            <Card.Text>{book.body} </Card.Text>       
                                                            </Card.Body>
                                                          <Card.Footer>
                                                            <small className="text-muted"> {book.genre} </small>
                                                            <br/>
                                                            { currentUser == book.id &&  (
                                                          <Link to={`/`} onClick={() => {handleDelete(book.id)}}> Delete Book </Link>
                                                           )}
                        
                                                          </Card.Footer>
                                                </Card> 
                                                  <br /><br />     
                                                </div>
                                                     );
                                                  })} 
                                            </CardGroup>
                                       </Col>
                                 </Row> 
                        </div>

                            );
                        }

export default Books;












