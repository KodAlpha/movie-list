import MovieListEntry from './MovieListEntry.jsx'
import React from 'react';

var MovieList = (props) => (
  <ul>
    {props.movies.map((movie) =>
    <MovieListEntry movie = {movie} key = {movie.title.replace(' ', '')}/>
    )}
  </ul>
);

export default MovieList;
