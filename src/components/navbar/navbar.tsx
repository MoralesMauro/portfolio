import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Link to="about" smooth>Logo</Link>
        <ul className="navbar-list">
        <li>
            <Link to={"home"} smooth spy activeClass="active">Home</Link>
          </li>
          <li>
            <Link to={"about"} smooth spy activeClass="active">About</Link>
          </li>
          <li>
            <Link to={"projects"} smooth spy activeClass="active">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
