import "./CoronaryDiseases.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../components/scroll/ScrollDownButton.jsx";

const CoronaryDiseases = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    // Prevenir el zoom en la página (fuera del canvas) solo cuando no se presiona Ctrl
    const preventZoom = (e) => {
      if (e.ctrlKey) {
        e.preventDefault(); // Previene el zoom de la página
      }
    };

    window.addEventListener("wheel", preventZoom, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventZoom);
    };
  }, []);

  const handleScrollDown = () => {
    document.body.style.overflow = "auto";
    setScrollEnabled(true);

    const section = document.getElementById("info-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="viewer-container">
        <GLBViewer
          stagingModel="surgery"
          scaleModel={[1, 1, 1]}
          positionModel={[0, 0.225, 0]}
          targetModel={[0, 0.25, 0]}
          cameraPosition={[0, 0, 5]}
          modelUrl="/models-3d/coronary-disease/RealHeartCoronary1Beating.glb"
          fov={6}
          titleHeart="Enfermedad Coronaria"
          titleSize={0.06}
          titlePosition={[0, 0.425, -0.125]}
          shadowPosition={[0, 0.11, 0]}
          defaultAnimation="Beating"
          audioUrl="/sounds/heartBeating.mp3"
          speedAudio={1.75}
          title2D="Testimonio de la enfermedad coronaria"
          text2D="                “Hace dos años me diagnosticaron una enfermedad coronaria.
                Decidí cambiar mi estilo de vida por completo: 
                empecé a comer mejor, a hacer ejercicio y dejé de fumar.
                Hoy, gracias al acompañamiento médico y a mi compromiso, 
                me siento más saludable que nunca.”
                        
                                                                        – Carlos M., 58 años"
          youtubeURL="t85uCuSRNiA"
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h1>
          <strong>¿Qué es?</strong>
        </h1>
        <p>
          La enfermedad coronaria (también llamada enfermedad arterial
          coronaria) es una afección en la que las arterias coronarias, que
          llevan sangre rica en oxígeno al músculo del corazón, se estrechan o
          se bloquean debido a la acumulación de placa (una mezcla de grasa,
          colesterol y otras sustancias). Este proceso se llama aterosclerosis.
        </p>

        <h1>
          <strong>¿Cuáles son sus causas?</strong>
        </h1>
        <ul>
          <li>Colesterol alto</li>
          <li>Presión arterial alta (hipertensión)</li>
          <li>Tabaquismo</li>
          <li>Diabetes</li>
          <li>Obesidad y mala alimentación</li>
          <li>Falta de actividad física</li>
          <li>Antecedentes familiares</li>
        </ul>

        <h1>
          <strong>¿Cómo afecta al cuerpo humano?</strong>
        </h1>
        <p>
          Cuando las arterias coronarias se estrechan o bloquean, el corazón no
          recibe suficiente oxígeno, lo que puede causar dolor en el pecho
          (angina), falta de aire, ataques cardíacos e insuficiencia cardíaca.
          Con el tiempo, esto puede provocar daños permanentes al corazón.
        </p>
        <div className="button-group-centered">
          <NavLink to="/diseases/coronary-disease/symptoms-coronary-disease">
            <button className="btn btn-primary">Sintomas</button>
          </NavLink>
          <NavLink to="/diseases/coronary-disease/treatment-coronary-disease">
            <button className="btn btn-primary">Tratamiento</button>
          </NavLink>
          <NavLink to="/diseases/coronary-disease/prevention-care-coronary-disease">
            <button className="btn btn-primary">Prevención</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CoronaryDiseases;
