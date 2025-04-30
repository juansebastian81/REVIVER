import React from "react";
import GLBViewer from "../../../components/GLBViewer";
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
      <h1>Arritmia Cardíaca</h1>

      <h2>¿Qué es?</h2>
      <p>
        Las arritmias se producen cuando los impulsos eléctricos que controlan el ritmo del corazón 
        no funcionan correctamente. Esto puede hacer que el corazón lata demasiado rápido, demasiado 
        lento o de manera irregular. Las arritmias pueden ser inofensivas o potencialmente mortales, dependiendo de su tipo y gravedad.
      </p>

      <h2>¿Cuáles son sus causas?</h2>
      <ul>
        <li>Enfermedades Cardíacas</li>
        <li>Desequilibrios electrolíticos</li>
        <li>Hipertensión arterial</li>
        <li>Edad avanzada</li>
        <li>Factores genéticos</li>
        <li>Consumo de alcohol, cafeína, tabaco o drogas recreativas</li>
        <li>Estrés y ansiedad</li>
        <li>Falta de sueño</li>
      </ul>

      <h2>¿Cómo afecta al cuerpo humano?</h2>
      <p>
      Las arritmias cardíacas pueden tener efectos que van desde ser completamente 
      inofensivos hasta representar un riesgo grave para la vida. En casos más 
      severos, pueden aumentar significativamente la probabilidad de sufrir un 
      accidente cerebrovascular, especialmente cuando se trata de fibrilación 
      auricular, ya que esta favorece la formación de coágulos sanguíneos que 
      pueden desplazarse al cerebro. También pueden llevar al desarrollo de 
      insuficiencia cardíaca, debilitando al corazón y reduciendo su capacidad 
      para bombear sangre de manera eficiente. En situaciones críticas, algunas 
      arritmias pueden desencadenar un paro cardíaco súbito, lo que implica una 
      pérdida repentina de la función cardíaca y requiere intervención médica inmediata.
      </p>
      </div>
    </>
  );
};

export default Arrhythmia;