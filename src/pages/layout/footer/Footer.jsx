import "./Footer.css";
import { Link, NavLink } from "react-router";

const Footer = () =>{

    return(
         <footer>
            <ul>
                <li>
                    <Link to="/heart/arrhythmia">Arritmia Cardiaca</Link>
                </li>
                <li>
                    <Link to="/heart/congenital-heart-disease">Cardiopatia Congenita</Link>
                </li>
                <li>
                    <Link to="/heart/coronary-disease">Enfermedad Coronaria</Link>
                </li>
                <li>
                    <Link to="/heart/heart-failure">Insuficiencia cardiaca</Link>
                </li>
            </ul>
         </footer>
    );

};

export default Footer;