import React from 'react';
import MovieCard from './MovieCard';

function MovieList({movies,search}) {

    const movieList = movies.map( movie => {

    if(movie.title.toLowerCase().indexOf(search.toLowerCase()) ===-1 && search !=="") {
        return null ;
    }
        return (
        <section className="card" key={movie.id}>
          <MovieCard movie={movie} />
        </section>
        )
    })

    return (
    <div className="movie-list">
         {movieList}
    </div>
    )
}

export default MovieList
