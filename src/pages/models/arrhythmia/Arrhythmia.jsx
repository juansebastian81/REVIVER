import "./Arrhythmia.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../components/scroll/ScrollDownButton.jsx";

const Arrhythmia = () => {
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
          modelUrl="/models-3d/arrhythmia/adultHeart.glb"
          cameraPosition={[0, 0, 5]}
          fov={1.5}
          titleHeart="Arritmia cardiaca"
          titlePosition={[0, 0.05, -0.03]}
          titleSize={0.01}
          shadowPosition={[0, -0.02, 0]}
          defaultAnimation={"Take 001"}
          audioUrl="/sounds/heartBeating.mp3"
          speedAudio={1.5}
          title2D="¿Qué es la Arritmia y cómo se clasifica?"
          text2D={`                        La arritmia es una alteración en el ritmo normal del corazón, 
                        haciendo que los latidos sean irregulares, demasiado rápidos (taquicardia) o demasiado lentos (bradicardia). 
          
                        Las arritmias se clasifican según su origen y el tipo de alteración:
                        - Según la frecuencia cardíaca: taquiarritmias (rápidas) y bradiarritmias (lentas).
                        - Según el lugar de origen: supraventriculares (en las aurículas) y ventriculares (en los ventrículos).

                        Algunas arritmias son benignas, pero otras pueden ser graves y requerir atención médica.`}
          youtubeURL="ml19a5_SydM"
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h1>
          <strong>¿Qué es la arritmia?</strong>
        </h1>
        <p>
          La arritmia es una alteración en el ritmo normal del corazón. Puede hacer que el corazón lata demasiado rápido, demasiado lento o de manera irregular. Estas alteraciones pueden ser inofensivas, pero algunas arritmias pueden poner en riesgo la vida si afectan la capacidad del corazón para bombear sangre de manera eficiente.
        </p>

        <h1>
          <strong>¿Cuáles son sus causas?</strong>
        </h1>
        <ul>
          <li>Enfermedades cardíacas previas</li>
          <li>Desequilibrios electrolíticos en la sangre</li>
          <li>Hipertensión arterial</li>
          <li>Edad avanzada</li>
          <li>Factores genéticos</li>
          <li>Consumo de alcohol, cafeína, tabaco o drogas</li>
          <li>Estrés y ansiedad</li>
          <li>Falta de sueño</li>
        </ul>

        <h1>
          <strong>¿Cómo afecta al cuerpo humano?</strong>
        </h1>
        <p>
          Las arritmias pueden causar síntomas como palpitaciones, mareos, desmayos, dificultad para respirar y dolor en el pecho. En casos graves, pueden provocar accidentes cerebrovasculares, insuficiencia cardíaca o paro cardíaco súbito, requiriendo atención médica inmediata.
        </p>
        <div className="button-group-centered">
          <NavLink to="/diseases/arrhythmia/symptoms-arrhythmia">
            <button className="btn btn-primary">Más síntomas</button>
          </NavLink>
          <NavLink to="/diseases/arrhythmia/treatment-arrhythmia">
            <button className="btn btn-primary">Tratamiento</button>
          </NavLink>
          <NavLink to="/diseases/arrhythmia/origin-arrhythmia">
            <button className="btn btn-primary">Origen</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Arrhythmia;
