import { Text } from '@react-three/drei'
import './Podium3D.css'
import { memo } from 'react'

const heights = [2.5, 1.5, 1]
const colors = ['gold','silver','#cd7f32']

function Blocks({ rows }) {
  return rows.slice(0,3).map((u,i)=>(
    <group key={u.id} position={[i*2 - 2, 0, 0]}>
      <mesh position={[0, heights[i]/2, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5,heights[i],1.5]}/>
        <meshStandardMaterial color={colors[i]}/>
      </mesh>
      <Text position={[0, heights[i]+0.4, 0]} fontSize={0.13} color="white" anchorX="center" maxWidth={1.4}>
        {u.displayName}
      </Text>
      <Text position={[0, heights[i]+0.1, 0]} fontSize={0.18} color="#ffed4e" anchorX="center">
        {u.bestScore} pts
      </Text>
    </group>
  ))
}

export default memo(function Podium3D({ rows, error }) {
  if (error) return <Html><div className="error"><div>Ocurrió un error al cargar el podio.</div></div></Html>
  if (!rows) return <Html><div className="loading"><div>Cargando podio…</div></div></Html>
  if (rows.length === 0) return <Html><div className="empty"><div>¡Sé el primero!</div></div></Html>
  return <Blocks rows={rows}/>
})
