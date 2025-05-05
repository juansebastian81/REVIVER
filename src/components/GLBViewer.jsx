import "./GLBViewer.css";
import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import { AnimationMixer } from "three";
import Title from "../pages/texts/Title";

function AnimatedModel({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const mixer = useRef();

  useEffect(() => {
    if (animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
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

export default function GLBViewer({
  modelUrl,
  cameraPosition = [0, 0, 1.5],
  fov = 20,
  titleHeart = "Tu título",
  titlePosition = [0, 0.5, -1],
  titleColor = "black",
  titleSize = "0.2",
  shadowPosition = [0, -0.5, 0],
}) {
  const controlsRef = useRef();
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleWheel = (event) => {
      if (controlsRef.current) {
        controlsRef.current.enableZoom = event.ctrlKey;
      }
      if (event.ctrlKey && showTooltip) {
        setShowTooltip(false); // Oculta el mensaje después del primer zoom con Ctrl
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
    };
  }, [showTooltip]);

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      {/* Fondo desenfocado */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/background/backgroundHome.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)",
          zIndex: 0,
        }}
      />

      {/* Canvas 3D */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Canvas
          shadows
          camera={{ position: cameraPosition, fov }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={1.2}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          <Suspense fallback={<Html center>Cargando...</Html>}>
            <Title
              title={titleHeart}
              position={titlePosition}
              color={titleColor}
              fontSize={titleSize}
            />
            <AnimatedModel url={modelUrl} />
            <Environment preset="sunset" />
          </Suspense>

          <OrbitControls ref={controlsRef} enableZoom={false} />

          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={shadowPosition}
          >
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
        </Canvas>
      </div>

      {/* 💬 Tooltip en la parte superior derecha */}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            top: "220px", // Mueve el mensaje a la parte superior
            right: "30px", // Alineado a la derecha
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            zIndex: 2,
          }}
        >
          💡 Presiona <strong>Ctrl</strong> + <strong>Scroll</strong> para hacer
          zoom
        </div>
      )}
    </div>
  );
}
