import { create } from 'zustand';
import { createQuizSlice } from './slices/quizSlice';
import { createLeaderboardSlice } from './slices/leaderboardSlice';

/**
 * Store raíz: quiz + leaderboard
 */
export const useAppStore = create((set, get) => ({
  ...createQuizSlice(set, get),
  ...createLeaderboardSlice(set, get)
}));
