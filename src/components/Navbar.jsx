import logo from "../assets/logo.jpg";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbarMain">
      <div>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <span>E-Commerce</span>
      </div>
    </nav>
  );
}

export default Navbar;
