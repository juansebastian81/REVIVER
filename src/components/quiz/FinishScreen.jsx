import { lazy, Suspense } from 'react'
import { useAppStore } from '../../store/useAppStore.js'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import './FinishScreen.css'

const Podium3D = lazy(() => import('../../components/quiz/Podium3D.jsx'))

export default function FinishScreen() {
  const correct = useAppStore(s => s.correct)
  const total = useAppStore(s => s.questions.length)
  const leaderboard = useAppStore(s => s.leaderboard)
  const lbError = useAppStore(s => s.lbError)

  return (
    <>
      <div className="finish-screen-header">
        <div className="finish-screen-title">¡Quiz terminado!</div>
        <div className="finish-screen-score">Puntaje: {correct} / {total}</div>
      </div>
      <div className="finish-screen-canvas-container">
        <Canvas camera={{ position:[0,4,6], fov:55 }} className="finish-screen-canvas">
          <ambientLight intensity={0.7} />
          <directionalLight position={[5,10,5]} />
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />

          <Physics gravity={[0,-9.81,0]}>
            {/* Piso */}
            <RigidBody type="fixed">
              <mesh position={[0,-0.5,0]}>
                <boxGeometry args={[20,1,20]} />
                <meshStandardMaterial color="#9b72c4" />
              </mesh>
            </RigidBody>
            {/* Podio 3D */}
            <Suspense fallback={null}>
              <Podium3D rows={leaderboard} error={lbError} />
            </Suspense>
          </Physics>

        </Canvas>
      </div>
    </>
  )
}