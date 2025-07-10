import "./CongenitalHeartDisease.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import GLBViewer from "../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../components/scroll/ScrollDownButton.jsx";

const CongenitalHeartDisease = () => {
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
          modelUrl="/models-3d/congenital-heart-disease/Heart.glb"
          cameraPosition={[0, 0, 5]}
          fov={20}
          titleHeart="Cardiopatía Congénita"
          titlePosition={[0, 0.7, -0.5]}
          titleSize={0.2}
          shadowPosition={[0, -0.5, 0]}
          defaultAnimation="Beating"
          audioUrl="/sounds/heartBeating.mp3"
          speedAudio={1}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h1>
          <strong>¿Qué es?</strong>
        </h1>
        <p>
          Una cardiopatía congénita es una alteración en la estructura del
          corazón que se presenta desde el nacimiento. Surge debido a un
          desarrollo anormal del corazón durante la gestación. Este tipo de
          condición puede afectar el flujo sanguíneo dentro del corazón y su
          gravedad puede variar: algunas son leves y no necesitan tratamiento,
          mientras que otras son más complejas y requieren intervenciones
          quirúrgicas desde los primeros días de vida.
        </p>

        <h1>
          <strong>¿Cuáles son sus causas?</strong>
        </h1>
        <p>
          Las cardiopatías congénitas son alteraciones del corazón que están
          presentes desde el nacimiento y, por lo general, tienen un origen
          complejo y multifactorial. En muchos casos, no es posible identificar
          una causa única, pero se sabe que existen distintos factores que
          pueden influir en su aparición, tanto genéticos como ambientales:
        </p>

        <h2>
          <strong>Genéticos</strong>
        </h2>
        <p>
          Cambios o mutaciones en el ADN, ya sea heredados o surgidos
          espontáneamente durante el desarrollo del feto, pueden afectar la
          formación del corazón.
        </p>

        <h2>
          <strong>Ambientales</strong>
        </h2>
        <p>
          Infecciones durante el embarazo (como la rubéola), exposición a
          sustancias tóxicas o medicamentos perjudiciales, la diabetes materna
          no controlada, así como el consumo de alcohol y tabaco, son factores
          que pueden interferir en el desarrollo cardíaco.
        </p>

        <h2>
          <strong>Síndromes genéticos</strong>
        </h2>
        <p>
          Algunas condiciones como el síndrome de Down están estrechamente
          relacionadas con un mayor riesgo de presentar cardiopatías congénitas.
        </p>

        <h2>
          <strong>Origen multifactorial</strong>
        </h2>
        <p>
          En la mayoría de los casos, estas cardiopatías son consecuencia de una
          interacción entre factores genéticos y ambientales que afectan al
          corazón durante su formación en el embarazo.
        </p>

        <h1>
          <strong>Tratamiento</strong>
        </h1>
        <p>
          El tratamiento de las cardiopatías congénitas depende del tipo y la
          gravedad del defecto cardíaco. En algunos casos leves, puede que no se
          requiera intervención médica. Sin embargo, muchas personas,
          especialmente los bebés, necesitan tratamiento desde los primeros años
          de vida, que puede incluir cirugía, cateterismo, medicamentos o el uso
          de dispositivos médicos.
        </p>

        <h2>
          <strong>Cirugía cardíaca</strong>
        </h2>
        <p>
          Se realiza para corregir defectos en las estructuras del corazón o de
          los vasos sanguíneos. También puede incluir la reparación o el
          reemplazo de válvulas. En situaciones más complejas, se puede requerir
          un trasplante de corazón o el uso de un corazón artificial.
        </p>

        <h2>
          <strong>Cateterismo cardíaco</strong>
        </h2>
        <p>
          Es un procedimiento mínimamente invasivo que utiliza un tubo delgado
          (catéter) guiado a través de una vena hacia el corazón para reparar
          defectos simples sin necesidad de cirugía abierta.
        </p>

        <h2>
          <strong>Medicamentos</strong>
        </h2>
        <p>
          Se prescriben para mejorar la función cardíaca, prevenir coágulos
          sanguíneos o controlar arritmias (latidos irregulares del corazón).
        </p>

        <h2>
          <strong>Dispositivos implantables</strong>
        </h2>
        <p>
          En algunos casos, se utilizan dispositivos como marcapasos o
          desfibriladores implantables para ayudar al corazón a mantener un
          ritmo adecuado o mejorar su funcionamiento.
        </p>

        <h2>
          <strong>Seguimiento a largo plazo</strong>
        </h2>
        <p>
          Independientemente del tratamiento recibido, es fundamental que las
          personas con cardiopatías congénitas tengan un control médico regular
          a lo largo de su vida, tanto en la infancia como en la adultez.
        </p>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <NavLink to="/models/cansancio-symptom/cansancio">
            <button className="btn btn-primary">Más síntomas</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CongenitalHeartDisease;
