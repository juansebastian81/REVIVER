import "./HeartFailure.css";
import GLBViewer from "../../../components/GLBViewer";
import React from "react";

const HeartFailure = () => {
  return (
    // <div style={{ height: "100vh", width: "100vw" }}>
    //   <p>Sintoma: Confusion</p>
    //   {/*Muchachos es para acomodar la posicion de la camara
    //     cameraPosition{x,y,z} y fov es para el zoom de la camara
    //     como se que cada modelo es distinto lo deje dinamico */}

    //   <GLBViewer
    //     modelUrl="/models-3d/heart-failure/Confusion.glb"
    //     cameraPosition={[0, 1.5, 4]}
    //     fov={20}
    //   />
    // </div>

    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <GLBViewer
          modelUrl="/models-3d/heart-failure/Confusion.glb"
          cameraPosition={[0, 1.5, 4]}
          fov={30}
          titleHeart="Insuficiencia Cardiaca"
          titlePosition={[0, 0.7, -0.1]}
          titleColor="black"
          titleSize=".1"
        />
      </div>
      <div className="container">
        <h1>Insuficiencia Cardíaca</h1>

        <h2>¿Qué es?</h2>
        <p>
          La insuficiencia cardíaca es una afección crónica en la que el corazón
          no puede bombear sangre de manera eficiente para satisfacer las
          necesidades del cuerpo. Puede afectar tanto al lado derecho como al
          izquierdo del corazón, y puede desarrollarse repentinamente o de
          manera progresiva con el tiempo.
        </p>

        <h2>¿Cuáles son sus causas?</h2>
        <ul>
          <li>Enfermedad arterial coronaria</li>
          <li>Presión arterial alta (hipertensión)</li>
          <li>Infarto de miocardio previo</li>
          <li>Miocardiopatías (afecciones del músculo cardíaco)</li>
          <li>Problemas en las válvulas del corazón</li>
          <li>Arritmias</li>
          <li>Diabetes</li>
          <li>Consumo excesivo de alcohol o drogas</li>
        </ul>

        <h2>¿Cómo afecta al cuerpo humano?</h2>
        <p>
          La insuficiencia cardíaca provoca que el cuerpo no reciba suficiente
          oxígeno y nutrientes, lo que puede causar fatiga extrema, dificultad
          para respirar, hinchazón en piernas y tobillos, y acumulación de
          líquido en los pulmones y otros órganos. Si no se trata, puede
          empeorar progresivamente y poner en riesgo la vida.
        </p>
      </div>
    </>
  );
};

export default HeartFailure;
