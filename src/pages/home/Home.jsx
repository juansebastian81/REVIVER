import "./Home.css";
import { useNavigate } from "react-router";
import { googleLogin, useUser, logout } from "../../lib/firebase";

const Home = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      console.log('Usuario autenticado exitosamente');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log('Sesión cerrada exitosamente');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  return (
    <div className="home-page">
      <div className="home-page-content">
        <h1>Bienvenido a Reviver</h1>
        <div>
          <h2>
            Somos una plataforma dedicada a explorar modelos 3D de enfermedades
            cardíacas
          </h2>
          <p>
            Pon a prueba tus conocimientos con nuestro cuestionario interactivo
            y aprende más sobre la salud del corazón
          </p>
        </div>
        <div className="home-buttons">
          <button onClick={() => navigate("/diseases")}>Enfermedades</button>
          {!user ? (
            <button onClick={handleGoogleLogin} className="google-login-btn">
              Iniciar sesión con Google
            </button>
          ) : (
            <div className="user-info">
              <p>Hola, {user.displayName || user.email}!</p>
              <button onClick={handleLogout} className="logout-btn">
                Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
