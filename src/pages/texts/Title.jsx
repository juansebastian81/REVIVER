import "./Title.css";
import { Center, Text3D } from "@react-three/drei";

const Title = ({ title, position, size }) => {
  return (
    //
    //Text por temas de personalizacion no tiene por defecto:
    // -posicion
    // -tamaño
    // {title} es el mensaje.
    //
    <Center position={position}>
      <Text3D
        font="/fonts/perfectPenmanship.json"
        bevelEnabled
        bevelSize={0.001}
        bevelThickness={0.001}
        height={0.01}
        lineHeight={0.8}
        letterSpacing={0.005}
        size={size}
      >
        {title}
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
};
export default Title;
