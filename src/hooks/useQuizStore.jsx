/**
 * Este hook maneja el estado global del quiz usando Zustand.
 */

import { create } from 'zustand'

export const useQuizStore = create((set) => ({
  idx: 0,
  questions: [],
  answers: {},
  start: null,

  /**
   * Carga las preguntas del quiz e inicializa el estado
   * 
   * load([
   *   {
   *     id: 1,
   *     question: "¿Cuál es la capital de Francia?",
   *     options: ["Madrid", "París", "Roma", "Berlín"],
   *     answer: 1
   *   }
   * ]);
   */
  load: (qs) => set(() => ({ 
    questions: qs, 
    idx: 0, 
    answers: {}, 
    start: Date.now() 
  })),
  
  /**
   * Avanza a la siguiente pregunta y registra la respuesta
   * 
   * Guarda si la respuesta del usuario fue correcta o incorrecta
   * y avanza el índice a la siguiente pregunta.
   * 
   * // Usuario seleccionó la opción correcta en la pregunta con ID 1
   * next(true, 1);
   * 
   * // Usuario seleccionó incorrectamente en la pregunta con ID 2
   * next(false, 2);
   */
  next: (isCorrect, qid) => set((s) => ({
    answers: { ...s.answers, [qid]: isCorrect },
    idx: s.idx + 1
  })),

  /**
   * Reinicia el quiz a su estado inicial
   * 
   * Resetea todos los valores del quiz a sus estados por defecto:
   * - Índice vuelve a 0
   * - Se limpian todas las respuestas
   * - Se elimina el timestamp de inicio
   * 
   * Útil para permitir al usuario repetir el quiz o para
   * limpiar el estado antes de cargar un nuevo conjunto de preguntas.
   * 
   * // Reiniciar después de completar el quiz
   * const handleRestart = () => {
   *   reset();
   *   // Opcionalmente cargar nuevas preguntas
   *   load(newQuestions);
   * };
   */
  reset: () => set({ idx: 0, answers: {}, start: null })
}))