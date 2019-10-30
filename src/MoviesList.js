import React from "react";
import MovieItem from "./MovieItem";
import T from "prop-types";

const MoviesList = ({ movies }) => {
  return (
    <div id="list-container">
      {movies.map(movie => (
        <MovieItem {...{ movie }} key={movie.id} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: T.array.isRequired
};

export default MoviesList;
