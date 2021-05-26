import React from "react";
import { Link } from "react-router-dom";
// import { useGlobalContext } from "../../context";
import "./MyList.css";
const url = "https://picsum.photos/id/237/200/300";

const MyList = () => {
  // const { bookmakedMovieList } = useGlobalContext();

  var storage = JSON.parse(localStorage.getItem("bookmakedMovieList"));

  console.log(storage);

  // const { Title: title, Year: year, Poster: poster } = bookmakedMovieList;

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
