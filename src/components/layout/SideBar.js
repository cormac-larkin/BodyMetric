import classes from "./SideBar.module.css";

function SideBar(props) {
  const links = props.items;
  const sidebarItems = links.map((element) => (
    <li className={classes.sidebarItem} key={element}>{element}</li>
  ));

  return <ul className={classes.sidebar}>{sidebarItems}</ul>;
}

export default SideBar;
