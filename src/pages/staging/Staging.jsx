import { Environment } from "@react-three/drei";

const Staging = () => {
  return (
    <Environment
      files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
      path="/stading/cubemaps/surgery/"
      ground={{
        height: 60,
        radius: 100,
        scale: 8,
      }}
      background
    />
  );
};

export default Staging;
