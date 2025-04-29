import "./Footer.css";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer>
      <ul>
        <div className="parent">
          <li>
            <Link to="/" className="btn">
              Home
            </Link>
          </li>
          <li>
            <Link to="/heart/arrhythmia" className="btn">
              Arritmia Cardiaca
            </Link>
          </li>
          <li>
            <Link to="/heart/congenital-heart-disease" className="btn">
              Cardiopatia Congenita
            </Link>
          </li>
          <li>
            <Link to="/heart/coronary-disease" className="btn">
              Enfermedad Coronaria
            </Link>
          </li>
          <li>
            <Link to="/heart/heart-failure" className="btn">
              Insuficiencia cardiaca
            </Link>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
