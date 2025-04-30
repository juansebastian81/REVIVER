import "./Title.css";
import { Html, Text } from "@react-three/drei";

const Title = ({ title }) => {
  return (
    <Text
      position={[0, 0.4, -1]}
      color={"black"}
      anchorX={"center"}
      anchorY={"middle"}
      fontSize="0.2"
      font="/fonts/perfectPenmanship.ttf"
    >
      {title}
    </Text>
  );
};
export default Title;
