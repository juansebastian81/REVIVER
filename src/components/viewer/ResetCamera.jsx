import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraReset = ({ position, fov }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...position);
    camera.fov = fov;
    camera.updateProjectionMatrix(); // Importante para aplicar el nuevo fov
    camera.lookAt(0, 0, 0);
  }, [camera, position, fov]);

  return null;
};

export default CameraReset;
