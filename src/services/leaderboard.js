import {
  collection,
  orderBy,
  limit,
  query,
  getDocs,
  onSnapshot
} from 'firebase/firestore';
import { db } from '../lib/firebase';

/* Query top N */
const topQuery = (n = 3) =>
  query(collection(db, 'leaderboard'), orderBy('bestScore', 'desc'), limit(n));

/* Lectura única – promesa */
export async function fetchLeaderboardOnce(n = 3) {
  const snap = await getDocs(topQuery(n));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

/* Suscripción en vivo – retorna unsubscribe */
export function subscribeLeaderboard(n = 3, cb, errCb) {
  return onSnapshot(topQuery(n), snap => cb(snap.docs.map(d => ({ id: d.id, ...d.data() }))), errCb);
}
