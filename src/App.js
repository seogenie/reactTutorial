import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movieTitles = [
  "Matrix",
  "22",
  "33",
  "44"
]

const movieImages = [
  "a.jpg",
  "b.jpg",
  "c.jpg",
  "d.jpg"
]


class App extends Component {
  render() {
    return (
      <div className="App">
   <Movie title={movieTitles[0]} poster={movieImages[0]} />
   <Movie title={movieTitles[1]} poster={movieImages[1]} />
   <Movie title={movieTitles[2]} poster={movieImages[2]} />
   <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
