import "./chest-pain.css";
import { useEffect, useState } from "react";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const ChestPain = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    const preventZoom = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
      S;
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
          modelUrl="/models-3d/arrhythmia/chest-pain.glb"
          cameraPosition={[0, 0, 3]}
          fov={35}
          titleHeart="Síntoma: Dolor en el Pecho (Dolor Torácico)"
          titlePosition={[0, 0.8, -0.1]}
          titleSize={0.1}
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h3>Descripción:</h3>
        <p>
          El <strong>dolor en el pecho</strong> es un síntoma frecuente en
          personas que presentan <strong>arritmias cardíacas</strong>. Las
          arritmias son alteraciones en el ritmo normal del corazón, lo que
          puede provocar que el corazón lata demasiado rápido, demasiado lento o
          de manera irregular.
        </p>
        <p>
          Cuando el corazón no late de forma eficiente, puede disminuir el flujo
          sanguíneo al músculo cardíaco y a otros órganos, lo que genera una
          sensación de presión, opresión o dolor en el pecho. Este dolor puede
          ser leve o intenso, aparecer de forma repentina y, en algunos casos,
          estar acompañado de palpitaciones, mareos, dificultad para respirar o
          desmayos.
        </p>
        <p>
          Es importante destacar que el dolor en el pecho asociado a arritmias
          puede confundirse con el de otras enfermedades cardíacas, como el
          infarto, por lo que siempre debe ser evaluado por un profesional de la
          salud.
        </p>

        <h3>Tratamiento:</h3>
        <p>
          El manejo del dolor en el pecho causado por arritmias depende del tipo
          y la gravedad de la arritmia, así como de la presencia de otras
          enfermedades cardíacas. Algunas opciones incluyen:
        </p>
        <ul>
          <li>
            <strong>Medicamentos antiarrítmicos:</strong> Ayudan a controlar el
            ritmo cardíaco y reducir los episodios de dolor en el pecho.
          </li>
          <li>
            <strong>Control de factores desencadenantes:</strong> Evitar el
            consumo excesivo de cafeína, alcohol, tabaco y el estrés, que pueden
            favorecer la aparición de arritmias.
          </li>
          <li>
            <strong>Procedimientos médicos:</strong> Como la{" "}
            <strong>ablación por catéter</strong> para eliminar focos anormales
            de ritmo cardíaco, o la implantación de <strong>marcapasos</strong>{" "}
            o <strong>desfibriladores</strong> en casos seleccionados.
          </li>
          <li>
            <strong>Tratamiento de enfermedades asociadas:</strong> Controlar la
            presión arterial, el colesterol y otras condiciones que puedan
            agravar las arritmias.
          </li>
        </ul>
        <p>
          Ante la presencia de dolor en el pecho, especialmente si es intenso,
          prolongado o se acompaña de otros síntomas como dificultad para
          respirar o pérdida de conciencia, se debe buscar atención médica
          inmediata.
        </p>
      </div>
    </>
  );
};

export default ChestPain;
