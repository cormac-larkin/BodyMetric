import { Link } from "react-router-dom";

import classes from "./NavBar.module.css";
import logo from "../../images/home-icon.svg";
import HamburgerMenu from "../HamburgerMenu";

function NavBar(props) {
  return (
    <nav className={classes.navBar}>

      <div className={classes.hamburgerIconWrapper}>
        <HamburgerMenu />
      </div>

      <ul className={classes.navList}>
        <li className={classes.navLogo}>
          <Link to="/"><img className={classes.logo} src={logo} alt=""></img></Link>
          <Link to="/">BodyMetric</Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/calculators">Calculators</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
