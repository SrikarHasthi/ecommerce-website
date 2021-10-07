import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Shopping Mall
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
