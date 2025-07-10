import "./Cansancio.css";
import { useEffect, useState } from "react";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const Cansancio = () => {
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
          modelUrl="/models-3d/congenital-heart-disease/Cansancio.glb"
          scaleModel={[0.1, 0.1, 0.1]}
          positionModel={[0, -0.1, 0]}
          cameraPosition={[0, 0, 5]}
          fov={4}
          titleHeart="Cansancio"
          titleSize={0.04}
          titlePosition={[0, 0.125, -0.1]}
          shadowPosition={[0, -0.1, 2]}
          audioUrl="/sounds/cansancio.mp3"
          speedAudio={1}
          defaultAnimation="Yawn"
          animationMap={{
            KeyQ: "Cansancio",
            KeyW: "Yawn",
          }}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h1>
          <strong>¿Qué es?</strong>
        </h1>
        <p>
          El cansancio es una sensación física o mental de falta de energía, 
          debilidad o agotamiento puede ser un síntoma de enfermedades 
          (como anemia, hipotiroidismo, infecciones, depresión, entre otras), 
          o el resultado de malos hábitos de vida (poca actividad física, mala 
          alimentación, mal sueño).
        </p>

        <h1>
          <strong>Tipos de cansancio</strong>
        </h1>
        <p>
          <strong>Físico:</strong> cuando el cuerpo se siente débil o fatigado después de esfuerzo,
          trabajo o falta de descanso (como después de hacer ejercicio o no dormir bien).
          <br />
          <strong>Mental o Emocional:</strong> cuando hay agotamiento por estrés, preocupaciones, exceso 
          de trabajo intelectual o situaciones emocionales intensas.
        </p>

        <h1>
          <strong>¿Qué indica?</strong>
        </h1>
        <p>
          Es un signo de alerta para que mejores tu calidad de vida
          y busques atención médica si es persistente o severo. Puede indicar
          problemas de salud subyacentes que necesitan diagnóstico y tratamiento.
        </p>

        <h1>
          <strong>Tratamiento</strong>
        </h1>
        <p>
          <strong>Comer Sano</strong><br/>
          Una alimentación equilibrada y rica en nutrientes es esencial para
          una dieta saludable y sin complicaciones medicas.<br/>

          <strong>Hacer ejercicio</strong><br/>
          Se recomienda hacer ejercicio regularmente para mejorar
          la oxigenacion en sangre y mejorar el ritmo cardiaco.
        </p>
      </div>
    </>
  );
};

export default Cansancio;
