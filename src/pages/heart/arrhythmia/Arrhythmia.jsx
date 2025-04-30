import React from "react";
import GLBViewer from "../../../components/GLBViewer";
import "./Arrhythmia.css";

const Arrhythmia = () => {
  return (
    <>
      <div class="container-modelo">
        <GLBViewer
          modelUrl="/models-3d/arrhythmia/adultHeart.glb"
          cameraPosition={[0, 0, 5]}
          fov={20}
          titleHeart="Arritmia"
          titlePosition={[0, 0.7, -0.1]}
          titleColor="black"
          titleSize={0.1}
        />
      </div>
      <div className="container-info">
      <h1>Enfermedad Coronaria del Corazón</h1>

      <h2>¿Qué es?</h2>
      <p>
        La enfermedad coronaria (también llamada enfermedad arterial
        coronaria) es una afección en la que las arterias coronarias, que
        llevan sangre rica en oxígeno al músculo del corazón, se estrechan o
        se bloquean debido a la acumulación de placa (una mezcla de grasa,
        colesterol y otras sustancias). Este proceso se llama aterosclerosis.
      </p>

      <h2>¿Cuáles son sus causas?</h2>
      <ul>
        <li>Colesterol alto</li>
        <li>Presión arterial alta (hipertensión)</li>
        <li>Tabaquismo</li>
        <li>Diabetes</li>
        <li>Obesidad y mala alimentación</li>
        <li>Falta de actividad física</li>
        <li>Antecedentes familiares</li>
      </ul>

      <h2>¿Cómo afecta al cuerpo humano?</h2>
      <p>
        Cuando las arterias coronarias se estrechan o bloquean, el corazón no
        recibe suficiente oxígeno, lo que puede causar dolor en el pecho
        (angina), falta de aire, ataques cardíacos e insuficiencia cardíaca.
        Con el tiempo, esto puede provocar daños permanentes al corazón.
      </p>
      </div>
    </>
  );
};

export default Arrhythmia;