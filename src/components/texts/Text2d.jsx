import { Text } from "@react-three/drei";
import "/Text2d.css"; 

const Text2D = ({ text }) => (
  <Text
    color="black"
    anchorX="center"
    anchorY="middle"
    fontSize={0.017}           // Tamaño estándar y visible
    position={[0.01, 0.3, 0]}      // Posición estándar y visible
    lineHeight={0.8}
    letterSpacing={0.005}
    outlineWidth={0.001}         // Grosor del reborde
    outlineColor="white"      // Color del reborde
  >
    {text}
  </Text>
);

export default Text2D;