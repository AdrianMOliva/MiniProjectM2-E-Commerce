import logo from "../assets/logo.png";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img src={logo} alt="Website Logo" />
      </div>
      <div className="navbarTitle">
        <h1>E-Commerce</h1>
      </div>
    </nav>
  );
}

export default Navbar;
