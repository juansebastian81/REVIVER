import "./Header.css";
import { NavLink } from "react-router";

const Header = () =>{

    return(
         <header>
            <nav>
                <NavLink to="/" end>
                    Inicio
                </NavLink> &nbsp;
                <NavLink to="/heart" end>
                    Corazón
                </NavLink> &nbsp;
            </nav>
         </header>
    );

};

export default Header;