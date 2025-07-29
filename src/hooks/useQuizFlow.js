import { useEffect, useRef } from 'react'
import { useAppStore } from '../store/useAppStore.js'
import { QUESTIONS } from '../data/questions.js'
import { saveAttempt } from '../services/quiz.js'

export function useQuizFlow(user) {
  
  const status        = useAppStore(s => s.status)
  const correct       = useAppStore(s => s.correct)
  const questions     = useAppStore(s => s.questions)
  const load          = useAppStore(s => s.load)
  const loadLeaderboard = useAppStore(s => s.loadLeaderboard)

  const total = questions.length
  const savedRef = useRef(false)
  
  // Cargar preguntas al inicio
  useEffect(() => {
    if (status === 'idle') load(QUESTIONS)
  }, [status, load])

  // Cuando termina, guardar e ir por el leaderboard
  useEffect(() => {
    if (status !== 'finished' || savedRef.current) return
    savedRef.current = true

    let cancelled = false
    ;(async () => {
      try {
        await saveAttempt({
          uid        : user.uid,
          displayName: user.displayName ?? 'Anónimo',
          correct,
          total      : total
        })
        if (!cancelled) await loadLeaderboard(3)
      } catch (e) {
        console.error('saveAttempt failed', e)
      }
    })()

    return () => { cancelled = true }
  }, [status, user, correct, total, loadLeaderboard])
}