import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <div className="waraper">
        <div className="compones">
          <Link to="/about">About Us</Link>
          <Link to="/f&q">F&Q</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="social-media"></div>
        <div className="all-rights">
          <p>© 2024 All Rights Reserved by Akondo Group</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
