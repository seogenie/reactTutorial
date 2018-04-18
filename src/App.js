import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    title: "title1",
    poster: "a.jpg"
  },
  {
    title: "title2",
    poster: "a2.jpg"
  },
  {
    title: "title3",
    poster: "a3.jpg"
  },
  {
    title: "title4",
    poster: "a4.jpg"
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
