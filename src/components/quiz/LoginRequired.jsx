import './LoginRequired.css'

export default function LoginRequired({ onLogin }) {
  return (
    <div className="quiz-login-required-wrapper">
      <p className="quiz-login-required">Debes iniciar sesión</p>
      <button className="quiz-login-button" onClick={onLogin}>
        Iniciar sesión con Google
      </button>
    </div>
  )
}