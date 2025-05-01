import "./Title.css";
import { Text } from "@react-three/drei";

const Title = ({ title, position, color, fontSize }) => {
  return (
    //
    //Text por temas de personalizacion no tiene por defecto:
    // -color
    // -posicion
    // -tamño
    // {title} es el mensaje.
    //
    <Text
      position={position}
      color={color}
      fontSize={fontSize}
      anchorX={"center"}
      anchorY={"middle"}
      font="/fonts/perfectPenmanship.ttf"
    >
      {title}
    </Text>
  );
};
export default Title;
