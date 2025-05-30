import "./HeartFailure.css";
import GLBViewer from "../../../components/GLBViewer";
import ScrollDownButton from "../../../components/ScrollDownButton";
import React, { useEffect, useState } from "react";

const HeartFailure = () => {
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
      <div className="viewer-container">
        <GLBViewer
          modelUrl="/models-3d/heart-failure/Confusion.glb"
          cameraPosition={[0, 1.5, 4]}
          fov={30}
          titleHeart="Insuficiencia Cardiaca"
          titlePosition={[0, 0.7, -0.1]}
          titleSize={0.2}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="container" id="info-section">
        <h1>
          <strong>¿Qué es?</strong>
        </h1>
        <p>
          La insuficiencia cardíaca es una afección crónica en la que el corazón
          no puede bombear sangre de manera eficiente para satisfacer las
          necesidades del cuerpo. Puede afectar tanto al lado derecho como al
          izquierdo del corazón, y puede desarrollarse repentinamente o de
          manera progresiva con el tiempo.
        </p>

        <h1>
          <strong>¿Cuáles son sus causas?</strong>
        </h1>
        <ul>
          <li>Enfermedad arterial coronaria</li>
          <li>Presión arterial alta (hipertensión)</li>
          <li>Infarto de miocardio previo</li>
          <li>Miocardiopatías (afecciones del músculo cardíaco)</li>
          <li>Problemas en las válvulas del corazón</li>
          <li>Arritmias</li>
          <li>Diabetes</li>
          <li>Consumo excesivo de alcohol o drogas</li>
        </ul>

        <h1>
          <strong>¿Cómo afecta al cuerpo humano?</strong>
        </h1>
        <p>
          La insuficiencia cardíaca provoca que el cuerpo no reciba suficiente
          oxígeno y nutrientes, lo que puede causar fatiga extrema, dificultad
          para respirar, hinchazón en piernas y tobillos, y acumulación de
          líquido en los pulmones y otros órganos. Si no se trata, puede
          empeorar progresivamente y poner en riesgo la vida.
        </p>
      </div>
    </>
  );
};

export default HeartFailure;
