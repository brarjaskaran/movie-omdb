import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isloading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("star");
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [movieIdForMyList, setMovieIdForMyList] = useState("");
  const [bookmakedMovieList, setBookmarkedMovieList] = useState([]);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${API_ENDPOINT}&s=${query}&type=${type}`
      );
      setMovies(data.Search);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
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
