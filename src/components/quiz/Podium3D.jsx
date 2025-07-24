import { Canvas } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import './Podium3D.css';
import { memo } from 'react';

const heights = [2.5, 1.5, 1];
const colors  = ['gold', 'silver', '#cd7f32'];

function Blocks({ rows }) {
  return rows.slice(0, 3).map((u, i) => (
    <group key={u.id} position={[i * 2 - 2, 0, 0]}>
      <mesh position={[0, heights[i] / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, heights[i], 1.5]} />
        <meshStandardMaterial color={colors[i]} />
      </mesh>
      <Text position={[0, heights[i] + 0.4, 0]} fontSize={0.13} color="white" anchorX="center" maxWidth={1.4} >
        {u.displayName}
      </Text>
      <Text position={[0, heights[i] + 0.1, 0]} fontSize={0.18} color="#ffed4e" anchorX="center">
        {u.bestScore} pts
      </Text>
    </group>
  ));
}

const PodiumScene = memo(({ rows }) => (
  <Canvas
    className="canvas"
    shadows
    frameloop="demand"
    camera={{ position: [0, 2.5, 6], fov: 70 }}
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 10, 5]} castShadow />
    <Blocks rows={rows} />
    <OrbitControls enablePan={false} />
  </Canvas>
));

export default function Podium3D({ rows, error }) {
  if (error) {
    return (
      <div className="error">
        <p>Ocurrió un error al cargar el podio.</p>
      </div>
    );
  }
  if (!rows) {
    return (
      <div className="loading">
        <p>Cargando podio…</p>
      </div>
    );
  }
  if (rows.length === 0) {
    return (
      <div className="empty">
        <p>¡Sé el primero en aparecer en el podio!</p>
      </div>
    );
  }

  return (
    <div className="container" role="img" aria-label="Podio 3D">
      <h2 className="title">🏆 Top 3 Jugadores</h2>
      <PodiumScene rows={rows} />
      <div className="legendWrap">
        <span className="legendGold">1°</span>
        <span className="legendSilver">2°</span>
        <span className="legendBronze">3°</span>
      </div>
    </div>
  );
}
