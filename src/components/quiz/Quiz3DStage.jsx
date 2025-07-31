import { useMemo, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { OrbitControls, Html } from '@react-three/drei'
import { useAppStore } from '../../store/useAppStore.js'
import PlayerBall from './PlayerBall.jsx'
import './Quiz3DStage.css'

export default function Quiz3DStage() {
  const questions = useAppStore(s => s.questions)
  const current = useAppStore(s => s.current)
  const selected = useAppStore(s => s.selected)
  const next = useAppStore(s => s.next)
  const finish = useAppStore(s => s.finish)
  const select = useAppStore(s => s.select)
  const status = useAppStore(s => s.status)

  const q = useMemo(() => questions[current], [questions, current])
  const playerRef = useRef()

  const handleOptionClick = (idx) => {
    const isAnswered = selected[current] != null
    if (isAnswered) return

    select(idx)    

    setTimeout(() => {
      current < questions.length - 1 ? next() : finish()
    }, 1000)
  }

  useEffect(() => {
    playerRef.current?.reset();
  }, [current]);

  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.6}/>
      <directionalLight position={[5,10,5]}/>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

      <Physics gravity={[0,-9.81,0]}>
        {/* Piso */}
        <RigidBody type="fixed">
          <mesh position={[0,-0.5,0]}>
            <boxGeometry args={[20,1,20]} />
            <meshStandardMaterial color="#aaa" />
          </mesh>
        </RigidBody>

        {/* Bola-Jugador */}
        <PlayerBall ref={playerRef} />

        {/* Pregunta flotante */}
        {status !== 'finished' && (
          <Html center position={[0, 3.5, 0]}>
            <div className="quiz3d-question">{q.question}</div>
          </Html>
        )}

        {/* Opciones como paredes */}
        {status !== 'finished' && q.options.map((opt, idx) => (
          <RigidBody
            key={`${current}-${idx}`}
            type="fixed"
            position={[-3 + idx * 2, 1, 0]}
            colliders="cuboid"
            activeEvents="collision"
            onCollisionEnter={() => handleOptionClick(idx)}
          >
            <mesh castShadow>
              <boxGeometry args={[1.5, 0.5, 0.5]} />
              <meshStandardMaterial
                color={selected[current] === idx ? 'limegreen' : 'white'}
              />
            </mesh>
            <Html center position={[0, 0.35, 0]}>
              <div className={`quiz3d-option-label ${selected[current] === idx ? 'selected' : ''}`}>
                {opt}
              </div>
            </Html>
          </RigidBody>
        ))}
      </Physics>
    </Canvas>
  )
}
