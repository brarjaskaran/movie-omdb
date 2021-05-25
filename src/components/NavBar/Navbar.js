import Search from "../Search/Search";
import "./Navbar.css";
import RadioButtonsGroup from "../RadioBtn/RadioBtn";
import RangeSlider from "../Slider/RangeSlider";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__search">
        <i className="fas fa-search"></i>
        <Search />
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
      </div>
    </div>
  );
}

export default Navbar;
