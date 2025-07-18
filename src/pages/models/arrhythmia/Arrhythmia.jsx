import "./Arrhythmia.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import GLBViewer from "../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../components/scroll/ScrollDownButton.jsx";
import BreadCrumbs from "../../../components/navigation/BreadCrumbs.jsx";

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
      <BreadCrumbs />
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
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h1>
          <strong>¿Qué es?</strong>
        </h1>
        <p>
          Las arritmias se producen cuando los impulsos eléctricos que controlan
          el ritmo del corazón no funcionan correctamente. Esto puede hacer que
          el corazón lata demasiado rápido, demasiado lento o de manera
          irregular. Las arritmias pueden ser inofensivas o potencialmente
          mortales, dependiendo de su tipo y gravedad.
        </p>

        <h1>
          <strong>¿Cuáles son sus causas?</strong>
        </h1>
        <ul>
          <li>Enfermedades Cardíacas</li>
          <li>Desequilibrios electrolíticos</li>
          <li>Hipertensión arterial</li>
          <li>Edad avanzada</li>
          <li>Factores genéticos</li>
          <li>Consumo de alcohol, cafeína, tabaco o drogas recreativas</li>
          <li>Estrés y ansiedad</li>
          <li>Falta de sueño</li>
        </ul>

        <h1>
          <strong>¿Cómo afecta al cuerpo humano?</strong>
        </h1>
        <p>
          Las arritmias cardíacas pueden tener efectos que van desde ser
          completamente inofensivos hasta representar un riesgo grave para la
          vida. En casos más severos, pueden aumentar significativamente la
          probabilidad de sufrir un accidente cerebrovascular, especialmente
          cuando se trata de fibrilación auricular, ya que esta favorece la
          formación de coágulos sanguíneos que pueden desplazarse al cerebro.
          También pueden llevar al desarrollo de insuficiencia cardíaca,
          debilitando al corazón y reduciendo su capacidad para bombear sangre
          de manera eficiente. En situaciones críticas, algunas arritmias pueden
          desencadenar un paro cardíaco súbito, lo que implica una pérdida
          repentina de la función cardíaca y requiere intervención médica
          inmediata.
        </p>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <NavLink to="/diseases/arrhythmia/chest-pain">
            <button className="btn btn-primary">Más síntomas</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Arrhythmia;
