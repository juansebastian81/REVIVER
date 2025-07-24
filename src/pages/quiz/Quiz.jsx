import './Quiz.css'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { OrbitControls, Html } from '@react-three/drei'
import { saveAttempt } from '../../services/quiz.jsx'
import { useUser, googleLogin } from '../../lib/firebase.jsx'
import { useAppStore } from '../../store/useAppStore.js'
import { QUESTIONS } from '../../data/questions.js'
import ProgressBar from '../../components/quiz/ProgressBar.jsx'

const Podium3D = lazy(() => import('../../components/quiz/Podium3D.jsx'))

export default function Quiz() {
  const user = useUser()
  const {
    status, questions, current, selected,
    correct, load, select, next, finish
  } = useAppStore(state => state)

  const leaderboard = useAppStore(s => s.leaderboard)
  const lbError = useAppStore(s => s.lbError)
  const loadLeaderboard = useAppStore(s => s.loadLeaderboard)

  const [showPodium, setShowPodium] = useState(false)
  const rigidBodiesRef = useRef([])

  useEffect(() => { if (status === 'idle') load(QUESTIONS) }, [status, load])

  useEffect(() => {
    if (status !== 'finished') return
    let cancelled = false
    ;(async () => {
      try {
        await saveAttempt({ uid: user.uid, displayName: user.displayName ?? 'Anónimo', correct, total: questions.length })
        if (!cancelled) {
          await loadLeaderboard(3)
          setShowPodium(true)
        }
      } catch (e) { console.error('saveAttempt failed', e) }
    })()
    return () => { cancelled = true }
  }, [status, user, correct, questions.length, loadLeaderboard])

  if (!user)
    return <>
      <p className="quiz-login-required">Debes iniciar sesión para hacer el quiz</p>
      <button className="quiz-login-button" onClick={googleLogin}>Iniciar sesión con Google</button>
    </>

  if (status === 'idle') return <p>Cargando preguntas…</p>

  const q = questions[current]
  const isAnswered = selected[current] != null

  const handleOptionClick = idx => {
    if (isAnswered) return
    select(idx)
    const body = rigidBodiesRef.current[idx]
    body?.applyImpulse({ x: 0, y: 5, z: -2 }, true)
    setTimeout(() => { rigidBodiesRef.current = []; current < questions.length - 1 ? next() : finish() }, 1500)
  }

  const renderOptions = () =>
    q.options.map((opt, idx) => (
      <RigidBody
        key={`${current}-${idx}`}
        position={[-3 + idx * 2, 1, 0]}
        colliders="cuboid"
        ref={el => (rigidBodiesRef.current[idx] = el)}
      >
        <mesh castShadow receiveShadow onClick={() => handleOptionClick(idx)}>
          <boxGeometry args={[1.5, 0.5, 0.5]} />
          <meshStandardMaterial color={selected[current] === idx ? 'limegreen' : 'white'} />
        </mesh>
        <Html center position={[0, 0.35, 0]}>
          <div style={{
            fontSize: '16px',
            fontWeight: 'bold',
            background: 'rgba(255,255,255,0.9)',
            padding: '6px 12px',
            borderRadius: '6px',
            textAlign: 'center',
            pointerEvents: 'none'
          }}>{opt}</div>
        </Html>
      </RigidBody>
    ))

  return (
    <div className="quiz-wrapper">
      <ProgressBar /> {/* ✅ Ya no causa zoom porque está fuera del canvas */}
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.6}/>
        <directionalLight position={[5,10,5]}/>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <Physics gravity={[0,-9.81,0]}>
          <RigidBody type="fixed">
            <mesh position={[0,-0.5,0]}>
              <boxGeometry args={[20,1,20]}/>
              <meshStandardMaterial color="#aaa"/>
            </mesh>
          </RigidBody>

          {status !== 'finished' && (
            <Html center position={[0, 4, 0]}>
              <div style={{ fontSize: '20px', textAlign: 'center', color: '#222', fontWeight: 'bold',   whiteSpace: 'nowrap'  }}>
                {q.question}
              </div>
            </Html>
          )}

          {status !== 'finished' && renderOptions()}

          {status === 'finished' && <>
            <Html center position={[0,3,0]}>
              <div style={{ textAlign:'center' }}>
                <div style={{ fontSize:'24px', color:'#28a745', fontWeight:'bold' }}>¡Quiz terminado!</div>
                <div style={{ fontSize:'20px', color:'#333' }}>Puntaje: {correct} / {questions.length}</div>
              </div>
            </Html>

            {showPodium && (
              <Suspense fallback={null}>
                <group position={[0,0,0]}>
                  <Podium3D rows={leaderboard} error={lbError} />
                </group>
              </Suspense>
            )}
          </>}
        </Physics>
      </Canvas>
    </div>
  )
}
