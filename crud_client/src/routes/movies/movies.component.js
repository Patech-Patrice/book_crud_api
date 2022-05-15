
import { useContext, useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import { MoviesContext } from '/Users/patricedrayton/book_crud_api/crud_client/src/context/movies.context.js';




const Movies = (props) => {

    const { movies } = useContext(MoviesContext);


 

    return (
		<div className='container-fluid movie-app'>
        
	    <Link className="card-title"  to={`/movies/new`}> Add New Movie  </Link> <br/><br/>
    
    {movies.map((movie, index) => (
				<div className='row'>
                      <Link className="card-title" href={movie.title} to={`/movies/${movie.id}`}>{movie.title}  </Link>
                  
         
{/*                 
                    <p>{movie.title}</p> */}
                   
                    <p className="text-muted">{movie.plot}</p>
                     <p className="text-muted">{movie.producer}</p> 
                    <p className="text-muted">{movie.genre}</p>
                    <p className="text-muted">{movie.year}</p>
                  
                    <img  style={{height: '300px', width: '200px'}} src={movie.poster_url}></img>
					
				</div>
			))}

         


		</div>
    
            );
         }
        
          export default Movies;

