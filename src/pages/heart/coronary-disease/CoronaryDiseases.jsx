import "./CoronaryDiseases.css";
import GLBViewer from "../../../components/GLBViewer";
import React from "react";

const CoronaryDiseases = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GLBViewer
        modelUrl="/models-3d/coronary-disease/RealHeartCoronary1.glb"
        cameraPosition={[0, 0.5, 5]}
        fov={15}
        heartTitle="Enfermedad Coronaria"
      />
    </div>
  );
};

export default CoronaryDiseases;
