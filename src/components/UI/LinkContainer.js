import { Link } from "react-router-dom";
import classes from "./LinkContainer.module.css"

import arrowIcon from "../../images/arrow-icon.svg";

function LinkContainer(props) {
  return (
    <Link to={props.href} className={classes.container}>
      <h3 className={classes.calcName}>{props.calcName}</h3>
      <img src={arrowIcon} alt=""></img>
    </Link>
  );
}
export default LinkContainer;
