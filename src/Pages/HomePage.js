import React from "react";
import MoviesList from "../components/MovieList/MoviesList";
import MovieDetail from "../components/MovieDetail/MovieDetail";

import "./HomePage.css";
import Navbar from "../components/NavBar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <MoviesList className="homepage__movieList" />
        <MovieDetail className="homepage__movieDetail" />
      </div>
    </>
  );
}

export default HomePage;
