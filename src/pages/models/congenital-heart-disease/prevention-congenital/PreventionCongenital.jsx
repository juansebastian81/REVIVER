import "./PreventionCongenital.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const PreventionCongenital = () => {
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
          modelUrl="/models-3d/congenital-heart-disease/Prevencion.glb"
          scaleModel={[0.1, 0.1, 0.1]}
          positionModel={[0, 0.001, 0]}
          cameraPosition={[0, 0.5, 4.5]}
          targetModel={[0, 0.09, 0]}
          fov={5}
          titleHeart="Prevención y cuidados"
          titleSize={0.04}
          titlePosition={[0, 0.21, -0.1]}
          shadowPosition={[0, -0.01, 0]}
          audioUrl="/sounds/cansancio.mp3"
          defaultAnimation="Walking"
          animationMap={{
            KeyQ: "Walking",
            KeyW: "jumping",
            KeyE: "Burpee",
          }}
          title2D="Testimonio #4 de la enfermedad coronaria"
          text2D="                      Nací con una comunicación interauricular, 
          y me operaron a los 3 años. Desde entonces, he llevado 
          una vida activa, haciendo ejercicio moderado y cuidando 
          mi alimentación. Hoy corro 5 km varias veces a la semana 
          y me siento más fuerte que nunca. Superar una cardiopatía 
          congénita me enseñó que el autocuidado es una forma de 
                                                amor propio.
                        
                                                            — Camila P., diseñadora gráfica"
          youtubeURL="ezf-E4hpGoQ"
        />

        {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
      </div>

      <div className="text-container" id="info-section">
        <h2>Prevencion para la cardiopatia congenita</h2>
        <p>
          La prevención de la cardiopatía congénita se centra principalmente 
          en el cuidado prenatal y los hábitos de vida saludables durante el 
          embarazo y en la edad adulta para quienes ya la padecen. Es importante 
          la vacunación contra la rubéola, el control de la diabetes gestacional, 
          el manejo de enfermedades crónicas, evitar el alcohol y las drogas, 
          y la consulta médica antes de tomar cualquier medicamento:
        </p>

        <ul>
          <li>
            <strong>Vacunación:</strong> Vacunarse contra la rubéola antes del 
            embarazo si no se tiene inmunidad, ya que la infección en el embarazo 
            puede causar cardiopatías congénitas. 
          </li>
          <li>
            <strong>Evitar sustancias nocivas:</strong> o consumir alcohol ni drogas 
            ilícitas durante el embarazo. 
          </li>
          <li>
            <strong>Control de la diabetes:</strong> Mantener un buen control de la 
            glucosa en sangre si se padece diabetes. 
          </li>
          <li>
            <strong>Medicamentos:</strong> Consultar con el médico antes de tomar 
            cualquier medicamento, ya que algunos pueden causar defectos cardíacos. 
          </li>
          <li>
            <strong>Controles prenatales:</strong> Realizar controles prenatales 
            regulares y una alimentación nutritiva. 
          </li>
          <li>
            <strong>Evitar exposición a sustancias tóxicas:</strong> Evitar la exposición 
            a productos químicos o sustancias con olores fuertes que puedan ser perjudiciales. 
          </li>
          <li>
            <strong>Seguimiento médico regular:</strong> Asistir a controles regulares 
            con un cardiólogo o especialista en cardiopatías congénitas del adulto. 
          </li>
          <li>
            <strong>Estilo de vida saludable:</strong> Mantenerse físicamente activo 
            dentro de los límites indicados por el médico, seguir una dieta equilibrada, 
            controlar el colesterol y evitar el tabaco y las drogas.  
          </li>
          <li>
            <strong>Cuidado bucal:</strong> Mantener una buena higiene dental y 
            acudir a limpiezas de rutina, ya que el riesgo de infección cardíaca 
            (endocarditis) puede ser mayor. 
          </li>
          <li>
            <strong>Prevención de endocarditis:</strong> Consultar con el médico sobre 
            el riesgo de endocarditis y si se requieren antibióticos antes de ciertos 
            procedimientos dentales o quirúrgicos.  
          </li>
        </ul>
        <div className="button-group-centered">
          <NavLink to="/diseases/congenital-heart-disease">
            <button className="btn btn-primary">Enfermedad</button>
          </NavLink>
          <NavLink to="/diseases/congenital-heart-disease/fatigue">
            <button className="btn btn-primary">Sintomas</button>
          </NavLink>
          <NavLink to="/diseases/congenital-heart-disease/treatment-congenital">
            <button className="btn btn-primary">Tratamiento</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PreventionCongenital;
