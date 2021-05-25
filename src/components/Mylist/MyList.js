import React from "react";
import { Link } from "react-router-dom";

const MyList = () => {
  return (
    <div>
      <h1>Mylist</h1>
      <button className="btn">
        <Link to="/">Back To Homepage</Link>{" "}
      </button>
    </div>
  );
};

export default MyList;
