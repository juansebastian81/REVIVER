import "./Cianosis.css";
import { useEffect, useState } from "react";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const Cianosis = () => {
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
          modelUrl="/models-3d/congenital-heart-disease/Cianosis.glb"
          cameraPosition={[0, 0, 5]}
          fov={20}
          titleHeart="Cianosis"
          titlePosition={[0, 0.7, -0.5]}
          titleSize={0.2}
          shadowPosition={[0, -0.5, 0]}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h1>
          <strong>¿Qué es?</strong>
        </h1>
        <p>
          La cianosis es una coloración azulada o violácea de la piel, 
          las mucosas o las uñas que ocurre cuando hay bajos niveles 
          de oxígeno en la sangre (específicamente, cuando la hemoglobina 
          desoxigenada supera los 5 g/dL en los capilares).
        </p>

        <h1>
          <strong>Tipos principales de cianosis</strong>
        </h1>
        <p>
          Cianosis central: 
          <strong>Afecta labios, lengua y cara.</strong>
          <br></br>Cianosis periférica:
          <strong>Afecta extremidades (manos, pies, dedos)</strong>
        </p>

        <h1>
          <strong>¿Qué indica?</strong>
        </h1>
        <p>
          Es un signo clínico de hipoxemia (falta de oxígeno en la sangre) 
          y requiere evaluación médica inmediata, ya que puede ser señal de una condición grave.
        </p>

        <h1>
          <strong>Tratamiento</strong>
        </h1>
        <p>
          <strong>Oxigenoterapia</strong>
          Se administra oxígeno suplementario por mascarilla o cánula nasal si hay hipoxemia comprobada.

          <strong>Tratar la causa específica</strong>
          Neumonía: Antibióticos, oxígeno
          Asma grave: Broncodilatadores, corticosteroides
          EPOC: Oxígeno, medicamentos inhalados
          Cardiopatías congénitas: Cirugía cardíaca, medicamentos específicos
        </p>
      </div>
    </>
  );
};

export default Cianosis;
