import "./Home.css";
import { useNavigate } from "react-router";
import { useCallback } from "react";

// GIF opcional (desde public o una URL externa)
//const gifURL = "/gifs/heart-beat.gif"; // o una URL externa como Giphy

const Home = () => {
  const navigate = useNavigate();

  const goTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
  <div className="heart-page container-fluid">
    <h1 className="heart-title">Enfermedades Cardíacas</h1>

    <div className="row heart-content">
      <div className="col-md-6 d-flex flex-column heart-buttons">
        <button onClick={() => goTo("/heart/arrhythmia")}>Arritmia</button>
        <button onClick={() => goTo("/heart/heart-failure")}>Insuficiencia cardíaca</button>
        <button onClick={() => goTo("/heart/coronary-disease")}>Enfermedad coronaria</button>
        <button onClick={() => goTo("/heart/congenital-heart-disease")}>Cardiopatía congénita</button>
      </div>

      <div className="col-md-6 heart-image d-flex align-items-center justify-content-center">
        <p className="text-white">Aquí va la imagen del corazón o modelo 3D</p>
      </div>
    </div>
  </div>
  );
};

export default Home;
