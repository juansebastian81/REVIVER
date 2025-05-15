import { OrbitControls } from "@react-three/drei";

const Controls = ({ controlsRef }) => {
  return <OrbitControls ref={controlsRef} enableZoom={false} />;
};

export default Controls;
