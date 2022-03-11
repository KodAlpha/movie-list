import React from 'react';

var MovieListEntry = (props) => (
  <li>{props.movie.title} <button>remove</button> <button>watch</button></li>
)

export default MovieListEntry;