import React, {useState, useEffect } from 'react';
import {  useNavigate, Link } from 'react-router-dom';

const NewMovie = () => {
    const [movieInput, setMovieInput] = useState({
        movie: {
          title: '',
          plot: '',
          genre:'',
          poster_url:'', 
          producer: '',
          year: ''
        }
      });

      const navigate = useNavigate();

      useEffect(() => {
        localStorage.setItem('movieInput', JSON.stringify(movieInput));
      }, [movieInput]);

      useEffect(() => {
        const movieInput = JSON.parse(localStorage.getItem('movie input'));
        if (movieInput) {
         setMovieInput(movieInput);
        }
      }, []);

      const handleSubmit = (event) => {
          event.preventDefault();

          alert('Movie Created');
           setMovieInput(movieInput); 
          navigate('/movies');

      }


    
  const handleChange = event => {
    // console.log(event.target.name);
       event.preventDefault();
         setMovieInput(prevState => {
           return {
             movie: {
               ...prevState.movie,
               [event.target.name]: event.target.value,
             }
       };
     });
   };




  return (
    <div>
      This is the new movies  page
      <form onSubmit={handleSubmit} >
Title: <textarea type='text' rows="1" cols="45" name="title" value={movieInput.title} onChange={handleChange} />
<br />
<br />


    Genre: <textarea rows="2" cols="45" name="genre"  value={movieInput.genre} onChange={handleChange}/> 

<br />
<br />
Movie Poster: <textarea rows="2" cols="45" name="poster_url"  value={movieInput.poster_url} onChange={handleChange}/>
<br />
<br />


<br />
Plot: <textarea name="plot" rows="4" cols="50" value={movieInput.plot} onChange={handleChange} />  
<br />
<br />
Producer: <input name="producer"value={movieInput.producer} onChange={handleChange} />
<br />
<br />
Year: <input name="year" value={movieInput.year} onChange={handleChange}/>
< br/>
<br/>

<button onClick={handleSubmit} type="submit">Create Movie</button>
</form>
    
      </div>
  );
}

export default NewMovie;











