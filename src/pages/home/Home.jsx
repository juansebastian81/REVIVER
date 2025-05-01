import "./Home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div class="home-page">
      <div class="home-page-content">
        <h1>WELCOME TO LANDING PAGE</h1>
        <div>
          <h2>
            We are a platform dedicated to exploring heart disease models.
          </h2>
          <p>
            Test your knowledge with our interactive quiz and learn more about
            heart health.
          </p>
        </div>
        <button onClick={() => navigate("/models")}>Go to Models</button>
      </div>
    </div>
  );
};

export default Home;
