import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} title={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie__Synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}

function MoviePoster({poster, title}){
  return(
    <img src={poster} alt={title} title={title} className="Movie__Poster"/>
  )
}

function MovieGenre({genre}){
  return(
    <span className="Movie__Genre">{genre}</span>
  )
}

Movie.propTypes = {
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.string.isRequired,
  synopsis: propTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}

MovieGenre.propTypes = {
  poster: propTypes.string.isRequired
}

export default Movie;