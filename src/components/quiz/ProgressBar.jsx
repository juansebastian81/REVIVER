/**
 * Componente que muestra visualmente el progreso del usuario en el quiz.
 * Utiliza el store global de Zustand para obtener el estado actual del quiz
 * y renderiza una barra de progreso con colores dinámicos basados en el porcentaje
 * de completitud.
 * 
 * Características:
 * - Colores adaptativos según el progreso (rojo, amarillo, verde)
 * - Animaciones suaves de transición
 * - Muestra progreso numérico (pregunta actual / total)
 * 
 * // Uso básico en un componente de quiz
 * import ProgressBar from './components/quiz/ProgressBar';
 * 
 * function QuizLayout() {
 *   return (
 *     <div>
 *       <ProgressBar />
 *       <QuizQuestion />
 *       <QuizOptions />
 *     </div>
 *   );
 * }
 */

import './ProgressBar.css'
import { useQuizStore } from '../../hooks/useQuizStore'

/**
 * Componente de barra de progreso para quiz
 * 
 * Renderiza una barra de progreso visual que indica qué tan avanzado está
 * el usuario en el quiz actual. El componente:
 * - Obtiene el estado del quiz desde el store global
 * - Calcula el porcentaje de progreso
 * - Aplica colores dinámicos según el avance
 * - Muestra información numérica del progreso
 * 
 * // Renderiza automáticamente el progreso basado en el store
 * <ProgressBar />
 * 
 * // Uso dentro de un layout de quiz completo
 * function QuizPage() {
 *   return (
 *     <div className="quiz-layout">
 *       <header>
 *         <h1>Quiz de Conocimientos</h1>
 *         <ProgressBar />
 *       </header>
 *       <main>
 *         <QuizContent />
 *       </main>
 *     </div>
 *   );
 * }
 */
export default function ProgressBar () {
  // Obtener estado del quiz desde el store global de Zustand
  const { idx, questions } = useQuizStore()
  
  /**
   * Calcular porcentaje de progreso
   * - Si no hay preguntas cargadas, el progreso es 0%
   * - Si hay preguntas, calcular: (pregunta actual / total preguntas) * 100
   */
  const pct = questions.length ? (idx / questions.length) * 100 : 0
  /**
   * Determinar la clase CSS según el porcentaje de progreso
   * 
   * Aplica diferentes colores para proporcionar feedback visual:
   * - Rojo (0-32%): Indica que el usuario está comenzando
   * - Amarillo (33-65%): Progreso intermedio, mantiene motivación
   * - Verde (66-100%): Cerca del final, refuerza sensación de logro
   * 
   * @returns {string} Nombre de la clase CSS para el color
   */
  const getProgressClass = () => {
    if (pct < 33) return 'low-progress'    
    if (pct < 66) return 'medium-progress'
    return 'high-progress'
  }
  
  return (
    <div className="progress-container">
      {/* 
        Barra de progreso interior:
        - El ancho se ajusta dinámicamente según el porcentaje
        - La clase CSS cambia según el progreso para diferentes colores
        - Muestra texto informativo del progreso actual
      */}
      <div 
        className={`progress-bar ${getProgressClass()}`}
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-valuenow={idx}
        aria-valuemin={0}
        aria-valuemax={questions.length}
        aria-label={`Progreso del quiz: pregunta ${idx} de ${questions.length}`}
      >
        {/* Texto que muestra progreso numérico */}
        {idx}/{questions.length}
      </div>
    </div>
  )
}