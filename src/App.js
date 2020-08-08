import React, {Component} from 'react';
import './App.css';
import SearchMovie from './components/SearchMovie';
import MovieList from './components/MovieList';


class App extends Component {
  
  state = {
    search :"",
    movies : [
      {imageSrc:'moviePic/joker.jpg',title:"The joker",content:"blablabal",id:1},
      {imageSrc:'moviePic/fast.jpg',title:"Fast & Ferious",content:"blabla",id:2},
      {imageSrc:'moviePic/benjamin.jpg',title:"The curious case of Benjamin Button",content:"blabla",id:3},
      {imageSrc:'moviePic/avengers.jpg',title:"Avengers",content:"blablbla",id:4},
      {imageSrc:'moviePic/thor.jpg',title:"Thor",content:'"blablbla"',id:5},
      {imageSrc:'moviePic/spiderman.jpg',title:"Spider Man",content:"blablbla",id:6}
    ]
  }

  handleSearch = (search) => {
    this.setState({
      search : search
    })
    
  }

  handleAdd = (imageSrc,title,description) => {
    const newMovie = {imageSrc:imageSrc,title:title,content:description,id:Math.random()}
    const moviesA = [...this.state.movies,newMovie]
    this.setState({
      movies:moviesA
    })
    console.log(this.state.movies)
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
            <MovieList movies={this.state.movies} search={this.state.search} />   
          </div>
          </main>  

      </div>
    );
  }

}

export default App;
