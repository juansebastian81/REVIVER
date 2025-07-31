import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { useRef, forwardRef, useImperativeHandle } from 'react';
import { Vector3 } from 'three';
import { useKeyboard } from '../../hooks/useKeyboard.js';

// Se utiliza forwardRef para que este componente pueda recibir una referencia (ref) desde su componente padre
// La función recibe dos argumentos: las props (aquí no se usan, por eso se pone '_') y la ref
export default forwardRef(function PlayerBall(_, ref) {
  const body = useRef();
  const keys = useKeyboard(); // Hook para detectar teclas presionadas
  const speed = 6; // Velocidad de movimiento

  // Expone función reset para que componentes padre puedan reiniciar la pelota
  useImperativeHandle(ref, () => ({
    reset: () => {
      if (!body.current) return;
      // Resetea posición a punto inicial
      body.current.setTranslation(
        { x: 0, y: 1, z: 4 },
        true
      );
      // Detiene todo movimiento
      body.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
      body.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
    },
  }));

  // Se ejecuta en cada frame para manejar movimiento y cámara
  useFrame(({ camera }, dt) => {
    const rb = body.current;
    if (!rb) return;

    // Calcula movimiento basado en teclas presionadas
    // WASD o flechas para mover la pelota
    let vx = 0, vz = 0;
    if (keys.current['ArrowLeft']  || keys.current['KeyA']) vx -= speed;
    if (keys.current['ArrowRight'] || keys.current['KeyD']) vx += speed;
    if (keys.current['ArrowUp']    || keys.current['KeyW']) vz -= speed;
    if (keys.current['ArrowDown']  || keys.current['KeyS']) vz += speed;

    // Aplica velocidad manteniendo la velocidad Y (gravedad)
    rb.setLinvel({ x: vx, y: rb.linvel().y, z: vz }, true);

    // Hace que la cámara siga a la pelota suavemente
    const pos = rb.translation();
    const camTarget = new Vector3(pos.x, 1, pos.z);
    camera.position.lerp(new Vector3(pos.x, 5, pos.z + 8), 0.1);
    camera.lookAt(camTarget);
  });

  return (
    <RigidBody
      ref={body}
      colliders="ball"
      position={[0, 3, 4]} // Posición inicial
      activeEvents="collision" // Detecta colisiones
      restitution={0.2} // Rebote ligero
      friction={0.8} // Fricción alta para control
      linearDamping={0.5} // Amortiguación para movimiento natural
    >

      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </RigidBody>
  );
});