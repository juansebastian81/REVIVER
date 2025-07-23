/**
 * Hook personalizado que obtiene y mantiene actualizada en tiempo real
 * la tabla de clasificación (leaderboard) desde Firebase Firestore.
 * 
 * Utiliza onSnapshot para escuchar cambios automáticamente y actualizar
 * la UI sin necesidad de refrescar manualmente.
 * 
 * 
 * // Uso básico - Top 3 jugadores
 * import { useLeaderboard } from './hooks/useLeaderboard';
 * 
 * function Leaderboard() {
 *   const topPlayers = useLeaderboard(3);
 *   
 *   return (
 *     <div>
 *       <h2>Top 3 Jugadores</h2>
 *       {topPlayers.map((player, index) => (
 *         <div key={player.id}>
 *           #{index + 1} - {player.displayName}: {player.bestScore} pts
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 */

import { useEffect, useState } from 'react'
import { collection, orderBy, limit, onSnapshot, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'

/**
 * Hook para obtener la tabla de clasificación en tiempo real
 * 
 * Establece una suscripción en tiempo real a la colección 'leaderboard'
 * de Firestore, ordenada por mejor puntaje (bestScore) de forma descendente.
 * Los datos se actualizan automáticamente cuando hay cambios en la base de datos.
 * 
 * La suscripción se limpia automáticamente cuando el componente se desmonta
 * o cuando cambia el parámetro 'top'.
 * 
 * Retorna un array de objetos que representan a los jugadores en la tabla de clasificación.
 *   - id: string - ID único del documento en Firestore
 *   - uid: string - ID del usuario de Firebase Auth
 *   - displayName: string - Nombre para mostrar del jugador
 *   - bestScore: number - Mejor puntaje obtenido por el jugador
 *   - updatedAt: Timestamp - Última vez que se actualizó el record
 * 
 * // Obtener top 3 jugadores
 * const top3 = useLeaderboard(3);
 *
 * // Obtener top 100 jugadores (o usar el default de 50)
 * const allPlayers = useLeaderboard(100);
 * const defaultTop = useLeaderboard(); // 50 por defecto
 * 
 * // Implementación completa con loading y error states
 * function LeaderboardComponent() {
 *   const players = useLeaderboard(20);
 *   
 *   if (players.length === 0) {
 *     return <div>Cargando tabla de clasificación...</div>;
 *   }
 *   
 *   return (
 *     <div className="leaderboard">
 *       <h2>Tabla de Clasificación</h2>
 *       {players.map((player, index) => (
 *         <div key={player.id} className="player-row">
 *           <span className="rank">#{index + 1}</span>
 *           <span className="name">{player.displayName}</span>
 *           <span className="score">{player.bestScore} pts</span>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 */
export const useLeaderboard = (top = 50) => {
  // Estado que contiene la lista de jugadores del leaderboard
  const [rows, setRows] = useState([])
  
  useEffect(() => {
    /**
     * Configuración de la consulta Firestore:
     * - collection(db, 'leaderboard'): Obtiene la colección leaderboard
     * - orderBy('bestScore', 'desc'): Ordena por mejor puntaje, descendente
     * - limit(top): Limita a los primeros 'top' resultados que se pasan como
     *   parámetro en useLeaderboard
     */
    const q = query(
      collection(db, 'leaderboard'), 
      orderBy('bestScore', 'desc'), 
      limit(top)
    )
    
    /**
     * onSnapshot establece un listener en tiempo real que:
     * 1. Se ejecuta inmediatamente con los datos actuales
     * 2. Se ejecuta cada vez que hay cambios en la consulta
     * 3. Retorna una función de cleanup para desuscribirse
     * 
     * snap.docs.map() transforma los documentos de Firestore en objetos JS:
     * - d.id: ID del documento
     * - d.data(): Datos del documento
     * - { id: d.id, ...d.data() }: Combina ID con los datos
     */
    return onSnapshot(q, (snap) => 
      setRows(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    )
  }, [top]) // Se re-ejecuta cuando cambia el parámetro 'top'
  
  return rows
}