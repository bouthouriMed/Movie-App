import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';



function MovieList({movies,search}) {

    const movieList = search.length ?  (movies.filter(movie=>movie.poster_path && movie.overview ).map( movie => {

   
        return (
        <section className="card" key={movie.id}>
            <Link className="link" to={`/${movie.id}`}> <MovieCard movie={movie} /> </Link>
                
        </section>
        )
    }) 
    )  : (
        <div> No movie searched </div>
    )

    return (
    <div className="movie-list">
         {movieList}       
    </div>
    )
}

export default MovieList
