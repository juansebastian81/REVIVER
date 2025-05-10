import "./Header.css";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <a href="/">
          <img className="logo" src="/logo/logoNuevoSinFondoRecortado.png" />
          </a>
        </div>
        <NavLink to="/" end>
          Inicio
        </NavLink>{" "}
        &nbsp;
        <NavLink to="/models" end>
          Corazones
        </NavLink>{" "}
        &nbsp;
        <NavLink to="/quiz" end>
          Quiz interactivo
        </NavLink>{" "}
        &nbsp;
        <NavLink to="/aboutus" end>
          Nosotros
        </NavLink>{" "}
        &nbsp;
      </nav>
    </header>
  );
};

export default Header;
