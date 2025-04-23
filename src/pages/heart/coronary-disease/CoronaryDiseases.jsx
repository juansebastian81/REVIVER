import "./CoronaryDiseases.css";
import GLBViewer from "../../../components/GLBViewer";
import React from "react";

const CoronaryDiseases = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <p>Enfermedad coronaria</p>

      <GLBViewer
        modelUrl="/models-3d/coronary-disease/RealHeartCoronary1.glb"
        fov={5}
      />
    </div>
  );
};

export default CoronaryDiseases;
