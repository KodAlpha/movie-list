import React from 'react';
import movies from './Input.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieList: movies
    }
  }

  handleSubmit(input) {
    var filtedMovies = movies.filter(movieObj => movieObj.title.toLowerCase().includes(input.toLowerCase()));
      this.setState({movieList: filtedMovies})
      console.log(filtedMovies);
  }

  render() {
    return (
  <div>
    <h1>MovieList</h1>
    <div>
      <Search submit={this.handleSubmit.bind(this)}/>
      <MovieList movies={this.state.movieList} />
  </div>
  </div>
  )
  };
}


      // <ul>
      //   <li>Mean Girls</li>
      //   <li>Hackers</li>
      //   <li>The Grey</li>
      //   <li>Sunshine</li>
      //   <li>Ex Machina</li>
      // </ul>
export default App;