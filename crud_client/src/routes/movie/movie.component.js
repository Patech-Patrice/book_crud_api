
import { useContext, useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import { MoviesContext } from '/Users/patricedrayton/book_crud_api/crud_client/src/context/movies.context.js';




const Movie = (props) => {

    const { movies } = useContext(MoviesContext);
    console.log(movies);
    const [movie, setMovie] = useState("");
    const [producer, setProducer] = ("");
    const [title, setTitle] = useState("");
    const [plot, setPlot] = useState("");
    const [genre, setGenre] = useState("");
   
    const [posterURL, setPosterURL] = useState(null);
    const [author, setAuthor] = useState('');

 

    return (
		<div className='container-fluid movie-app' key={movie.id} >
	

          This is the page for a single movie
         


		</div>
            );
    }
     
        
          export default Movie;

















   

  
     
  

