import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei';
import { AnimationMixer } from 'three';

function AnimatedModel({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const mixer = useRef();

  useEffect(() => {
    if (animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip, group.current).play();
      });
    }

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive ref={group} object={scene} dispose={null} />;
}

export default function GLBViewer({ modelUrl , cameraPosition = [0, 1.5, 4], fov = 20 }) {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      {/* Fondo desenfocado */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("../../public/backgroundHome.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)', 
          zIndex: 0,
        }}
      />
      
      {/* Canvas 3D encima del fondo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Canvas
          shadows
          camera={{ cameraPosition, fov}} //el fov es el zoom XD
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={1.2}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-radius={0}
          />
          <Suspense fallback={<Html center>Loading...</Html>}>
            <AnimatedModel url={modelUrl} />
            <Environment preset="sunset" />
          </Suspense>
          <OrbitControls />
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}
