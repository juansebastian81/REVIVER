import "./Header.css";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          Inicio
        </NavLink>{" "}
        &nbsp;
        <NavLink to="/models" end>
          Modelos
        </NavLink>{" "}
        &nbsp;
      </nav>
    </header>
  );
};

export default Header;
