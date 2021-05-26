import Search from "../Search/Search";
import "./Navbar.css";
import RadioButtonsGroup from "../RadioBtn/RadioBtn";
import RangeSlider from "../Slider/RangeSlider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__search">
        <i className="fas fa-search"></i>
        <Search data-testid="search-button" />
      </div>

      <div className="navbar__options">
        <div className="navbar__slider">
          <h3 className="year-1970">1970</h3>
          <RangeSlider />
          <h3 className="year-2021">2021</h3>
        </div>
        <div className="navbar__radioBtn">
          <RadioButtonsGroup />
        </div>
        <button className="btn">
          <Link to="/mylist">My List</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
