import "./HeartFailure.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- NUEVA IMPORTACIÓN
import GLBViewer from "../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../components/scroll/ScrollDownButton.jsx";

const HeartFailure = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const navigate = useNavigate(); // <-- INICIALIZA EL NAVEGADOR

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

  const handleNextPage = () => {
    navigate("/models/models/heart-failure/prueba/cough");  
  };

  return (
    <>
      <div className="viewer-container">
        <GLBViewer
          modelUrls={["/models-3d/heart-failure/heart.glb", 
                      "/models-3d/heart-failure/Confusion.glb"]}
          cameraPosition={[0, 1.5, 4]}
          fov={35}
          titleHeart="Insuficiencia Cardiaca"
          titlePosition={[0, 1, -0.1]}
          titleSize={0.2}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="container" id="info-section">
        <h1><strong>¿Qué es?</strong></h1>
        <p>La insuficiencia cardíaca es una afección crónica en la que el corazón...</p>

        <h1><strong>¿Cuáles son sus causas?</strong></h1>
        <ul>
          <li>Enfermedad arterial coronaria</li>
          <li>Presión arterial alta (hipertensión)</li>
          <li>Infarto de miocardio previo</li>
          {/* ... */}
        </ul>

        <h1><strong>¿Cómo afecta al cuerpo humano?</strong></h1>
        <p>La insuficiencia cardíaca provoca que el cuerpo no reciba suficiente...</p>

        {/* ✅ BOTÓN DE SIGUIENTE PÁGINA */}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button
            className="btn btn-primary"
            onClick={handleNextPage}
          >
            Más sintomas
          </button>
        </div>
      </div>
    </>
  );
};

export default HeartFailure;
