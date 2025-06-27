import "./Models.css";
import { useNavigate } from "react-router";
import { useCallback } from "react";

const Models = () => {
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
            className="card m-3"
            style={{ width: "18rem", cursor: "pointer" }}
            onClick={() => goTo("/models/arrhythmia")}
          >
            <img
              src="./cards/hearts/arritmiaCard.png"
              className="card-img-top"
              alt="Arritmia"
            />
            <div className="card-body">
              <h5 className="card-title">Arritmia</h5>
              <p className="card-text text-center">
                Alteraciones del ritmo cardíaco.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card m-3"
            style={{ width: "18rem", cursor: "pointer" }}
            onClick={() => goTo("/models/heart-failure")}
          >
            <img
              src="./cards/hearts/insuficienciaCard.png"
              className="card-img-top"
              alt="Insuficiencia Cardíaca"
            />
            <div className="card-body">
              <h5 className="card-title">Insuficiencia Cardíaca</h5>
              <p className="card-text text-center">
                El corazón no bombea sangre adecuadamente.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="card m-3"
            style={{ width: "18rem", cursor: "pointer" }}
            onClick={() => goTo("/models/coronary-disease")}
          >
            <img
              src="./cards/hearts/coronariaCard.png"
              className="card-img-top"
              alt="Enfermedad Coronaria"
            />
            <div className="card-body">
              <h5 className="card-title">Enfermedad Coronaria</h5>
              <p className="card-text text-center">
                Obstrucción en las arterias del corazón.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="card m-3"
            style={{ width: "18rem", cursor: "pointer" }}
            onClick={() => goTo("/models/congenital-heart-disease")}
          >
            <img
              src="./cards/hearts/cardioCongenitaCard.png"
              className="card-img-top"
              alt="Cardiopatía Congénita"
            />
            <div className="card-body">
              <h5 className="card-title">Cardiopatía Congénita</h5>
              <p className="card-text text-center">
                Defectos del corazón presentes al nacer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Models;
