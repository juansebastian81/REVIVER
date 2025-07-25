import "./Diseases.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Diseases = () => {
  const navigate = useNavigate();

  const goTo = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <div className="heart-page container-fluid">
      <h1 className="heart-title">Enfermedades Cardíacas</h1>

      <div className="row heart-content">
        <div className="col-md-12 d-flex flex-wrap justify-content-center">
          {/* Card 1 */}
          <div
            className="card card-hover m-3"
            style={{ width: "18rem", cursor: "pointer" }}
            onClick={() => goTo("/diseases/arrhythmia")}
          >
            <img
              src="./cards/hearts/arrhythmiaCard.png"
              className="card-img-top"
              alt="Arritmia"
            />
            <div className="card-body">
              <h5 className="card-title">Arritmia</h5>
              <p className="card-text text-center">
                Alteraciones del ritmo cardíaco
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card card-hover m-3"
            style={{ width: "18rem", cursor: "pointer" }}
            onClick={() => goTo("/diseases/heart-failure")}
          >
            <img
              src="./cards/hearts/heartFailureCard.png"
              className="card-img-top"
              alt="Insuficiencia Cardíaca"
            />
            <div className="card-body">
              <h5 className="card-title">Insuficiencia Cardíaca</h5>
              <p className="card-text text-center">
                El corazón no bombea sangre adecuadamente
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="card card-hover m-3"
            style={{ width: "18rem", cursor: "pointer" }}
            onClick={() => goTo("/diseases/coronary-disease")}
          >
            <img
              src="./cards/hearts/coronaryDiseaseCard.png"
              className="card-img-top"
              alt="Enfermedad Coronaria"
            />
            <div className="card-body">
              <h5 className="card-title">Enfermedad Coronaria</h5>
              <p className="card-text text-center">
                Obstrucción en las arterias del corazón
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="card card-hover m-3"
            style={{ width: "18rem", cursor: "pointer" }}
            onClick={() => goTo("/diseases/congenital-heart-disease")}
          >
            <img
              src="./cards/hearts/congenitalDiseaseCard.png"
              className="card-img-top"
              alt="Cardiopatía Congénita"
            />
            <div className="card-body">
              <h5 className="card-title">Cardiopatía Congénita</h5>
              <p className="card-text text-center">
                Defectos del corazón presentes al nacer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Diseases;
