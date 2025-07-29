import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <li>
        <Link to="/sitemap">Mapa del sitio</Link>
      </li>
      <p className="footer">&copy; REVIVER 2025</p>
    </footer>
  );
};

export default Footer;
