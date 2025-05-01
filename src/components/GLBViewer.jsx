import "./GLBViewer.css";
import { useRef, Suspense, useEffect } from "react";
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

export default function GLBViewer({
  //
  // Modificar los parametros dentro de sus documentos,
  //
  // Se inicializan variables para evitar errores
  //
  modelUrl,
  cameraPosition = [0, 0, 1.5],
  fov = 20,
  titleHeart = "Tu titulo",
  titlePosition = [0, 0.5, -1],
  titleColor = "black",
  titleSize = "0.2",
  shadowPosition = [0, -0.5, 0],
}) {
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

      {/* Canvas 3D encima del fondo */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Canvas
          shadows
          camera={{ position: cameraPosition, fov }} //el fov es el zoom XD
          style={{ background: "transparent" }}
        >
          <Title
            title={titleHeart}
            position={titlePosition}
            color={titleColor}
            fontSize={titleSize}
          />

          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={1.2}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-radius={0}
          />
          <Suspense fallback={<Html center>Cargando...</Html>}>
            <AnimatedModel url={modelUrl} />
            <Environment preset="sunset" />
          </Suspense>
          <OrbitControls />
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
    </div>
  );
}
