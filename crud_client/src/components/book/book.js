import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditBook from '../../components/edit-book/edit-book.js';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Book = (props) => {

  const [book, setBook] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [genre, setGenre] = useState("");
 
  const [img, setImg] = useState(null);
  const [author, setAuthor] = useState('');


  const { id } = useParams();

  

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

      <div key={book.id}>     
                          <Card style={{ width: '80rem' }}>
                          <Card.Img variant="top" src={img} />
                            <Card.Body>
                              <Card.Title style={{height: '', width: ''}}>{title}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{genre}</Card.Subtitle>
                              <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                             <Card.Text>
                                {body}
                              </Card.Text>
                        <Card.Link href={`/books/update/` + id }> Edit Book</Card.Link>
                      </Card.Body>
                    </Card>

        </div>
  
      )
}

 
export default Book;


   
