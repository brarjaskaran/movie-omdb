import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isloading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("star");
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [movieIdForMyList, setMovieIdForMyList] = useState("");
  const [bookmakedMovieList, setBookmarkedMovieList] = useState([]);
  const [yearsRange, setYearsRange] = useState([1997, 1998, 1999]);

  // const fetchMovies = async () => {
  //   try {
  //     setIsLoading(true);
  //     const { data } = await axios.get(
  //       `${API_ENDPOINT}&s=${query}&type=${type}&y=${2001}`
  //     );
  //     setMovies(data.Search);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchMovies = async (year) => {
    try {
      const { data } = await axios.get(
        `${API_ENDPOINT}&s=${query}&type=${type}&y=${year}`
      );
      console.log(data);
      // setMovies(data.Search);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getMoviesAsync = () => {
    yearsRange.forEach(async (year) => {
      const movies = await fetchMovies(year);
      console.log(movies);
      setMovies(movies?.Search);
      // console.log(`Async ${movie} is fetched for year ${year}`);
    });

    console.log("start async");
  };

  useEffect(() => {
    getMoviesAsync();
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        isloading,
        movies,
        query,
        setQuery,
        id,
        setId,
        type,
        setType,
        movieIdForMyList,
        setMovieIdForMyList,
        bookmakedMovieList,
        setBookmarkedMovieList,
        yearsRange,
        setYearsRange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
