import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./HamburgerMenu.module.css";

function HamburgerMenu(props) {
  const checkBox = useRef();

  function menuCloser() {
    checkBox.current.checked = false;
  }

  return (
    <div className={classes.menuToggle}>
      <input ref={checkBox} type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul className={classes.menu}>
        <li>
        <Link to="/" onClick={menuCloser}>Home</Link>
        </li>
        <li>
          <Link to="/calculators" onClick={menuCloser}>
            Calculators
          </Link>
        </li>
        <a href="#">
          <li>Info</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
        <a href="https://erikterwan.com/">
          <li>Show me more</li>
        </a>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
