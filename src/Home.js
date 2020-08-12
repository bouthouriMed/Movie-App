import React, {Component} from 'react';
import './App.css';
import SearchMovie from './components/SearchMovie';
import MovieList from './components/MovieList';



class Home extends Component {
  
  state = {
    search :'empty',
    movies : [
      {imageSrc:'moviePic/joker.jpg',title:"The joker",content:"blablabal",id:1, rating:3},
      {imageSrc:'moviePic/fast.jpg',title:"Fast & Ferious",content:"blabla",id:2, rating:4},
      {imageSrc:'moviePic/benjamin.jpg',title:"The curious case of Benjamin Button",content:"blabla",id:3, rating:3},
      {imageSrc:'moviePic/avengers.jpg',title:"Avengers",content:"blablbla",id:4, rating:2},
      {imageSrc:'moviePic/thor.jpg',title:"Thor",content:'"blablbla"',id:5, rating:1},
      {imageSrc:'moviePic/spiderman.jpg',title:"Spider Man",content:"blablbla",id:6, rating:5}
    ],
    currentMovies : []
  }

  componentWillMount () {
    this.setState({
      currentMovies : this.state.movies
    })
  }

  handleSearch = (search,rate) => {
    this.setState({
      search : search
    })
    let data =this.state.movies.filter((movie) => {
      return movie.title.includes(search) && movie.rating === rate}
    )

    //  this.setState({
    //      currentMovies : data
    //    })
console.log(data,search)
     data.length  ? ( this.setState({
      currentMovies : data
    })) : ( this.setState({
      currentMovies : this.state.movies
    }))
    
  }

  handleAdd = (imageSrc,title,description,rating) => {
    const newMovie = {imageSrc:imageSrc,title:title,content:description,id:Math.random(),rating:rating}
    const moviesA = [...this.state.movies,newMovie]
    this.setState({
      movies:moviesA
    })
    
  }

  render() {
  return (
      <div className="App-container">
          
          <div className="header">
            <h1 className="title"> Movie app </h1>
            <SearchMovie handleSearch={this.handleSearch} handleAdd={this.handleAdd}/>
          </div>
          <br/>   <br/>   <br/>
          
          <main className="main">   
            <div className="main-container"> 
              <MovieList currentMovies={this.state.currentMovies} movies={this.state.movies} search={this.state.search} />   
            </div>
          </main>  
      </div>
    );
  }

}

export default Home;
