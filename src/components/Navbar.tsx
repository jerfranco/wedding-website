import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 👈 NEW

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={menuOpen ? "open" : ""}>
        <li className="barlow-regular">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li className="barlow-regular">
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Our Story
          </NavLink>
        </li>
        <li className="barlow-regular">
          <NavLink to="/registry" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Registry
          </NavLink>
        </li>
        <li className="barlow-regular">
        <NavLink to="/faq" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
           FAQ
          </NavLink>
        </li>
      </ul>

      <h1 className="bellota-regular">J & J</h1>

      <button onClick={() => navigate("/rsvp")} id="rsvpbutton" className="barlow-regular">
        RSVP
      </button>
    </nav>
  );
}