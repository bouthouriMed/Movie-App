// import React, {useEffect,useState} from 'react'
// import { Link } from 'react-router-dom';

// function SimilarMovies({match}) {

//     const [similarMovies,setSimilarMovies] = useState([])
  
//     const getSimilarMovies =() => {
//         fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/similar?api_key=5155abb095b67ea1829281b0d6a9fd75&language=en-US&page=1`)
//         .then( response => response.json())
//          .then(data => setSimilarMovies(data.results) );
//          console.log(similarMovies)
         
        
//          }

//      useEffect(() => {
//        getSimilarMovies()
       
//      }, [])
//      console.log(similarMovies)
    
    //  const moviesList = similarMovies.map(movie=> {
    //      return (
    //          <div className="similar-movies" key={movie.id}> 
                 
    //              <Link to={`/${movie.id}`}> <span className="similar-movie-title">{movie.title}</span> </Link>
               
    //              <div>
    //                 <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt=""/>
    //             </div>
               
    //          </div>
    //      )
    //  })
 
//     return (
        
//         <div >
//             {/* {moviesList} */}
//         </div>
//     )
// }

// export default SimilarMovies
