import "./cough.css";
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
          stagingModel="surgery"
          scaleModel={[0.125, 0.125, 0.125]}
          positionModel={[0, 0.225, 0]}
          targetModel={[0, 0.25, 0]}
          shadowPosition={[0, 0.15, 0]}
          modelUrl="/models-3d/heart-failure/cough.glb"
          cameraPosition={[0, 1.5, 4]}
          fov={5}
          titleHeart="Sintoma: Tos Constante"
          titlePosition={[0, 0.35, -0.1]}
          titleSize={0.04}
          defaultAnimation="ArmatureAction"
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h3>Descripción:</h3>
        <p>
          La <strong>tos persistente o crónica</strong> puede ser un síntoma
          significativo en personas con <strong>insuficiencia cardíaca</strong>.
          A menudo, esta tos es seca y empeora por la noche o cuando la persona
          está acostada, debido a la acumulación de líquido en los pulmones
          causada por la función deficiente del corazón.
        </p>
        <p>
          En los casos más avanzados, esta tos puede estar acompañada de{" "}
          <strong>expectoración espumosa o con un tinte rosado</strong>, lo cual
          es una señal de congestión pulmonar severa. Esto ocurre cuando el
          corazón no puede bombear eficazmente la sangre, provocando que el
          líquido se filtre hacia los alvéolos pulmonares.
        </p>
        <p>
          La tos cardíaca puede confundirse fácilmente con enfermedades
          respiratorias como asma o bronquitis, por lo que es importante tener
          en cuenta otros síntomas de insuficiencia cardíaca, como la{" "}
          <strong>dificultad para respirar (disnea)</strong>,{" "}
          <strong>hinchazón en las piernas</strong> o{" "}
          <strong>fatiga constante</strong>.
        </p>

        <h3>Tratamiento:</h3>
        <p>
          El tratamiento de la tos en pacientes con insuficiencia cardíaca está
          orientado a{" "}
          <strong>
            mejorar la función del corazón y reducir la acumulación de líquido
          </strong>{" "}
          en los pulmones. Las principales estrategias incluyen:
        </p>
        <ul>
          <li>
            <strong>Diuréticos:</strong> Medicamentos como la furosemida que
            ayudan a eliminar el exceso de líquido del cuerpo, disminuyendo la
            congestión pulmonar y aliviando la tos.
          </li>
          <li>
            <strong>Inhibidores de la ECA y betabloqueadores:</strong> Fármacos
            que mejoran la función cardíaca y reducen la presión en los vasos
            sanguíneos, facilitando el trabajo del corazón.
          </li>
          <li>
            <strong>Modificaciones en la postura:</strong> Dormir con la cabeza
            elevada puede ayudar a disminuir la tos nocturna causada por la
            acumulación de líquido en los pulmones.
          </li>
          <li>
            <strong>Control del sodio y líquidos:</strong> Una dieta baja en sal
            y un control estricto de la ingesta de líquidos pueden prevenir la
            retención de agua y la sobrecarga cardíaca.
          </li>
          <li>
            <strong>Monitoreo continuo:</strong> Es importante evaluar
            periódicamente la respuesta al tratamiento, ya que la tos puede ser
            un indicador temprano de descompensación cardíaca.
          </li>
        </ul>
        <p>
          Ante la presencia de tos persistente en pacientes con insuficiencia
          cardíaca, se debe acudir al médico para ajustar el tratamiento y
          descartar complicaciones. Nunca se debe automedicar sin supervisión
          profesional.
        </p>
      </div>
    </>
  );
};

export default Cough;
