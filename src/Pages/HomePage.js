import React from "react";
import MoviesList from "../components/MovieList/MoviesList";
import MovieDetail from "../components/MovieDetail/MovieDetail";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <MoviesList />
      <MovieDetail />
    </div>
  );
}

export default HomePage;
