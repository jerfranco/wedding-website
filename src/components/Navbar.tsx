import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      

      {/* Hamburger button */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/rsvp" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            RSVP
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink to="/registry" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Registry
          </NavLink>
        </li>
      </ul>
      <h1>Janelle & Jeremiah</h1>
      <button onClick={() => navigate("/rsvp")} id="rsvpbutton">
        RSVP
      </button>
    </nav>
  );
}