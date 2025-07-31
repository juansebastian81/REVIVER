import "./TreatmentCongenital.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const TreatmentCongenital = () => {
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
          stagingModel={"park"}
          modelUrl="/models-3d/congenital-heart-disease/Treatment.glb"
          scaleModel={[0.1, 0.1, 0.1]}
          positionModel={[0, 0.001, 0]}
          cameraPosition={[0, 0.5, 4.5]}
          targetModel={[0, 0.1, 0]}
          fov={4}
          titleHeart="Hacer Ejercicio"
          titleSize={0.03}
          titlePosition={[0.01, 0.21, -0.1]}
          shadowPosition={[0, -0.1, 2]}
          audioUrl="/sounds/cansancio.mp3"
          speedAudio={1}
          defaultAnimation="Standing"
          animationMap={{
            KeyW: "Trot",
            KeyQ: "Standing",
          }}
          title2D="
          
Testimonio #3 de la Cardiopatía Congénita
          
          "
          text2D="          

          Me enteré de que tenía una cardiopatía congénita a 
          los 12 años, cuando me desmayé en una clase de educación 
          física. Fue una coartación de la aorta que había pasado 
          desapercibida desde el nacimiento. Me operaron a los 13 
          y, aunque tuve que dejar el deporte competitivo, eso no 
          me impidió tener una vida plena. Hoy soy abuelo, sigo mis 
          controles anuales y trato de llevar una vida activa. A 
          veces la vida te da un corazón con cicatrices, pero igual 
          puede amar con fuerza.

                                                              — Jorge A., jubilado y abuelo feliz
          "

        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h2>Tratamientos para la cardipatia congenita</h2>
        <p>
          La cardiopatia congenita puede abordarse mediante una combinación de
          modificaciones en el estilo de vida, como una dieta estricta
          tratamientos farmacológicos . La elección del tratamiento dependerá de
          las necesidades específicas de cada paciente:
        </p>
        <h3>1. Hacer Ejercicio</h3>
        <ul>
          <li>
            hacer ejercicio es fundamental para la salud del corazón. La
            actividad física regular fortalece el músculo cardíaco, mejora la
            circulación sanguínea y ayuda a controlar factores de riesgo como la
            presión arterial alta, el colesterol alto y el sobrepeso, todos
            ellos vinculados a enfermedades cardíacas.
          </li>
        </ul>

        <h3>2. Observación y seguimiento médico</h3>
        <ul>
          <li>
            En defectos leves, algunos pacientes no necesitan tratamiento
            inmediato.
          </li>
          <li>
            El cardiólogo realiza controles regulares con ecocardiogramas y
            otros estudios para monitorear la evolución.
          </li>
        </ul>

        <h3>3. Medicamentos</h3>
        <p>
          No corrigen el defecto, pero ayudan a manejar los síntomas y prevenir
          complicaciones:
        </p>
        <ul>
          <li>
            <strong>Diuréticos:</strong> reducen la acumulación de líquidos.
          </li>
          <li>
            <strong>IECAS o betabloqueadores:</strong> disminuyen la presión y
            el esfuerzo cardíaco.
          </li>
          <li>
            <strong>Inotrópicos:</strong> mejoran la fuerza del corazón.
          </li>
          <li>
            <strong>Anticoagulantes:</strong> previenen la formación de coágulos
            si hay riesgo.
          </li>
        </ul>
        <div className="button-group-centered">
          <NavLink to="/diseases/congenital-heart-disease">
            <button className="btn btn-primary">Enfermedad</button>
          </NavLink>
          <NavLink to="/diseases/congenital-heart-disease/fatigue">
            <button className="btn btn-primary">Sintomas</button>
          </NavLink>
          <NavLink to="/diseases/congenital-heart-disease/prevention-congenital">
            <button className="btn btn-primary">Prevención</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TreatmentCongenital;
