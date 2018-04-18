import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>안녕 이건 무비야</h1>
      </div>
    );
  }
}

class MoviePoster extends Component{
  render() {
    return(
      <img src="http://www.obaltan.net/bbs/data/poster/sweetlife2345.jpg"/>
    )
  }
}

export default Movie;