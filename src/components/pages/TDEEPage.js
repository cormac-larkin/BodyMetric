import { useRef } from "react";

import calculatorIcon from "../../images/calculator-icon.svg";
import PageHeader from "../PageHeader";
import classes from "./SharedCalculatorStyles.module.css";

function TDEEPage(props) {
  const heightInput = useRef();
  const weightInput = useRef();
  const genderInput = useRef();
  const ageInput = useRef();
  const activityInput = useRef();
  const result = useRef();

  function submitHandler(event) {
    event.preventDefault();

    var height = heightInput.current.value;
    var weight = weightInput.current.value;
    var gender = genderInput.current.value;
    var age = ageInput.current.value;
    var activityLevel = activityInput.current.value;

    var activityMultiplier;
    var bmr;

    // Determine the activity multiplier from the User's "Activity Level" input
    switch (activityLevel) {
      case "sedentary":
        activityMultiplier = 1.2;
        break;
      case "light":
        activityMultiplier = 1.375;
        break;
      case "moderate":
        activityMultiplier = 1.55;
        break;
      case "high":
        activityMultiplier = 1.725;
        break;
      case "extreme":
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = null;
    }

    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    var tdee = bmr * activityMultiplier;
    result.current.innerText = `Your TDEE is ${Math.round(tdee).toLocaleString()} kCal per day`;
  }

  return (
    <>
      <PageHeader
        image={calculatorIcon}
        title="TDEE Calculator"
        description="'TDEE' or Total Daily Energy Expenditure is the total amount of calories you burn in a day.
        Your TDEE is determined by adding your BMR to the total amount of calories you burn through your daily activities!"
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
          <label className={classes.label}>Activity Level</label>
          <select ref={activityInput} className={classes.select}>
            <option value="sedentary">Sedentary</option>
            <option value="light">Lightly Active</option>
            <option value="moderate">Moderately Active</option>
            <option value="high">Highly Active</option>
            <option value="extreme">Extremely Active</option>
          </select>
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

export default TDEEPage;
