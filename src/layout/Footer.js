import classes from "./Footer.module.css"

function Footer(props) {
  return (
    <footer className={classes.footer}>
      <p>{props.text}</p>
    </footer>
  );
}

export default Footer;
