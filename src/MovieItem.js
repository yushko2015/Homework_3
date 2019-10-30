import React from "react";
import T from "prop-types";
import "../src/styles.css";

const MovieItem = ({ movie }) => {
  const imagePath =
    "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.backdrop_path;
  return (
    <div className="card vertical-card">
      <img alt={movie.name} className="vertical-card-image" src={imagePath} />
      <div className="card-title">
        <h2>{movie.name}</h2>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: T.shape({
    id: T.number.isRequired,
    name: T.string.isRequired
  }).isRequired
};

export default MovieItem;
