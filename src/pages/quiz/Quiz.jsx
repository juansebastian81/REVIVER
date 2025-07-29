import { Suspense } from 'react'
import './Quiz.css'
import { useUser, googleLogin } from '../../lib/firebase.jsx'
import { useAppStore } from '../../store/useAppStore.js'
import ProgressBar from '../../components/quiz/ProgressBar.jsx'
import { useQuizFlow } from '../../hooks/useQuizFlow.js'
import Quiz3DStage from '../../components/quiz/Quiz3DStage.jsx'
import FinishScreen from '../../components/quiz/FinishScreen.jsx'
import LoginRequired from '../../components/quiz/LoginRequired.jsx'

export default function QuizPage() {
  const user   = useUser()
  const status = useAppStore(s => s.status)

  // carga preguntas, guarda intento, trae leaderboard
  useQuizFlow(user)

  if (!user) return <LoginRequired onLogin={googleLogin} />
  if (status === 'idle') return <p>Cargando preguntas…</p>

  return (
    <div className="quiz-wrapper">
      <ProgressBar /> {/* ✅ Ahora el Canvas no “zoomea” nada */}
      {status !== 'finished'
        ? <Quiz3DStage />
        : (
          <Suspense fallback={null}>
            <FinishScreen />
          </Suspense>
        )
      }
    </div>
  )
}
