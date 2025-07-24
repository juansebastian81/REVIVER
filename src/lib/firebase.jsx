// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/**
 * Configuración de Firebase
 * 
 * Las credenciales se obtienen de las variables de entorno (.env)
 * Al parecer las variables de entorno si o si deben iniciar con VITE_*** para ser accesibles en el cliente
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

/** Inicialización de Firebase */
const app = initializeApp(firebaseConfig);

/** Instancia de Firebase Authentication */
export const auth = getAuth(app)

/** Instancia de Firestore Database */
export const db   = getFirestore(app)

/** Instancia de Google Analytics (opcional) */
const analytics = getAnalytics(app);

/**
 * Contexto de React para manejar el estado del usuario autenticado
 * Permite acceder al usuario actual desde cualquier componente
 */
const AuthCtx = createContext(null)

/**
 * Hook personalizado para acceder al usuario autenticado
 * 
 * Este devuelve el usuario actual o null si no está autenticado.
 * 
 * ejemplo de uso:
 * const user = useUser();
 * if (user) {
 *   console.log(user.displayName, user.email);
 * }
 */
export const useUser = () => useContext(AuthCtx)

/**
 * Proveedor de contexto de autenticación
 * 
 * Este componente debe envolver toda la aplicación para que los componentes
 * hijos puedan acceder al estado del usuario autenticado.
 * 
 * Maneja automáticamente:
 * - La suscripción a cambios de estado de autenticación
 * - La actualización del estado cuando el usuario se autentica/desautentica
 * - La limpieza de suscripciones cuando el componente se desmonta
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    // Suscribirse a cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, setUser)
    
    // Cleanup: desuscribirse cuando el componente se desmonte
    return () => unsubscribe()
  }, [])
  
  return <AuthCtx.Provider value={user}>{children}</AuthCtx.Provider>
}

/**
 * Inicia sesión con Google usando un popup
 * 
 * Abre una ventana emergente donde el usuario puede seleccionar su cuenta de Google
 * y autorizar el acceso a la aplicación. Una vez completado, el usuario quedará
 * autenticado y su información estará disponible a través del contexto.
 * 
 * ejemplo de uso:
 * try {
 *   const result = await googleLogin();
 *   console.log('Usuario autenticado:', result.user.displayName);
 * } catch (error) {
 *   console.error('Error de autenticación:', error.message);
 * }
 */
export async function googleLogin() {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    
    // En caso de necesitarse para saber más sobre el usuario autenticado
    // const credential = GoogleAuthProvider.credentialFromResult(result)
    // const token = credential.accessToken
    // const user = result.user
    
    return result
  } catch (error) {
    if (error.code === 'auth/popup-closed-by-user') {
      console.log('El usuario cerró la ventana de autenticación')
    } else if (error.code === 'auth/popup-blocked') {
      console.error('El navegador bloqueó la ventana emergente')
    } else if (error.code === 'auth/cancelled-popup-request') {
      console.log('Solicitud de popup cancelada')
    } else {
      console.error('Error durante la autenticación:', error.message)
    }
    
    throw error
  }
}

/**
 * Cierra la sesión del usuario actual
 * 
 * Desautentica al usuario actual y limpia su estado en toda la aplicación.
 * El contexto de autenticación se actualizará automáticamente y el usuario
 * pasará a ser null en todos los componentes.
 *
 * ejemplo de uso:
 * try {
 *   await logout();
 *   console.log('Sesión cerrada exitosamente');
 *   // Redirigir al usuario o actualizar UI
 * } catch (error) {
 *   console.error('Error al cerrar sesión:', error);
 * }
 */
export async function logout() {
  try {
    await auth.signOut()
    console.log('Usuario desconectado exitosamente')
  } catch (error) {
    console.error('Error al cerrar sesión:', error.message)
    throw error
  }
}

/**
 * USO EN COMPONENTES [Estos se pueden usar en cualquier componente ya que envolvimos la aplicación con AuthProvider]
 *  
 *    - Importa: import { useUser, googleLogin, logout } from './lib/firebase'
 *    - Obtén el usuario: const user = useUser()
 *    - Autentica: await googleLogin()
 *    - Cerrar sesión: await logout()
 */