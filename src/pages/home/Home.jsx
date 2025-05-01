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
        <div className="col-md-12 d-flex flex-wrap justify-content-center">
  
          {/* Card 1 */}
          <div className="card m-3" style={{ width: "18rem", cursor: "pointer" }} onClick={() => goTo("/heart/arrhythmia")}>
            <img src="./public/insuficienciaCard.jpeg" className="card-img-top" alt="Arritmia" />
            <div className="card-body">
              <h5 className="card-title">Arritmia</h5>
              <p className="card-text">Alteraciones del ritmo cardíaco.</p>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="card m-3" style={{ width: "18rem", cursor: "pointer" }} onClick={() => goTo("/heart/heart-failure")}>
            <img src="./public/insuficienciaCard.jpeg" className="card-img-top" alt="Insuficiencia Cardíaca" />
            <div className="card-body">
              <h5 className="card-title">Insuficiencia Cardíaca</h5>
              <p className="card-text">El corazón no bombea sangre adecuadamente.</p>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="card m-3" style={{ width: "18rem", cursor: "pointer" }} onClick={() => goTo("/heart/coronary-disease")}>
            <img src="./public/insuficienciaCard.jpeg" className="card-img-top" alt="Enfermedad Coronaria" />
            <div className="card-body">
              <h5 className="card-title">Enfermedad Coronaria</h5>
              <p className="card-text">Obstrucción en las arterias del corazón.</p>
            </div>
          </div>
  
          {/* Card 4 */}
          <div className="card m-3" style={{ width: "18rem", cursor: "pointer" }} onClick={() => goTo("/heart/congenital-heart-disease")}>
            <img src="./public/insuficienciaCard.jpeg" className="card-img-top" alt="Cardiopatía Congénita" />
            <div className="card-body">
              <h5 className="card-title">Cardiopatía Congénita</h5>
              <p className="card-text">Defectos del corazón presentes al nacer.</p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
  
};

export default Home;
