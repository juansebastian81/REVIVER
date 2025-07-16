import "./TreatmentCoronary.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";
import BreadCrumbs from "../../../../components/navigation/BreadCrumbs.jsx";

const TreatmentCoronary = () => {
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
      <BreadCrumbs />
      <div className="viewer-container">
        <GLBViewer
          modelUrl="/models-3d/coronary-disease/3DHeartCoronary1.glb"
          scaleModel={[5, 5, 5]}
          positionModel={[0, 0.25, 0]}
          targetModel={[0, 0.25, 0]}
          cameraPosition={[0, 1, 5]}
          fov={15}
          titleHeart="Tratamiento"
          titleSize={0.1}
          titlePosition={[0, 0.7, -0.1]}
          shadowPosition={[0, -0.1, 0]}
          audioUrl="/sounds/heartBeating.mp3"
          speedAudio={1.75}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h2>Tratamientos para la Enfermedad Coronaria</h2>
        <p>
          La enfermedad coronaria puede tratarse mediante una combinación de
          cambios en el estilo de vida, medicamentos y procedimientos médicos,
          según el caso de cada paciente. Estos son los principales enfoques:
        </p>

        <h3>1. Cambios en el estilo de vida</h3>
        <ul>
          <li>
            Adoptar una alimentación saludable baja en grasas saturadas y
            colesterol.
          </li>
          <li>Hacer ejercicio regularmente, con supervisión médica.</li>
          <li>Dejar de fumar y reducir el consumo de alcohol.</li>
          <li>Manejar el estrés y mantener un peso saludable.</li>
        </ul>

        <h3>2. Medicamentos</h3>
        <p>
          Los fármacos ayudan a mejorar el flujo sanguíneo y reducir el riesgo
          de complicaciones. Algunos de los más comunes incluyen:
        </p>
        <ul>
          <li>
            <strong>Estatinas:</strong> para reducir el colesterol.
          </li>
          <li>
            <strong>Betabloqueadores:</strong> disminuyen la presión arterial y
            la frecuencia cardíaca.
          </li>
          <li>
            <strong>Aspirina:</strong> previene la formación de coágulos.
          </li>
          <li>
            <strong>Inhibidores de la ECA:</strong> controlan la presión
            arterial y mejoran la función cardíaca.
          </li>
        </ul>

        <h3>3. Procedimientos médicos</h3>
        <ul>
          <li>
            <strong>Angioplastia:</strong> se inserta un catéter para abrir
            arterias bloqueadas y se coloca un stent si es necesario.
          </li>
          <li>
            <strong>Cirugía de bypass coronario:</strong> se crean rutas
            alternativas para que la sangre fluya alrededor de las arterias
            obstruidas.
          </li>
        </ul>

        <p>
          El tratamiento adecuado depende del estado de salud general y la
          gravedad de la enfermedad. Siempre debe realizarse bajo orientación
          médica especializada.
        </p>
        <div className="button-group-centered">
          <NavLink to="/models/coronary-disease">
            <button className="btn btn-primary">Enfermedad</button>
          </NavLink>
          <NavLink to="/models/coronary-disease/symptoms-coronary-disease">
            <button className="btn btn-primary">Sintomas</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TreatmentCoronary;
