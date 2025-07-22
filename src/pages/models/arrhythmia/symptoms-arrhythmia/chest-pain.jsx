import "./chest-pain.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";
import BreadCrumbs from "../../../../components/navigation/BreadCrumbs.jsx";

const ChestPain = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    const preventZoom = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
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
          stagingModel="surgery"
          scaleModel={[0.5, 0.5, 0.5]}
          positionModel={[0, 0.225, 0]}
          targetModel={[0, 0.225, 0]}
          modelUrl="/models-3d/arrhythmia/chest-pain.glb"
          cameraPosition={[0, 0, 3]}
          fov={15}
          titleHeart="Síntomas"
          titlePosition={[0, 0.525, -0.1]}
          titleSize={0.05}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h3>Descripción:</h3>
        <p>
          El <strong>dolor en el pecho</strong> es un síntoma frecuente en
          personas que presentan <strong>arritmias cardíacas</strong>. Las
          arritmias son alteraciones en el ritmo normal del corazón, lo que
          puede provocar que el corazón lata demasiado rápido, demasiado lento o
          de manera irregular.
        </p>
        <p>
          Cuando el corazón no late de forma eficiente, puede disminuir el flujo
          sanguíneo al músculo cardíaco y a otros órganos, lo que genera una
          sensación de presión, opresión o dolor en el pecho. Este dolor puede
          ser leve o intenso, aparecer de forma repentina y, en algunos casos,
          estar acompañado de palpitaciones, mareos, dificultad para respirar o
          desmayos.
        </p>
        <p>
          Es importante destacar que el dolor en el pecho asociado a arritmias
          puede confundirse con el de otras enfermedades cardíacas, como el
          infarto, por lo que siempre debe ser evaluado por un profesional de la
          salud.
        </p>
        <div className="button-group-centered">
          <NavLink to="/diseases/arrhythmia/">
            <button className="btn btn-primary">Enfermedad</button>
          </NavLink>
          <NavLink to="/diseases/arrhythmia/treatment-arrhythmia">
            <button className="btn btn-primary">Tratamiento</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ChestPain;
