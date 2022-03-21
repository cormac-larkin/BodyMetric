import PageHeader from "../PageHeader";
import classes from "./HomePage.module.css";
import logo from "../../images/home-icon.svg";

function HomePage(props) {
  return (
    <>
      <PageHeader
        image={logo}
        title="BodyMetric"
        description="All the tools you need to transform your lifestyle"
      />
      <h3 className={classes.subTitle}>What is BodyMetric?</h3>
      <p className={classes.overview}>
        BodyMetric is a quick and easy to use health app, designed to run
        smoothly on your smartphone, tablet or Home PC! BodyMetric is ideal for
        anyone who wants to improve their health, fitness and overall wellbeing.
      </p>
      <hr />
      <h3 className={classes.subTitle}>How Does it work?</h3>
      <p className={classes.overview}>
        BodyMetric is{" "}
        <b>
          <u>free to use</u>
        </b>
        . Anyone can use BodyMetric services such as our calculators and workout
        planner. Creating an account is not required, but is highly recommended!
        Creating a free account takes just a few seconds and allows you to track
        your progress over time, and create custom workouts which you can
        re-visit later!
      </p>
      <hr />
    </>
  );
}

export default HomePage;
