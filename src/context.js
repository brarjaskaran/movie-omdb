import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isloading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("star");

  console.log(movies);

  const fetchMovies = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(`${API_ENDPOINT}&s=${query}`);
      console.log(data);

      setMovies(data.Search);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <AppContext.Provider value={{ isloading, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
