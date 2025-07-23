import './Quiz.css'
import { useEffect } from 'react'
import { saveAttempt } from '../../services/quiz.jsx'
import { useUser } from '../../lib/firebase.jsx'
import { googleLogin } from '../../lib/firebase.jsx'
import ProgressBar from '../../components/quiz/ProgressBar.jsx'
import { useQuizStore } from '../../hooks/useQuizStore.jsx'
import { QUESTIONS } from '../../data/questions.js';


export default function Quiz() {
  const user = useUser()
  const {
    status,
    questions,
    current,
    selected,
    correct,
    load,
    select,
    next,
    finish
  } = useQuizStore();
  
  useEffect(() => {
    if (status === 'idle') load(QUESTIONS);
  }, [status, load]);

  if (!user)
    return (
      <>
        <p className="quiz-login-required">Debes iniciar sesión para hacer el quiz</p>
        <button className="quiz-login-button" onClick={googleLogin}>
          Iniciar sesión con Google
        </button>
      </>
    );
  
  if (status === 'idle') return <p>Cargando preguntas…</p>;

  if (status === 'finished') {
    saveAttempt({
      uid: user.uid,
      displayName: user.displayName ?? 'Anónimo',
      correct,
      total: questions.length
    }).catch((e) => console.error('Error al guardar intento:', e));

    return (
      <div className="quiz-finished">
        <h2>¡Quiz terminado!</h2>
        <p className="quiz-score">
          Correctas: {correct} / {questions.length}
        </p>
      </div>
    );
  }

  const q = questions[current];
  const isAnswered = selected[current] != null;

  function handleNext() {
    if (current < questions.length - 1) {
      next();
    } else {
      finish();
    }
  }

  return (
    <div className="quiz-container">
      <ProgressBar />

      <h2 className="quiz-question">{q.question}</h2>

      <ul className="quiz-options">
        {q.options.map((opt, idx) => {
          const pressed = selected[current] === idx;
          return (
            <li key={idx} className="quiz-option">
              <button
                className={`quiz-option-button ${pressed ? 'selected' : ''}`}
                aria-pressed={pressed}
                onClick={() => select(idx)}
              >
                {opt}
              </button>
            </li>
          );
        })}
      </ul>

      <button className="quiz-next-button" onClick={handleNext} disabled={!isAnswered}>
        {current < questions.length - 1 ? 'Siguiente' : 'Terminar'}
      </button>
    </div>
  );
}