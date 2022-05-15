import { createContext, useState } from 'react';

import MOVIES from '../movie-data.json';

export const MoviesContext = createContext({
    movies: [],
});


export const MoviesProvider = ({children}) => {
    const [movies, setMovies] = useState(MOVIES);
    const value = { movies };


    return (
        <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
    );
}
