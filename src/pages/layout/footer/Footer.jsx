import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/sitemap">Mapa del sitio</Link>
        </li>
        <li>
          <Link to="/aboutus">Sobre nosotros</Link>
        </li>
        <li>
          <Link to="/aboutus">Contáctanos</Link>
        </li>
      </ul>

      <div className="footer-info">
        <p>
          📍 Dirección:{" "}
          <a href="https://maps.app.goo.gl/i5KEs3TkmwzNh2326" target="_blank">
            Campus Meléndez Calle 13 # 100-00, Santiago de Cali, Valle del
            Cauca, Colombia
          </a>
        </p>
        <p>
          📞 Teléfono: <a href="tel:+573243819539">(+57) 324-3819539 </a>
        </p>
        <p>
          📲WhatsApp:{" "}
          <a
            href="https://wa.me/573243819539?text=Hola,%20quiero%20más%20información%20sobre%20REVIVER"
            target="_blank"
          >
            Chatea con nuestro bot 🤖
          </a>
        </p>
        <p>
          ✉️ Correo:{" "}
          <a href="mailto:contacto@reviver.com">contacto@reviver.com</a>
        </p>
      </div>

      <p className="footer">
        &copy; REVIVER 2025 - Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
