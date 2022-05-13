import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';



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
      
        setTitle(book.title)
        setBody(book.body)
        setGenre(book.genre)
        setImg(book.image_url)
        setAuthor(book.author)
        setBook(book.id);
        console.log(book.body);
        console.log(book.id);
    
          }catch (error){
            alert("error", error);
          }      
    };
      fetchData();
    
}, [id]);


const handleDelete = id => {
  console.log(id);
  fetch( `http://localhost:3000/api/v1/books/`+ id, {
    method: 'DELETE'
  }).then(() => {
    // setBook();
     console.log();
  }).catch(err => {
    console.error(err)
  });
}











// const handleDelete = (e, id) => {
//   fetch('http://localhost:3000/api/v1/books/' + id, {
//     method: 'DELETE',
//   }).then(
//       setBook();
//   )
//   console.log(books)
//     alert('Book Deleted')  
// });
// }

const deleteBook = (id) => {
  console.log(id);
  alert(id);
}








return (

      <div >     
                          <Card style={{ width: '80rem' }}>
                          <Card.Img variant="top" src={img} />
                            <Card.Body>
                              <Card.Title style={{height: '', width: ''}}>{title}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{genre}</Card.Subtitle>
                              <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                             <Card.Text>
                                {body}
                                {console.log(book.id)}
                             {console.log("From React code: book.id= " + book.id)}
                              </Card.Text>
                        <Card.Link href={`/books/update/` + id }> Edit Book</Card.Link>

                        <button className="card-button" type="button"onClick={() => handleDelete(book.id)} >
                                    Delete Book
                              </button> 
                              <button onClick={()=> deleteBook(book.id)}>Delete</button>
                      </Card.Body>
                    </Card>

        </div>
  
      )
}

 
export default Book;


   
