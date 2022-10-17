import { GrAdd } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1 px-3">Keep Notes</span>
        <NavLink to="/add" className="btn btn-primary rounded mx-3">
          <GrAdd style={{ fontSize: "1.6rem" }} />
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
