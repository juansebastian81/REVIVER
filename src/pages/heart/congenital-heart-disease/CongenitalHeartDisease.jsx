import "./CongenitalHeartDisease.css";
import GLBViewer from "../../../components/GLBViewer";
import React from 'react';

const CongenitalHeartDisease = () => {

  return(
    <div style={{ height: '100vh', width: '100vw' }}>
        <p>Cardiopatia congenita</p>
        {/*Muchachos es para acomodar la posicion de la camara 
        cameraPosition{x,y,z} y fov es para el zoom de la camara
        como se que cada modelo es distinto lo deje dinamico */}

        <GLBViewer modelUrl="../../../../public/3Dmodels/congenital-heart-disease-models/Heart.glb" 
         cameraPosition={[0, 1.5, 4]} fov={20} />
    </div>
  )
};

export default CongenitalHeartDisease;





