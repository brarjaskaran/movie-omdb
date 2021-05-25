import Search from "../Search/Search";
import "./Navbar.css";
import RadioButtonsGroup from "../RadioBtn/RadioBtn";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__search">
        <i className="fas fa-search"></i>
        <Search />
      </div>

      <div className="navbar__options">
        <div>YEAR</div>
        <div>
          <RadioButtonsGroup />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
