import React from "react";
import { Link } from "react-router-dom";
import "./SiteMap.css";

const SiteMap = () => {
  return (
    <div className="sitemap-container">
      <h1>Mapa del Sitio</h1>
      <ul className="sitemap-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/diseases">Enfermedades</Link>
          <ul>
            <li>
              <Link to="/diseases/arrhythmia">Arritmia</Link>
              <ul>
                <li>
                  <Link to="/diseases/arrhythmia/symptoms-arrhythmia">
                    Sintomas
                  </Link>
                </li>
                <li>
                  <Link to="/diseases/arrhythmia/treatment-arrhythmia">
                    Tratamiento
                  </Link>
                </li>
                <li>
                  <Link to="">Prevención</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/diseases/heart-failure">Insuficiencia Cardiaca</Link>
              <ul>
                <li>
                  <Link to="/diseases/heart-failure/fatigue-symptom">
                    Sintomas
                  </Link>
                </li>
                <li>
                  <Link to="/diseases/heart-failure/cough-symptom">
                    Tratamiento
                  </Link>
                </li>
                <li>
                  <Link to="/diseases/heart-failure/feeds-symptom">
                    Prevención
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/diseases/coronary-disease">Enfermedad Coronaria</Link>
              <ul>
                <li>
                  <Link to="/diseases/coronary-disease/symptoms-coronary-disease">
                    Sintomas
                  </Link>
                </li>
                <li>
                  <Link to="/diseases/coronary-disease/treatment-coronary-disease">
                    Tratamiento
                  </Link>
                </li>
                <li>
                  <Link to="/diseases/coronary-disease/prevention-care-coronary-disease">
                    Prevención
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/diseases/congenital-heart-disease">
                Cardiopatía Congénita
              </Link>
              <ul>
                <li>
                  <Link to="/diseases/congenital-heart-disease/fatigue">
                    Sintomas
                  </Link>
                </li>
                <li>
                  <Link to="/diseases/congenital-heart-disease/treatment-congenital">
                    Tratamiento
                  </Link>
                </li>
                <li>
                  <Link to="/diseases/congenital-heart-disease/prevention-congenital">
                    Prevención
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/quiz">Quiz interactivo</Link>
        </li>
        <li>
          <Link to="/aboutus">Sobre Nosotros</Link>
        </li>
      </ul>
    </div>
  );
};

export default SiteMap;
