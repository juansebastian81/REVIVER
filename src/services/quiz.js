import {
  addDoc, collection, serverTimestamp,
  doc, runTransaction, getDoc
} from 'firebase/firestore'
import { db } from '../lib/firebase.jsx'

/**
 * Guarda un intento de quiz y actualiza el leaderboard si el score es mejor.
 * 
*/ 

export async function saveAttempt({ uid, displayName, correct, total }) {
    try {
        console.log('📝 Guardando intento:', { uid, displayName, correct, total });
        
        // Calcula puntaje (ajusta la fórmula a tu gusto)
        const score = Math.round((correct / total) * 100)
        console.log('📊 Score calculado:', score);

        // Guarda el intento
        console.log('🔄 Enviando a Firestore...');
        const attemptRef = await addDoc(collection(db, 'quizAttempts'), {
          uid,
          displayName,
          correct,
          total,
          score,
          createdAt: serverTimestamp()
        })
        console.log('✅ Intento guardado con ID:', attemptRef.id);


        // Si supera best score, actualiza el leaderboard
        const lbRef = doc(db, 'leaderboard', uid)
        console.log('🏆 Verificando leaderboard...');
        await runTransaction(db, async (tx) => {
            const snap = await tx.get(lbRef)

            // Si no existe, crea el documento con bestScore: 0
            if (!snap.exists()) {
            await tx.set(lbRef, { bestScore: 0 });
            console.log('Documento creado con bestScore: 0');
            } else {
            console.log('📥 Snapshot del leaderboard:', snap.data());
            }
            console.log('📥 Snapshot del leaderboard:', snap.exists() ? snap.data() : 'No existe');
            const best = snap.exists() ? snap.data().bestScore : 0
            console.log('📈 Best score actual:', best, 'Nuevo score:', score);
            if (score > best) {
              console.log('🎉 ¡Nuevo record! Actualizando leaderboard...');
              tx.set(lbRef, {
                uid,
                displayName,
                bestScore: score,
                updatedAt: serverTimestamp()
              }, { merge: true })
            } else {
              console.log('📊 Score no supera el record actual');
            }
        })
        console.log('✅ Proceso completado exitosamente');
        
    } catch (error) {
        console.error('❌ Error guardando intento:', error);
        throw error;
    }
}