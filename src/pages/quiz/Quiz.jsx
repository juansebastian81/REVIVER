import './Quiz.css'
import { lazy, Suspense, useEffect, useState } from 'react'
import { saveAttempt } from '../../services/quiz.jsx'
import { useUser, googleLogin } from '../../lib/firebase.jsx'
import ProgressBar from '../../components/quiz/ProgressBar.jsx'
import { useAppStore } from '../../store/useAppStore.js'
import { QUESTIONS } from '../../data/questions.js';

const Podium3D = lazy(() => import('../../components/quiz/Podium3D.jsx'))

export default function Quiz() {
  const user = useUser()
  
  // Quiz Slice
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
  } = useAppStore(state => state);

  // Leaderboard Slice
  const leaderboard     = useAppStore(s => s.leaderboard);
  const lbError         = useAppStore(s => s.lbError);
  const loadLeaderboard = useAppStore(s => s.loadLeaderboard);
  
  const [showPodium, setShowPodium] = useState(false);
  
  useEffect(() => {
    if (status === 'idle') load(QUESTIONS);
  }, [status, load]);

  useEffect(() => {
    if (status !== 'finished') return;
    let cancelled = false;

    (async () => {
      try {
        await saveAttempt({
          uid         : user.uid,
          displayName : user.displayName ?? 'Anónimo',
          correct,
          total       : questions.length
        });
        if (!cancelled) {
          await loadLeaderboard(3);
          setShowPodium(true);
        }
      } catch (e) {
        console.error('saveAttempt failed', e);
      }
    })();
    return () => { cancelled = true; };
  }, [status, user, correct, questions.length, loadLeaderboard]);

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
    return (
      <div className="quiz-finished">
        <div className="quiz-finished-feedback">
          <ProgressBar />
          <h2>¡Quiz terminado!</h2>
          <p className="quiz-score">
            Correctas: {correct} / {questions.length}
          </p>
        </div>

        {showPodium && (
          <Suspense fallback={<p>Cargando podio…</p>}>
            <Podium3D rows={leaderboard} error={lbError} />
          </Suspense>
        )}
      </div>
    );
  }

  const q = questions[current];
  const isAnswered = selected[current] != null;

  function handleNext() {
    current < questions.length - 1 ? next() : finish();
  }

  return (
    <>
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

        <button
          className="quiz-next-button"
          onClick={handleNext}
          disabled={!isAnswered}
        >
          {current < questions.length - 1 ? 'Siguiente' : 'Terminar'}
        </button>
      </div>
    </>
  );
}