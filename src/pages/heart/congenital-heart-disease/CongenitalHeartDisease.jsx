import "./CongenitalHeartDisease.css";
import GLBViewer from "../../../components/GLBViewer";
import React from "react";

const CongenitalHeartDisease = () => {

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <p>Cardiopatia congenita</p>
      {/*Muchachos es para acomodar la posicion de la camara 
        cameraPosition{x,y,z} y fov es para el zoom de la camara
        como se que cada modelo es distinto lo deje dinamico */}

      <GLBViewer
        modelUrl="/models-3d/congenital-heart-disease/Heart.glb"
        cameraPosition={[0, 1.5, 4]}
        fov={20}
      />
      <h1>¿QUE ES?</h1>
      <p>Una cardiopatía congénita es una alteración en la estructura del corazón <br></br>
      que se presenta desde el nacimiento.Surge debido a un desarrollo anormal del corazón <br></br>
      durante la gestación. Este tipo de condición puede afectar el flujo sanguíneo dentro del <br></br>
      corazón y su gravedad puede variar: algunas son leves y no necesitan tratamiento, mientras que <br></br>
      otras son más complejas y requieren intervenciones quirúrgicas desde los primeros días de vida.</p>

      <h1>¿Cuales son sus causas?</h1>
      <p>Las cardiopatías congénitas son alteraciones del corazón que están presentes desde el nacimiento <br></br> 
      y, por lo general, tienen un origen complejo y multifactorial. En muchos casos, no es posible identificar<br></br>
      una causa única, pero se sabe que existen distintos factores que pueden influir en su aparición, tanto <br></br>
      genéticos como ambientales:<br></br></p>

      <p><strong>Genéticos</strong><br></br>
      Cambios o mutaciones en el ADN, ya sea heredados o surgidos espontáneamente durante el desarrollo del feto, <br></br>
      pueden afectar la formación del corazón.</p>

      <p><strong>Ambientales</strong><br></br>
      Infecciones durante el embarazo (como la rubéola), exposición a sustancias tóxicas o medicamentos <br></br>
      perjudiciales, la diabetes materna no controlada, así como el consumo de alcohol y tabaco, son factores<br></br>
      que pueden interferir en el desarrollo cardíaco.</p>

      <p><strong>Síndromes genéticos</strong><br></br>
      Algunas condiciones como el síndrome de Down están estrechamente relacionadas con un mayor<br></br>
      riesgo de presentar cardiopatías congénitas.<br></br></p>

      <p><strong>Origen multifactorial</strong><br></br>
      En la mayoría de los casos, estas cardiopatías son consecuencia de una interacción entre factores<br></br>
      genéticos y ambientales que afectan al corazón durante su formación en el embarazo.<br></br></p>

      
      <h1>Tratamiento</h1>
      <p>El tratamiento de las cardiopatías congénitas depende del tipo y la gravedad del defecto cardíaco.<br></br>
      En algunos casos leves, puede que no se requiera intervención médica. Sin embargo, muchas personas,<br></br> 
      especialmente los bebés, necesitan tratamiento desde los primeros años de vida, que puede incluir cirugía,<br></br> cateterismo, medicamentos o el uso de dispositivos médicos.</p>

      <p><strong>Cirugía cardíaca</strong><br></br>
      Se realiza para corregir defectos en las estructuras del corazón o de los vasos sanguíneos. También <br></br>
      puede incluir la reparación o el reemplazo de válvulas. En situaciones más complejas, se puede requerir<br></br>
      un trasplante de corazón o el uso de un corazón artificial.</p>

      <p><strong>Cateterismo cardíaco</strong><br></br>
      Es un procedimiento mínimamente invasivo que utiliza un tubo delgado (catéter) guiado a través de una<br></br>
      vena hacia el corazón para reparar defectos simples sin necesidad de cirugía abierta.</p>

      <p><strong>Medicamentos</strong><br></br>
      Se prescriben para mejorar la función cardíaca, prevenir coágulos sanguíneos o controlar arritmias <br></br>
      (latidos irregulares del corazón).</p>

      <p><strong>Dispositivos implantables</strong><br></br>
      En algunos casos, se utilizan dispositivos como marcapasos o desfibriladores implantables para ayudar<br></br>
      al corazón a mantener un ritmo adecuado o mejorar su funcionamiento.</p>

      <p><strong>Seguimiento a largo plazo</strong><br></br>
      Independientemente del tratamiento recibido, es fundamental que las personas con cardiopatías congénitas<br></br>
      tengan un control médico regular a lo largo de su vida, tanto en la infancia como en la adultez.</p>

    </div>
  );
};

export default CongenitalHeartDisease;
