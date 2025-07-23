import { fetchLeaderboardOnce, subscribeLeaderboard } from '../../services/leaderboard.js';

export const createLeaderboardSlice = (set, get) => ({
  leaderboard: null,      // null = loading | [] = vacío
  lbError    : null,
  lbIsLive   : false,
  lbUnsub    : null,

  /* Fetch único */
  loadLeaderboard: async (top = 3) => {
    set({ leaderboard: null, lbError: null });
    try {
      const rows = await fetchLeaderboardOnce(top);
      set({ leaderboard: rows });
    } catch (err) {
      console.error(err);
      set({ leaderboard: [], lbError: err });
    }
  },

  /* Tiempo real ON */
  startLeaderboardLive: (top = 3) => {
    const { lbUnsub } = get();
    if (lbUnsub) lbUnsub();

    set({ lbIsLive: true, leaderboard: null });
    const unsub = subscribeLeaderboard(
      top,
      rows => set({ leaderboard: rows }),
      err  => set({ lbError: err })
    );
    set({ lbUnsub: unsub });
  },

  /* Tiempo real OFF */
  stopLeaderboardLive: () => {
    const { lbUnsub } = get();
    if (lbUnsub) lbUnsub();
    set({ lbIsLive: false, lbUnsub: null });
  }
});
