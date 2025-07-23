export const createQuizSlice = (set, get) => ({
  status   : 'idle',
  questions: [],
  current  : 0,
  selected : [],
  correct  : 0,

  load: questions =>
    set({
      status   : 'ready',
      questions,
      current  : 0,
      selected : Array(questions.length).fill(null),
      correct  : 0
    }),

  select: optionIdx =>
    set(s => {
      const selected = [...s.selected];
      selected[s.current] = optionIdx;
      return { selected };
    }),

  next: () =>
    set(s => (s.current < s.questions.length - 1 ? { current: s.current + 1 } : {})),

  finish: () => {
    const s = get();
    const correct = s.selected.filter((v, i) => v === s.questions[i].answer).length;
    set({ status: 'finished', correct });
    return correct;
  }
});
