import logo from "../img/akondogroup.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
