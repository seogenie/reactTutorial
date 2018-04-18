import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  state = {}
  
  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(responseOFfetch => responseOFfetch.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {

    

    console.log('(2)render by App')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "로딩중.." }
      </div>
    );
  }
}

export default App;
