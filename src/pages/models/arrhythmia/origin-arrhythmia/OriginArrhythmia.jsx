import "./OriginArrhythmia.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const OriginArrhythmia = () => {
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
          modelUrl="/models-3d/arrhythmia/electrico.glb"
          scaleModel={[0.125, 0.125, 0.125]}
          positionModel={[0, 0.05, 0]}
          cameraPosition={[0, 0.001, 4.5]}
          targetModel={[0, 0.09, 0]}
          fov={5}
          titleHeart="Origen de la Arritmia"
          titleSize={0.04}
          titlePosition={[0, 0.21, -0.1]}
          shadowPosition={[0, -0.01, 0]}
          defaultAnimation="Mirar"
          animationMap={{
            KeyQ: "Mirar",
            KeyW: "Calentamiento",
            KeyE: "Mariposas",
          }}
            title2D="¿Cómo se origina una arritmia?"
            text2D="          El origen de una arritmia está relacionado con alteraciones en el sistema eléctrico del corazón. 
            Normalmente, los impulsos eléctricos siguen una ruta específica para coordinar los latidos. 
            
            Cuando estos impulsos se generan en lugares incorrectos o se transmiten de forma anormal, 
            el ritmo cardíaco puede volverse irregular, demasiado rápido o demasiado lento.
            
            Factores como daño en el tejido cardíaco, desequilibrios de electrolitos o enfermedades subyacentes 
            pueden contribuir a la aparición de arritmias."
          youtubeURL="Zk_zE_bRHLw"
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h2>Orígenes de la arritmia cardíaca</h2>
        <p>
          El corazón late gracias a impulsos eléctricos que se generan y transmiten de manera ordenada. Una arritmia ocurre cuando hay una alteración en la formación o conducción de estos impulsos eléctricos. Los principales orígenes de las arritmias incluyen:
        </p>
        <ul>
          <li>
            <strong>Alteraciones en las corrientes eléctricas:</strong> Cambios en los canales iónicos o en la conducción eléctrica pueden provocar latidos irregulares.
          </li>
          <li>
            <strong>Daño en el tejido cardíaco:</strong> Infartos previos, cicatrices o enfermedades del músculo cardíaco pueden interrumpir el flujo eléctrico normal.
          </li>
          <li>
            <strong>Desequilibrios de electrolitos:</strong> Niveles anormales de potasio, sodio, calcio o magnesio afectan la actividad eléctrica del corazón.
          </li>
          <li>
            <strong>Enfermedades o condiciones subyacentes:</strong> Hipertensión, insuficiencia cardíaca, enfermedades de las válvulas o del sistema de conducción pueden desencadenar arritmias.
          </li>
          <li>
            <strong>Factores externos:</strong> Consumo de ciertos medicamentos, drogas, alcohol o cafeína también pueden alterar el ritmo cardíaco.
          </li>
        </ul>
        <div className="button-group-centered">
          <NavLink to="/diseases/arrhythmia">
            <button className="btn btn-primary">Enfermedad</button>
          </NavLink>
          <NavLink to="/diseases/arrhythmia/symptoms-arrhythmia">
            <button className="btn btn-primary">Síntomas</button>
          </NavLink>
          <NavLink to="/diseases/arrhythmia/treatment-arrhythmia">
            <button className="btn btn-primary">Tratamiento</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OriginArrhythmia;
