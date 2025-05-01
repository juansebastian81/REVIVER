import "./Home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-page-content">
        <h1>Bienvenido a Reviver</h1>
        <div>
          <h2>
          Somos una plataforma dedicada a explorar modelos 3D de enfermedades cardíacas.
          </h2>
          <p>
          Pon a prueba tus conocimientos con nuestro cuestionario interactivo y aprende más sobre la salud del corazón.
          </p>
        </div>
        <button onClick={() => navigate("/models")}>Ir a modelos</button>
      </div>
    </div>
  );
};

export default Home;
