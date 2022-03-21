import NavBar from "./NavBar";
import SideBar from "./SideBar"
import Footer from "./Footer";

function Layout(props) {

  return (
    <>
      <NavBar />
      <SideBar items={["Login", "Calculators", "Workout Planner", "Meal Planner", "Contact Us"]}/>
      <main className="main">{props.children}</main>
      <Footer text="Cormac Larkin 2022" />
    </>
  );
}

export default Layout;
