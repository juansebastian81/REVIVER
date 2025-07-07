import "./CoronaryDiseases.css";
import { useEffect, useState } from "react";
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

  const handleNextPage = () => {
    window.location.href =
      "/models/coronary-disease/symptoms-coronary-disease/symptoms-coronary";
  };

  return (
    <>
      <div className="viewer-container">
        <GLBViewer
          modelUrl="/models-3d/coronary-disease/RealHeartCoronary1Beating.glb"
          cameraPosition={[0, 0, 5]}
          fov={6}
          titleHeart="Enfermedad Coronaria"
          titleSize={0.06}
          titlePosition={[0, 0.2, -0.1]}
          shadowPosition={[0, -0.5, 0]}
          defaultAnimation="Beating"
          audioUrl="/sounds/heartBeating.mp3"
          speedAudio={1.75}
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
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button className="btn btn-primary" onClick={handleNextPage}>
            Los síntomas
          </button>
        </div>
      </div>
    </>
  );
};

export default CoronaryDiseases;
