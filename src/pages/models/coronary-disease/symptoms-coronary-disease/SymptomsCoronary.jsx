import "./SymptomsCoronary.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const SymptomsCoronary = () => {
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
          stagingModel="park"
          modelUrl="/models-3d/coronary-disease/AvatarJSOM.glb"
          scaleModel={[0.1, 0.1, 0.1]}
          positionModel={[0, 0.001, 0]}
          cameraPosition={[0, 0.5, 4.5]}
          targetModel={[0, 0.05, 0]}
          fov={5}
          titleHeart="Sintomas"
          titleSize={0.04}
          titlePosition={[0, 0.21, -0.1]}
          shadowPosition={[0, -0.1, 0]}
          defaultAnimation="Look"
          animationMap={{
            KeyQ: "Dizzy",
            KeyW: "Sweat",
          }}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h1>
          <strong>Síntomas Comunes de la Enfermedad Coronaria</strong>
        </h1>

        <p>
          La enfermedad coronaria puede desarrollarse de forma lenta y durante
          mucho tiempo puede no presentar síntomas evidentes. Cuando los
          síntomas aparecen, suelen ser señales de que el flujo sanguíneo al
          corazón ya está significativamente reducido. Los más comunes son:
        </p>

        <h2>
          <strong>Dolor o presión en el pecho (Angina de pecho)</strong>
        </h2>
        <ul>
          <li>
            Es el <strong>síntoma más característico</strong>.
          </li>
          <li>
            Sensación de opresión, ardor, presión o peso en el centro o en el
            lado izquierdo del pecho.
          </li>
          <li>
            Puede irradiarse hacia los hombros, brazos (especialmente el
            izquierdo), cuello, mandíbula o espalda.
          </li>
          <li>
            Ocurre durante esfuerzos físicos o estrés emocional y mejora con el
            reposo o medicamentos.
          </li>
        </ul>

        <h2>
          <strong>Falta de aire (Disnea)</strong>
        </h2>
        <ul>
          <li>
            Dificultad para respirar durante la actividad física o incluso en
            reposo cuando la enfermedad está avanzada.
          </li>
          <li>
            El corazón no bombea eficazmente y no llega suficiente oxígeno al
            cuerpo.
          </li>
        </ul>

        <h2>
          <strong>Fatiga</strong>
        </h2>
        <ul>
          <li>
            Cansancio excesivo ante esfuerzos que antes eran bien tolerados.
          </li>
          <li>
            Puede presentarse incluso al realizar tareas cotidianas simples.
          </li>
          <li>
            Más frecuente en mujeres y adultos mayores como síntoma atípico.
          </li>
        </ul>

        <h2>
          <strong>Palpitaciones</strong>
        </h2>
        <ul>
          <li>Sensación de latidos acelerados, irregulares o saltados.</li>
          <li>Pueden indicar arritmias asociadas a la enfermedad coronaria.</li>
        </ul>

        <h2>
          <strong>Mareos o desmayos</strong>
        </h2>
        <ul>
          <li>Disminución del flujo sanguíneo al cerebro.</li>
          <li>Puede causar inestabilidad, mareos o pérdida de conciencia.</li>
        </ul>

        <h2>
          <strong>Sudoración excesiva (Diaforesis)</strong>
        </h2>
        <ul>
          <li>Sudor frío y repentino sin causa aparente.</li>
          <li>Es una señal de alerta importante ante un posible infarto.</li>
        </ul>

        <h2>
          <strong>Náuseas o vómitos</strong>
        </h2>
        <ul>
          <li>Más frecuente en mujeres durante un infarto.</li>
          <li>Puede confundirse con problemas digestivos comunes.</li>
        </ul>

        <h2>
          <strong>Nota Importante</strong>
        </h2>
        <p>Los síntomas pueden variar entre personas.</p>
        <ul>
          <li>
            <strong>Hombres:</strong> El dolor en el pecho es el síntoma más
            típico.
          </li>
          <li>
            <strong>Mujeres:</strong> Los síntomas pueden ser más sutiles, como
            fatiga extrema, dificultad para respirar, dolor en la espalda o
            náuseas sin dolor torácico evidente.
          </li>
        </ul>
        <div className="button-group-centered">
          <NavLink to="/diseases/coronary-disease">
            <button className="btn btn-primary">Enfermedad</button>
          </NavLink>
          <NavLink to="/diseases/coronary-disease/treatment-coronary-disease">
            <button className="btn btn-primary">Tratamiento</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SymptomsCoronary;
