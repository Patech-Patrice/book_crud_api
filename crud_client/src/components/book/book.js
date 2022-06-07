import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';



const Book = (props) => {


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
      
        setTitle(book.title)
        setBody(book.body)
        setGenre(book.genre)
        setImg(book.image_url)
        setAuthor(book.author)
        console.log(book.id);
        
          }catch (error){
            alert("error", error);
          }      
    };
      fetchData();
    
}, [id]);



return (

                 <div >  
                   <br/>   
                     <Card style={{ width: '80rem' }}>
                        <Card.Img variant="top" src={img} />
                            <Card.Body>
                              <Card.Title style={{color: 'black'}}>{title}</Card.Title><br/>
                              <Card.Subtitle  style={{color: 'red'}}>{genre}</Card.Subtitle>
                              <Card.Subtitle style={{color: 'green'}}>{author}</Card.Subtitle>
                              <Card.Text>{body}</Card.Text>
                         
                              <Card.Link href={`/books/update/` + id }> Edit Book</Card.Link>
                              
                            </Card.Body>
                    </Card>
                </div>
  
      )
}

 
export default Book;


   
