import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  
  state = { }

  componentWillMount(){
    console.log('(1)will mount')
  }

  componentDidMount(){
    console.log('(3)did mount')

    setTimeout(()=> {
      this.setState({
        movies: [
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
                    {
            title: "add",
            poster:"gh.jpg"
          }
        ]
      })
    }, 2000)

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
