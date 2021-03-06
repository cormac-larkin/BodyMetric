import classes from "./PageHeader.module.css";

function PageHeader(props) {
  return (
    <>
      <h1 className={classes.title}>
        <img className={classes.image} src={props.image} alt=""></img>
        {props.title}
      </h1>
      <p className={classes.description}>{props.description}</p>
      <hr />
    </>
  );
}

export default PageHeader;
