import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/rsvp" className={({ isActive }) => isActive ? "active" : ""}>
            RSVP
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink to="/registry" className={({ isActive }) => isActive ? "active" : ""}>
            Registry
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}