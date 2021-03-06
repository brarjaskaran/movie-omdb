import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { API_ENDPOINT } from "../../context";
import "./MovieDetail.css";
import { v4 as uuidv4 } from "uuid";

const url = "https://picsum.photos/id/237/200/300";

let ids = [];
function MovieDetail() {
  const [movie, setMovie] = useState({});
  const [bookmark, setBookmark] = useState(false);

  const { id, setMovieIdForMyList } = useGlobalContext();

  const {
    Actors: actors,
    Genre: genre,
    Plot: plot,
    Rated: rated,
    Runtime: runtime,
    Title: title,
    Year: year,
    Poster: poster,
    Ratings: ratings,
  } = movie;

  // fetch single movie from database for the detail
  const fetchMovie = async (id) => {
    try {
      const { data } = await axios.get(`${API_ENDPOINT}&i=${id}`);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  // for watchlist

  const handleBookmarkBtn = () => {
    setBookmark(!bookmark);
    ids.push(id);
    setMovieIdForMyList(ids);
  };

  console.log(ids);

  return (
    <div className="movieDetail">
      <div className="movieDetail__first">
        <img
          className="movieDetail__img"
          src={poster === "N/A" ? url : poster || url}
          alt={title}
        />
        <div className="movieDetail__info">
          <button
            onClick={handleBookmarkBtn}
            className="movieDetail__watchlist"
          >
            <i className={bookmark ? "fas fa-bookmark" : "far fa-bookmark"}></i>
            Watchlist
          </button>

          <h2 className="movieDetail__title">
            {title || "Please Select a movie from List"}
          </h2>
          <div className="movieDetail__meta">
            <span className="movieDetail__rated span">{rated || "A++"}</span>
            <span className="span">{year}</span>
            <span className="span">{genre}</span>
            <span className="span">{runtime}</span>
          </div>
          <h2 className="movieDetail__actors">{actors}</h2>
        </div>
      </div>

      <div className="movieDetail__second">
        <h2 className="movieDetail__plot">{plot}</h2>
      </div>
      <div className="movieDetail__third">
        {ratings?.map((rating) => {
          const { Source: source, Value: value } = rating;
          return (
            <div className="movieDetail__ratings" key={uuidv4()}>
              <h3 className="movieDetail__value">{value}</h3>
              <h3 className="movieDetail__source">{source}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieDetail;
