import React from "react";
import "./MovieList.css";
import { useGlobalContext } from "../../context";

function MoviesList() {
  const { isLoading, movies } = useGlobalContext();

  return (
    <div className="moviesList">
      <h3 className="movieList__result">{movies?.length} RESULTS</h3>
      <div className="moviesList__list">
        {movies?.map((movie) => (
          <article
            onClick={() => console.log("hello")}
            className="moviesList__singleMovie"
            key={movie.imdbID}
          >
            <img
              className="moviesList__image"
              src={movie.Poster}
              alt={movie.Title}
            />
            <div className="moviesList__info">
              <h2 className="moviesList__title">{movie.Title}</h2>
              <span className="moviesList__year">{movie.Year}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
