import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Heart = (props) => {
  const { nodes, materials } = useGLTF(
    "./models-3d/coronary-disease/RealHeartCoronary1.glb"
  );

  const heartRef = useRef();

  return (
    <group ref={heartRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Heart.geometry}
        material={materials.HeartMaterial}
      />
    </group>
  );
};

export default Heart;

useGLTF.preload("./models-3d/coronary-disease/RealHeartCoronary1.glb");
