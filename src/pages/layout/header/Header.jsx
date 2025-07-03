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
            <img
              className="logo"
              src="/logo/logoNuevoSinFondoRecortado.png"
              alt="logo"
            />
          </a>
        </div>
        <NavLink to="/" end>
          Inicio
        </NavLink>{" "}
        &nbsp;
        {/* Aquí eliminamos NavLink que envolvía Dropdown */}
        <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
          <DropdownToggle caret>Corazones</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Enfermedades</DropdownItem>
            <DropdownItem tag={NavLink} to="/models/arrhythmia" end>
              Arritmia
            </DropdownItem>
            <DropdownItem tag={NavLink} to="/models/heart-failure" end>
              Insuficiencia Cardiaca
            </DropdownItem>
            <DropdownItem tag={NavLink} to="/models/coronary-disease" end>
              Enfermedad Coronaria
            </DropdownItem>
            <DropdownItem
              tag={NavLink}
              to="/models/congenital-heart-disease"
              end
            >
              Cardiopatia Congenita
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
