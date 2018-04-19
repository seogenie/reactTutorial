import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  state = {}
  
  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie 
        title={movie.title} 
        poster={movie.medium_cover_image} 
        genres={movie.genres} 
        key={movie.id} 
        synopsis={movie.synopsis} 
      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(responseOFfetch => responseOFfetch.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    console.log('(2)render by App')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "로딩중....." }
      </div>
    );
  }
}

export default App;
