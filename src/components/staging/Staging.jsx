import { Environment } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { CubeTextureLoader } from "three";

const Staging = ({ environmentName }) => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new CubeTextureLoader();
    loader.setPath(`/staging/cubemaps/${environmentName}/`);

    loader.load(
      ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
      (texture) => {
        scene.background = texture;
        scene.environment = texture;
      }
    );

    return () => {
      // Limpieza previa para evitar quedarse con la anterior
      scene.background = null;
      scene.environment = null;
    };
  }, [environmentName, scene]);

  return (
    <Environment
      // No se define `background` para no sobrescribir lo que hicimos manualmente
      files={[
        `/staging/cubemaps/${environmentName}/px.png`,
        `/staging/cubemaps/${environmentName}/nx.png`,
        `/staging/cubemaps/${environmentName}/py.png`,
        `/staging/cubemaps/${environmentName}/ny.png`,
        `/staging/cubemaps/${environmentName}/pz.png`,
        `/staging/cubemaps/${environmentName}/nz.png`,
      ]}
      ground={{ height: 0.15, radius: 1, scale: 100 }}
    />
  );
};

export default Staging;
