import "./TreatmentArrhythmia.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";
import BreadCrumbs from "../../../../components/navigation/BreadCrumbs.jsx";

const TreatmentArrhythmia = () => {
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
          stagingModel="park"
          modelUrl="/models-3d/arrhythmia/running.glb"
          scaleModel={[1, 1, 1]}
          positionModel={[0, 0.13, 0]}
          targetModel={[0, 0.25, 0]}
          cameraPosition={[0, 0, 3]}
          fov={6}
          titleHeart="Tratamiento"
          titleSize={0.04}
          titlePosition={[0, 0.35, -0.1]}
          shadowPosition={[0, -0.1, 0]}
          defaultAnimation={"mixamo.com"}
          speedAudio={1.75}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h3>Cambios en el estilo de vida y medicamentos</h3>
        <ul>
          <li>Realizar actividad física regular bajo supervisión médica</li>
          <li>Mantener una dieta equilibrada baja en sal y grasas saturadas</li>
          <li>Evitar el consumo excesivo de alcohol, cafeína y tabaco</li>
          <li>Controlar el estrés</li>
          <li>Dormir adecuadamente</li>
        </ul>
        <p>
          Además, los medicamentos pueden ayudar a controlar el ritmo cardíaco y
          prevenir complicaciones, como los antiarrítmicos para regular el ritmo
          del corazón, betabloqueadores para disminuir la frecuencia cardíaca y
          la presión arterial, y anticoagulantes para reducir el riesgo de
          formación de coágulos.
        </p>
        <h3>Procedimientos médicos</h3>
        <p>
          Entre los procedimientos médicos especializados se encuentran la
          cardioversión eléctrica, que se utiliza para restaurar el ritmo
          cardíaco normal mediante una descarga controlada; la ablación por
          catéter, que elimina las áreas del corazón que causan la arritmia; y
          el implante de marcapasos o desfibrilador, dispositivos que ayudan a
          regular el ritmo cardíaco. El tratamiento debe ser personalizado y
          supervisado por un especialista en cardiología. La actividad física,
          como correr, puede ser parte del tratamiento si el médico lo
          recomienda.
        </p>
        <div className="button-group-centered">
          <NavLink to="/diseases/arrhythmia">
            <button className="btn btn-primary">Enfermedad</button>
          </NavLink>
          <NavLink to="/diseases/arrhythmia/symptoms-arrhythmia">
            <button className="btn btn-primary">Síntomas</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TreatmentArrhythmia;
