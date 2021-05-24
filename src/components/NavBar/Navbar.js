import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__search">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search..." className="navbar__input" />
      </div>

      <div className="navbar__options">
        <div>YEAR</div>
        <div>
          <div>TYPE</div>
          <input type="radio" name="Any" id="any" placeholder="" /> Any
          <input type="radio" name="Any" id="movie" placeholder="" />
          Movies
          <input type="radio" name="Any" id="series" placeholder="" />
          Series
          <input type="radio" name="Any" id="episodes" placeholder="" />
          Episodes
        </div>
      </div>
    </div>
  );
}

export default Navbar;
