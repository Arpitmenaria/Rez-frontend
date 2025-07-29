import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">ReZ App</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/register">Register User</Link>
        <Link to="/users">User List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
