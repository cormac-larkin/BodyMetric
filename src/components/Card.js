import { Link } from "react-router-dom";

import classes from "./Card.module.css";

import arrowIcon from "../images/arrow-icon.svg";

function Card(props) {
  return (
    <div className={classes.card}>
      <h2 className={classes.title}>{props.title}</h2>
      <hr />
      <div className={classes.content}>
        <p className={classes.description}>{props.description}</p>
        <hr className={classes.hr}></hr>
        <img className={classes.arrow} src={arrowIcon} alt=""></img>
      </div>
    </div>
  );
}

export default Card;
