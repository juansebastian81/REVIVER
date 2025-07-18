import { Environment } from "@react-three/drei";

const Staging = ({ environmentName }) => {
  return (
    <Environment
      path={`/staging/cubemaps/${environmentName}/`}
      files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
      ground={{
        height: 0.15,
        radius: 1,
        scale: 100,
      }}
      background
    />
  );
};

export default Staging;
