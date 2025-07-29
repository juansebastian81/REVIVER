import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import sadSound from "/sounds/BlondeRedheadFortheDamagedCoda.mp3";
import "./NotFound.css";

const SadCharacter = ({ onClick, isPlaying }) => {
  const { scene } = useGLTF("/models-3d/SadPou.glb");
  const ref = useRef();
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 10 - 5;
      const y = -(e.clientY / window.innerHeight) * 10 + 5;
      mouse.current = [x, y];
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ camera }) => {
    if (ref.current) {
      const vector = new THREE.Vector3(mouse.current[0], mouse.current[1], 0.5);
      vector.unproject(camera);
      ref.current.lookAt(vector);
    }
  });

  return (
    <group ref={ref} onClick={onClick}>
      <primitive object={scene} scale={2} position={[0, -0.5, 0]} />
      <Html position={[0.5, 1, 0]}>
        <div className="dialogue-bubble">¿Estás perdido... como yo?</div>
      </Html>
      <Html position={[-1.5, 0.5, 0]}>
        <div className="dialogue-bubble">
          {isPlaying
            ? "Si me presionas, no escucharás más la canción"
            : "Presióname para escuchar algo triste"}
        </div>
      </Html>
    </group>
  );
};

const NotFound = () => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((e) => {
          console.warn("No se pudo reproducir el audio:", e);
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="not-found-container">
      <audio ref={audioRef} src={sadSound} loop />
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <SadCharacter onClick={toggleAudio} isPlaying={isPlaying} />

        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>

      <div className="not-found-ui">
        <h1 className="not-found-title">404: Página no encontrada</h1>
        <button
          className="rescue-button"
          onClick={() => (window.location.href = "/")}
        >
          🔙 Regresar al inicio
        </button>
      </div>
    </div>
  );
};

export default NotFound;
