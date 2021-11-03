import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Shopping Mall
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
