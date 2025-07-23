import './Quiz.css'
import { useState, useEffect } from 'react'
import { saveAttempt } from '../../services/quiz.jsx'
import { useUser } from '../../lib/firebase.jsx'
import { googleLogin } from '../../lib/firebase.jsx'
import ProgressBar from '../../components/quiz/ProgressBar.jsx'
import { useQuizStore } from '../../hooks/useQuizStore.jsx'


export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState([])
  const [finished, setFinished] = useState(false)
  const user = useUser()
  const { questions, idx, answers, load, next, reset, start } = useQuizStore();

  
  useEffect(() => {
    const questions = [
      {
      id: 1,
      question: '¿Capital de Francia?',
      options: ['Madrid', 'París', 'Roma', 'Berlín'],
      answer: 1
      },
      {
      id: 2,
      question: '¿2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: 1
      },
      {
      id: 3,
      question: '¿Color del cielo en un día despejado?',
      options: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
      answer: 1
      },
      {
      id: 4,
      question: '¿Quién escribió "Don Quijote"?',
      options: ['Miguel de Cervantes', 'Gabriel García Márquez', 'Pablo Neruda', 'Federico García Lorca'],
      answer: 0
      },
      {
      id: 5,
      question: '¿Elemento químico con símbolo H?',
      options: ['Helio', 'Hidrógeno', 'Hierro', 'Hafnio'],
      answer: 1
      }
    ];
    load(questions)
  }, []);
  
  
  
  function finishQuiz(correct, total) {
    console.log(
      'uid:', user.uid,
      'displayName:', user.displayName ?? 'Anónimo',
      'correct:', correct,
      'total:', total
    )
    saveAttempt({
      uid: user.uid,
      displayName: user.displayName ?? 'Anónimo',
      correct,
      total
    }).catch((error) => {
      console.error('❌ Error al guardar intento:', error);
      alert('Error al guardar el resultado. Inténtalo más tarde.');
    })
  }

  function handleSelect(optionIdx) {
    const newSelected = [...selected]
    newSelected[current] = optionIdx
    setSelected(newSelected)
  }
  
  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      next()
    } else {
      setFinished(true)
      const correct = selected.filter((sel, idx) => sel === questions[idx].answer).length
      finishQuiz(correct, questions.length)
    }
  }
  
  if (!user) {
    return (
    <>
      <div className="quiz-login-required">
        Debes iniciar sesión para hacer el quiz
      </div>
      <button className="quiz-login-button" onClick={googleLogin}>
        Iniciar sesión con Google
      </button>
    </>
    )
  }

  if (idx >= questions.length) {
    const correct = Object.values(useQuizStore.getState().answers).filter(Boolean).length
    saveAttempt({ uid: user.uid, displayName: user.displayName, correct, total: questions.length })
    return <p>¡Quiz terminado! Aciertos: {correct}/{questions.length}</p>
  }

  if (finished) {
    // Se podría agregar un boton para reiniciar el quiz con reset()
    const correct = selected.filter((sel, idx) => sel === questions[idx].answer).length
    return (
      <div className="quiz-finished">
        <h2>¡Quiz terminado!</h2>
        <p className="quiz-score">Correctas: {correct} / {questions.length}</p>
      </div>
    )
  }

  const q = questions[current]
  return (
    <div className="quiz-container">
      <ProgressBar />

      <h2 className="quiz-question">{q.question}</h2>
      <ul className="quiz-options">
        {q.options.map((opt, idx) => (
          <li key={idx} className="quiz-option">
            <button
              className={`quiz-option-button ${selected[current] === idx ? 'selected' : ''}`}
              onClick={() => handleSelect(idx)}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="quiz-next-button" 
        onClick={handleNext} 
        disabled={selected[current] == null}
      >
        {current < questions.length - 1 ? 'Siguiente' : 'Terminar'}
      </button>
    </div>
  )
}