import "./fatigue.css";
import { useEffect, useState } from "react";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const Cough = () => {
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
          modelUrls={["/models-3d/heart-failure/Confusion.glb"]}
          cameraPosition={[0, 1.5, 4]}
          fov={35}
          titleHeart="Sintoma: Cansancio o Fatiga"
          titlePosition={[0, 1, -0.1]}
          titleSize={0.2}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h2>
          <strong>Síntoma: Cansancio (Fatiga)</strong>
        </h2>

        <h3>Descripción:</h3>
        <p>
          El <strong>cansancio o fatiga</strong> es uno de los síntomas más
          comunes en personas que padecen
          <strong>insuficiencia cardíaca</strong>. Esta condición afecta la
          capacidad del corazón para bombear sangre de manera eficiente, lo que
          provoca una disminución del flujo de oxígeno y nutrientes hacia los
          músculos y órganos del cuerpo.
        </p>
        <p>
          Como resultado, incluso actividades cotidianas como caminar, subir
          escaleras, cocinar o vestirse pueden generar una sensación de
          agotamiento extremo. Este tipo de fatiga no suele mejorar con el
          descanso y puede ir acompañado de debilidad muscular, somnolencia
          durante el día, falta de concentración y malestar general.
        </p>
        <p>
          En muchos casos, el cansancio empeora con el esfuerzo físico y se
          presenta junto con otros síntomas como la{" "}
          <strong>disnea (dificultad para respirar)</strong> o la{" "}
          <strong>hinchazón en las piernas</strong>. A medida que la
          insuficiencia cardíaca progresa, la fatiga puede volverse constante e
          interferir significativamente con la calidad de vida del paciente.
        </p>

        <h3>Tratamiento:</h3>
        <p>
          El manejo del cansancio causado por insuficiencia cardíaca requiere
          una combinación de
          <strong>
            tratamiento médico, cambios en el estilo de vida y monitoreo
            continuo
          </strong>
          . Algunas opciones incluyen:
        </p>
        <ul>
          <li>
            <strong>Medicamentos:</strong> Diuréticos (para reducir la retención
            de líquidos), inhibidores de la ECA, beta bloqueadores y otros
            fármacos que mejoran la función cardíaca y reducen la carga de
            trabajo del corazón.
          </li>
          <li>
            <strong>Rehabilitación cardíaca:</strong> Programas supervisados de
            ejercicio físico adaptado al paciente, que ayudan a mejorar la
            resistencia y reducir la fatiga.
          </li>
          <li>
            <strong>Control de la dieta:</strong> Reducir el consumo de sal,
            grasas saturadas y líquidos en exceso puede aliviar la carga del
            corazón.
          </li>
          <li>
            <strong>Descanso adecuado y control del estrés:</strong> Mantener
            una rutina de sueño saludable y evitar el esfuerzo excesivo.
          </li>
          <li>
            <strong>Dispositivos médicos o cirugía (en casos graves):</strong>{" "}
            Como marcapasos, desfibriladores o incluso trasplante de corazón,
            cuando otros tratamientos no son suficientes.
          </li>
        </ul>
        <p>
          Es fundamental que el tratamiento sea personalizado y supervisado por
          un profesional de la salud, ya que cada paciente puede responder de
          forma diferente a las terapias.
        </p>
      </div>
    </>
  );
};

export default Cough;
