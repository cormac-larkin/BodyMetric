import { useRef } from "react";

import calculatorIcon from "../../images/calculator-icon.svg";
import PageHeader from "../PageHeader";
import classes from "./SharedCalculatorStyles.module.css";

function FFMIPage(props) {
  const heightInput = useRef();
  const weightInput = useRef();
  const bodyFatInput = useRef();
  const result = useRef();

  function submitHandler(event) {
    event.preventDefault();

    var height = heightInput.current.value;
    var weight = weightInput.current.value;
    var bodyFat = bodyFatInput.current.value;

    var fatFreeMass = weight * (1 - bodyFat / 100);
    var ffmi = fatFreeMass / (height / 100) ** 2;

    result.current.innerText = `Your FFMI is ${Math.round(ffmi)}`;
  }

  return (
    <>
      <PageHeader
        image={calculatorIcon}
        title="FFMI Calculator"
        description=" 'FFMI' or Fat Free Mass Index is a measure of how much muscle you are carrying for your height and weight. A higher FFMI indicates greater muscle development. The average male scores around 19 and the average female around 15. How do you stack up?"
      />
      <div className={classes.contentWrapper}>
        <form className={classes.form}>
          <h3 className={classes.prompt}>
            Please enter your information below:
          </h3>
          <label className={classes.label}>Height (cm)</label>
          <input ref={heightInput} className={classes.input} type="number" />
          <br />
          <label className={classes.label}>Weight (kg)</label>
          <input ref={weightInput} className={classes.input} type="number" />
          <br />
          <label className={classes.label}>Body Fat %</label>
          <input ref={bodyFatInput} className={classes.input} type="number" />
          <br />
          <button onClick={submitHandler}>Submit</button>
        </form>
        <div className={classes.results}>
          <h3 ref={result}></h3>
        </div>
      </div>
    </>
  );
}

export default FFMIPage;
