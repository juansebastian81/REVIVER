import "./Fatigue.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const Fatigue = () => {
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
          modelUrl="/models-3d/congenital-heart-disease/Cansancio.glb"
          scaleModel={[0.1, 0.1, 0.1]}
          positionModel={[0, 0.001, 0]}
          cameraPosition={[0, 0.5, 4.5]}
          targetModel={[0, 0.1, 0]}
          fov={4}
          titleHeart="Cansancio"
          titleSize={0.03}
          titlePosition={[0.01, 0.21, -0.1]}
          shadowPosition={[0, -0.1, 2]}
          audioUrl="/sounds/cansancio.mp3"
          speedAudio={1}
          defaultAnimation="Yawn"
          animationMap={{
            KeyW: "Yawn",
            KeyQ: "Cansancio",
          }}
          title2D="

  Tetimonio # 2 de la Cardiopatía Congénita
          

          "
          text2D="          Fui operada por primera vez cuando tenía apenas 8 meses. 
          Me diagnosticaron Tetralogía de Fallot, una condición compleja 
          que hizo que pasara parte de mi infancia en hospitales. A los 
          5 años tuve una segunda cirugía y, desde entonces, he aprendido 
          a vivir con ciertas limitaciones, pero también con mucha gratitud. 
          Hoy estudio medicina para ayudar a otros niños que nacen con 
          condiciones como la mía. Mi corazón no es perfecto, pero late 
          fuerte y con propósito.
          
                                                                                        - Sofía M., 22 años
          "



        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h1>
          <strong>¿Qué es?</strong>
        </h1>
        <p>
          El cansancio es una sensación física o mental de falta de energía,
          debilidad o agotamiento puede ser un síntoma de enfermedades (como
          anemia, hipotiroidismo, infecciones, depresión, entre otras), o el
          resultado de malos hábitos de vida (poca actividad física, mala
          alimentación, mal sueño).
        </p>

        <h1>
          <strong>Tipos de cansancio</strong>
        </h1>
        <p>
          <strong>Físico:</strong> cuando el cuerpo se siente débil o fatigado
          después de esfuerzo, trabajo o falta de descanso (como después de
          hacer ejercicio o no dormir bien).
          <br />
          <strong>Mental o Emocional:</strong> cuando hay agotamiento por
          estrés, preocupaciones, exceso de trabajo intelectual o situaciones
          emocionales intensas.
        </p>

        <h1>
          <strong>¿Qué indica?</strong>
        </h1>
        <p>
          Es un signo de alerta para que mejores tu calidad de vida y busques
          atención médica si es persistente o severo. Puede indicar problemas de
          salud subyacentes que necesitan diagnóstico y tratamiento.
        </p>
        <div className="button-group-centered">
          <NavLink to="/diseases/congenital-heart-disease">
            <button className="btn btn-primary">Enfermedad</button>
          </NavLink>
          <NavLink to="/diseases/congenital-heart-disease/treatment-congenital">
            <button className="btn btn-primary">Tratamiento</button>
          </NavLink>
          <NavLink to="/diseases/congenital-heart-disease/prevention-congenital">
            <button className="btn btn-primary">Prevención</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Fatigue;
