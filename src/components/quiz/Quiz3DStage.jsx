import { useMemo, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { OrbitControls, Html } from '@react-three/drei'
import { useAppStore } from '../../store/useAppStore.js'
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
  const rigidBodiesRef = useRef([])

  const handleOptionClick = (idx) => {
    const isAnswered = selected[current] != null
    if (isAnswered) return

    select(idx)
    const body = rigidBodiesRef.current[idx]
    body?.applyImpulse({ x: 0, y: 5, z: -2 }, true)

    setTimeout(() => {
      rigidBodiesRef.current = []
      current < questions.length - 1 ? next() : finish()
    }, 1000)
  }

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

        {/* Pregunta */}
        {status !== 'finished' && (
          <Html center position={[0, 4, 0]}>
            <div className="quiz3d-question">
              {q.question}
            </div>
          </Html>
        )}

        {/* Opciones */}
        {status !== 'finished' &&
          q.options.map((opt, idx) => (
            <RigidBody
              key={`${current}-${idx}`}
              position={[-3 + idx * 2, 1, 0]}
              colliders="cuboid"
              ref={el => (rigidBodiesRef.current[idx] = el)}
            >
              <mesh castShadow receiveShadow onClick={() => handleOptionClick(idx)}>
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
          ))
        }
      </Physics>
    </Canvas>
  )
}
