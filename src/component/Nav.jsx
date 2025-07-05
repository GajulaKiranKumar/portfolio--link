import { Link } from 'react-router-dom';
import { useRef } from 'react';
import "../style/Nav.css";

function Nav() {
  const menuToggleRef = useRef(null);

  // Close mobile menu when a nav item is clicked
  const handleNavItemClick = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
    }
  };

  return (
    <nav className="navbar">
      {/* Optional animated wave background */}
      <div className="wave-container">
        <svg className="wave" viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path fill="#928dab" fillOpacity="0.4"
            d="M0,96L48,101.3C96,107,192,117,288,117.3C384,117,480,107,576,90.7C672,75,768,53,864,53.3C960,53,1056,75,1152,90.7C1248,107,1344,117,1392,122.7L1440,128V0H0Z">
          </path>
        </svg>
      </div>

      <div className="logo animated-text">Portfolio</div>

      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        ref={menuToggleRef}
      />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </label>

      <div className="nav-links">
        <Link to="/" onClick={handleNavItemClick}>
          <div className="nav-item">Home</div>
        </Link>
        <Link to="/skills" onClick={handleNavItemClick}>
          <div className="nav-item">Skills</div>
        </Link>
        <Link to="/about" onClick={handleNavItemClick}>
          <div className="nav-item">About</div>
        </Link>
        <Link to="/contact" onClick={handleNavItemClick}>
          <div className="nav-item">Contact</div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
