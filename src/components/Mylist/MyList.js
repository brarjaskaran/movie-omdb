import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { API_ENDPOINT } from "../../context";
import "./MyList.css";
import axios from "axios";
const url = "https://picsum.photos/id/237/200/300";

const MyList = () => {
  const { bookmakedMovieList, setBookmarkedMovieList, id, movieIdForMyList } =
    useGlobalContext();

  useEffect(() => {
    fetchMovieforBookmark(id);
  }, []);

  const movieList = [];

  console.log(movieList);
  console.log(movieIdForMyList);

  const fetchMovieforBookmark = async (id) => {
    try {
      const { data } = await axios.get(`${API_ENDPOINT}&i=${id}`);
      movieList.push(data);
      setBookmarkedMovieList(movieList);
    } catch (error) {
      console.log(error);
    }
  };

  localStorage.setItem(
    "bookmakedMovieList",
    JSON.stringify(bookmakedMovieList)
  );

  var storage = JSON.parse(localStorage.getItem("bookmakedMovieList"));

  return (
    <div>
      <button className="btn">
        <Link to="/">Back To Homepage</Link>{" "}
      </button>

      <div className="myList__list">
        {storage.map((item) => {
          const { Title: title, Year: year, Poster: poster } = item;
          return (
            <article className="myList__singleMovie" key={title}>
              <img
                className="myList__image"
                src={poster === "N/A" ? url : poster}
                alt={title}
              />
              <div className="myList__info">
                <h2 className="myList__title">{title}</h2>
                <span className="myList__year">{year}</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default MyList;
