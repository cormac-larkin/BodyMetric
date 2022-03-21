import { useRef } from "react";

import calculatorIcon from "../../images/calculator-icon.svg";
import PageHeader from "../PageHeader";
import classes from "./SharedCalculatorStyles.module.css";

function BMRPage(props) {
  const heightInput = useRef();
  const weightInput = useRef();
  const genderInput = useRef();
  const ageInput = useRef();
  const result = useRef();

  function submitHandler(event) {
    event.preventDefault();

    var height = heightInput.current.value;
    var weight = weightInput.current.value;
    var gender = genderInput.current.value;
    var age = ageInput.current.value;
    var bmr;

    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    result.current.innerText = `Your BMR is ${Math.round(bmr).toLocaleString()} kCal per day`;
  }

  return (
    <>
      <PageHeader
        image={calculatorIcon}
        title="BMR Calculator"
        description="'BMR' or Basal Metabolic Rate is the minimum amount of calories your body needs per day to function properly. 
        Knowing your BMR is a great first step in determining your caloric needs!"
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
          <label className={classes.label}>Gender</label>
          <select ref={genderInput} className={classes.select}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <label className={classes.label}>Age</label>
          <input ref={ageInput} className={classes.input} type="number" />
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

export default BMRPage;
