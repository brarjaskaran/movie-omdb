import React from "react";
import { useGlobalContext } from "../../context";
import "./Search.css";

const Search = () => {
  const { query, setQuery } = useGlobalContext();

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        className="search__input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
