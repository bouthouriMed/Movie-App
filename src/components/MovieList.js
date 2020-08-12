import React from 'react';
import MovieCard from './MovieCard';



function MovieList({currentMovies}) {


    const movieList = currentMovies.map( movie => {

    // if(movie.title.toLowerCase().indexOf(search.toLowerCase()) ===-1 && search !==""  ) {
    //     return null ;
    // }
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
