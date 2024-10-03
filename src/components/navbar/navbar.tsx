import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { ThemeContext } from "../../context/context";
import ThemeToggler from "../theme-toggler/theme-toggler";

type Props = {
  handleThemeChange: () => void;
};

const Navbar = ({ handleThemeChange }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`${theme} navbar-container`}>
      <div className="navbar-wrapper">
        <Link to={"home"} smooth>
          Mauro
        </Link>
        <ul className="navbar-list">
          <li>
            <Link to={"home"} smooth spy activeClass="active"  className={`${theme}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"about"} smooth spy activeClass="active" className={`${theme}`}>
              About
            </Link>
          </li>
          <li>
            <Link to={"projects"} smooth spy activeClass="active" className={`${theme}`}>
              Projects
            </Link>
          </li>
        </ul>
        <ThemeToggler handleThemeChange={handleThemeChange}/>
      </div>
    </div>
  );
};

export default Navbar;
