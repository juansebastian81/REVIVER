import "./GLBViewer.css";
import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, Html, Center } from "@react-three/drei";
import Title from "../texts/Title";
import Staging from "../staging/Staging";
import AnimatedModel from "../animation/AnimatedModel";
import Lights from "../lights/Lights";
import CustomAudio from "../audio/CustomAudio";
import BreadCrumbs from "../navigation/BreadCrumbs";
import Text2D from "../texts/Text2d";
import CameraReset from "./ResetCamera";

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
  title2D = "Tu titulo 2D",
  text2D = "Tu texto 2D",
  youtubeURL = "NdYWuo9OFAw",
}) => {
  //Canvas
  const [activeCanvas, setActiveCanvas] = useState(0);

  const goToPreviousCanvas = () => {
    setActiveCanvas((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const goToNextCanvas = () => {
    setActiveCanvas((prev) => (prev === 1 ? 0 : prev + 1));
  };

  //video
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowVideo(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (showVideo) {
      // Bloqueo de scroll completo
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // <- esto evita scroll por fuera del body
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [showVideo]);

  useEffect(() => {
    const preventScrollKeys = (e) => {
      const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", " "];
      if (showVideo && keys.includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", preventScrollKeys);
    return () => window.removeEventListener("keydown", preventScrollKeys);
  }, [showVideo]);

  //Controles
  const controlsRef = useRef();

  //Audio
  const audioRef = useRef();

  //Tooltips
  const [showTooltip, setShowTooltip] = useState(false);

  //Animaciones
  const [currentAnimation, setCurrentAnimation] = useState(
    defaultAnimation || ""
  );

  //Rotacion
  const [rotationY, setRotationY] = useState(0);

  //Staging
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

  //Rotacion
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

  //Zoom
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
      {/* Fondo visual */}
      <div className="viewer-background" />

      {/* Navegación tipo breadcrumbs */}
      <BreadCrumbs />

      {/* Canvas y modelo */}
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          camera={{ position: cameraPosition, fov }}
          style={{ background: "transparent" }}
        >
          {activeCanvas === 0 && (
            <>
              <CameraReset position={cameraPosition} fov={fov} />
              <Title
                title={titleHeart}
                position={titlePosition}
                size={titleSize}
              />
              <CustomAudio ref={audioRef} url={audioUrl} speed={speedAudio} />
              <group onClick={() => audioRef.current?.toggleAudio()}>
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
            </>
          )}
          {activeCanvas === 1 && !showVideo && (
            <>
              <CameraReset position={[0, 0, 0]} fov={6} />
              <Text2D text={title2D} position={[0, 0.225, -5]} />
              <Text2D text={text2D} position={[0, 0.18, -5]} />

              <Html center position={[0, -0.15, -5]}>
                <button
                  className="video-button"
                  onClick={() => setShowVideo(true)}
                >
                  ▶ Ver Video
                </button>
              </Html>
            </>
          )}
        </Canvas>
      </Suspense>

      {showVideo && (
        <div className="video-popup">
          <iframe
            width="854"
            height="480"
            src={`https://www.youtube.com/embed/${youtubeURL}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="close-button" onClick={() => setShowVideo(false)}>
            ✖ Cerrar
          </button>
        </div>
      )}

      {/* Botones navegación */}
      <div className="canvas-switch-buttons">
        <button onClick={goToPreviousCanvas}>←</button>
        <button onClick={goToNextCanvas}>→</button>
      </div>

      {/* Botón de info */}
      <button
        className="info-button"
        onClick={() => setShowTooltip(!showTooltip)}
        title="Información"
      >
        💡
      </button>

      {/* Tooltip */}
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
