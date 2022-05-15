import MOVIE_DATA from '../../movie-data.json';
import { useContext } from 'react'

import { MoviesContext } from '/Users/patricedrayton/book_crud_api/crud_client/src/context/movies.context.js';




const Movies = () => {

    const { movies } = useContext(MoviesContext);
    return (
      <div>
        {movies.map(({id, title, poster_url, plot, genre, producer, year}) => (
            <div key={id}>
                <h1>{title}</h1>
                <img  style={{height: '300px', width: '200px'}} src={poster_url}></img>
                <p >  {plot} </p>
                <p >  {genre} </p>
                <p > Producer: {producer} </p>
                <p >  {year} </p>
                </div>
        ))}
        </div>
    );
  }

  export default Movies;