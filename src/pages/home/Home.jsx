import "./Home.css";
import { useNavigate } from "react-router";
import { useCallback } from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(()=>{
    navigate("/heart", {
      state: { userData: {displayName: "Back por JSOM"} },
    })
  }, [navigate]);

  return (
    <div>
      <h1>Inicio</h1>
      <button onClick={handleClick}>Ver mas enfermedades</button>
    </div>
  );
};

export default Home;
