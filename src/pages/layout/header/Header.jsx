import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };

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
        <NavLink>
          <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
            <DropdownToggle caret>Corazones</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Enfermedades</DropdownItem>
              <NavLink to="/models/arrhythmia" end>
                <DropdownItem>Arritmia</DropdownItem>
              </NavLink>
              <NavLink to="/models/heart-failure" end>
                <DropdownItem>Insuficiencia Cardiaca</DropdownItem>
              </NavLink>
              <NavLink to="/models/coronary-disease" end>
                <DropdownItem>Enfermedad Coronaria</DropdownItem>
              </NavLink>
              <NavLink to="/models/congenital-heart-disease" end>
                <DropdownItem>Cardiopatia Congenita</DropdownItem>
              </NavLink>
            </DropdownMenu>
          </Dropdown>
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
