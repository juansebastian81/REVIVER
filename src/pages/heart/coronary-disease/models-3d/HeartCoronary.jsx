import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Heart = (props) => {
  const heartRef = useRef();
  const { nodes, materials } = useGLTF(
    "/models-3d/coronary-disease/RealHeartCoronary1.glb"
  );
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

useGLTF.preload("/models-3d/coronary-disease/RealHeartCoronary1.glb");
