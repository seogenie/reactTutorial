import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    id: 1,
    title: "title1",
    poster: "a.jpg"
  },
  {
    id: 2,
    title: "title2",
    poster: "a2.jpg"
  },
  {
    id: 3,
    title: "title3",
    poster: "a3.jpg"
  },
  {
    id: 4,
    title: "title4",
    poster: "a4.jpg"
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
