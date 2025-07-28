import "./PreventionCareCoronary.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const PreventionCareCoronary = () => {
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
          modelUrl="/models-3d/coronary-disease/AvatarSport.glb"
          scaleModel={[1, 1, 1]}
          positionModel={[0, 0.001, 0]}
          cameraPosition={[0, 0.5, 4.5]}
          targetModel={[0, 0.09, 0]}
          fov={5}
          titleHeart="Prevención y cuidados"
          titleSize={0.04}
          titlePosition={[0, 0.21, -0.1]}
          shadowPosition={[0, -0.01, 0]}
          defaultAnimation="Mirar"
          animationMap={{
            KeyQ: "Mirar",
            KeyW: "Calentamiento",
            KeyE: "Mariposas",
          }}
          title2D="Testimonio de la enfermedad coronaria"
          text2D="           “Hace dos años me diagnosticaron una enfermedad coronaria.
            Decidí cambiar mi estilo de vida por completo:

            Empecé a comer mejor, a hacer ejercicio y dejé de fumar.

            Hoy, gracias al acompañamiento médico y a mi compromiso, 
            me siento más saludable que nunca.”
                        
                                                                        – Carlos M., 59 años"
          youtubeURL="ezf-E4hpGoQ"
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h2>Hábitos saludables para prevenir la enfermedad coronaria</h2>
        <p>
          Adoptar un estilo de vida saludable es fundamental para prevenir
          enfermedades del corazón. Aquí te presentamos algunos hábitos que
          pueden ayudarte a proteger tu salud cardiovascular:
        </p>

        <ul>
          <li>
            <strong>Alimentación balanceada:</strong> Opta por frutas, verduras,
            granos integrales, pescado y grasas saludables como el aceite de
            oliva.
          </li>
          <li>
            <strong>Actividad física regular:</strong> Realiza al menos 30
            minutos de ejercicio moderado, como caminar o nadar, la mayoría de
            los días de la semana.
          </li>
          <li>
            <strong>Evita el tabaquismo:</strong> Fumar daña los vasos
            sanguíneos y aumenta el riesgo de enfermedad coronaria. Si fumas,
            busca ayuda para dejarlo.
          </li>
          <li>
            <strong>Mantén un peso saludable:</strong> El sobrepeso puede
            aumentar la presión arterial, el colesterol y el riesgo de diabetes,
            factores que afectan al corazón.
          </li>
          <li>
            <strong>Controla el estrés:</strong> Practica técnicas de relajación
            como la meditación, respiración profunda o yoga.
          </li>
          <li>
            <strong>Revisa tu salud regularmente:</strong> Monitorea tu presión
            arterial, niveles de colesterol y azúcar en sangre con tu médico de
            confianza.
          </li>
          <li>
            <strong>Modera el consumo de alcohol:</strong> El exceso de alcohol
            puede aumentar la presión arterial y contribuir al daño cardíaco.
          </li>
        </ul>
        <div className="button-group-centered">
          <NavLink to="/diseases/coronary-disease">
            <button className="btn btn-primary">Enfermedad</button>
          </NavLink>
          <NavLink to="/diseases/coronary-disease/symptoms-coronary-disease">
            <button className="btn btn-primary">Sintomas</button>
          </NavLink>
          <NavLink to="/diseases/coronary-disease/treatment-coronary-disease">
            <button className="btn btn-primary">Tratamiento</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PreventionCareCoronary;
