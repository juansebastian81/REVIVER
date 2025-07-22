import "./GLBViewer.css";
import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import Title from "../texts/Title";
import Staging from "../staging/Staging";
import AnimatedModel from "../animation/AnimatedModel";
import Lights from "../lights/Lights";
import CustomAudio from "../audio/CustomAudio";
import BreadCrumbs from "../navigation/BreadCrumbs";

const GLBViewer = ({
  stagingModel,
  modelUrl,
  scaleModel,
  positionModel,
  targetModel,
  cameraPosition = [0, 0, 1.5],
  fov = 20,
  titleHeart = "Tu título",
  titleSize = 0.03,
  titlePosition = [0, 0.5, -1],
  shadowPosition = [0, -0.5, 0],
  defaultAnimation,
  animationMap = {},
  audioUrl = "/sounds/whiteNoise.mp3",
  speedAudio,
}) => {
  const controlsRef = useRef();
  const audioRef = useRef();
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(
    defaultAnimation || ""
  );
  const [rotationY, setRotationY] = useState(0);

  //Staging
  const [showStaging, setShowStaging] = useState(true);
  const [currentEnv, setCurrentEnv] = useState(stagingModel);

  //Staging
  useEffect(() => {
    if (stagingModel !== currentEnv) {
      // Paso 1: desactivar fondo
      setShowStaging(false);

      // Paso 2: esperar brevemente y luego reactivar con nuevo entorno
      setTimeout(() => {
        setCurrentEnv(stagingModel);
        setShowStaging(true);
      }, 50); // puedes ajustar el delay si es necesario
    }
  }, [stagingModel, currentEnv]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (animationMap[event.code]) {
        setCurrentAnimation(animationMap[event.code]);
      }

      if (event.code === "ArrowRight") {
        setRotationY((prev) => prev + 0.1);
      }

      if (event.code === "ArrowLeft") {
        setRotationY((prev) => prev - 0.1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [animationMap]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleWheel = (event) => {
      if (controlsRef.current) {
        controlsRef.current.enableZoom = event.ctrlKey;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="viewer-container">
      <BreadCrumbs />
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          camera={{ position: cameraPosition, fov }}
          style={{ background: "transparent" }}
        >
          <Title title={titleHeart} position={titlePosition} size={titleSize} />
          <CustomAudio ref={audioRef} url={audioUrl} speed={speedAudio} />

          <group
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.toggleAudio();
              }
            }}
          >
            <AnimatedModel
              url={modelUrl}
              currentAnimation={currentAnimation}
              scale={scaleModel}
              position={positionModel}
              rotation={[0, rotationY, 0]}
            />
          </group>

          <Lights />

          <Staging environmentName={currentEnv} />

          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            target={targetModel}
          />

          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={shadowPosition}
          >
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
        </Canvas>
      </Suspense>

      {/* Botón tooltip de información */}
      <button
        className="info-button"
        onClick={() => setShowTooltip(!showTooltip)}
        title="Información"
      >
        💡
      </button>

      {/* Tooltip informativo */}
      {showTooltip && (
        <div className="tooltip-box">
          <p>
            💡 Presiona <strong>Ctrl</strong> + <strong>Scroll</strong> para
            hacer zoom.
          </p>
          <p>
            💡 Haz <strong>clic en el corazón</strong> para activar o pausar el
            sonido.
          </p>
          <p>
            💡 Usa las flechas <strong>← →</strong> para rotar el modelo.
          </p>
        </div>
      )}
    </div>
  );
};

export default GLBViewer;
