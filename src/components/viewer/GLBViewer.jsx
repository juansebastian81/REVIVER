import "./GLBViewer.css";
import { useRef, Suspense, useEffect, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import Title from "../texts/Title";
import Staging from "../staging/Staging";
import AnimatedModel from "../animation/AnimatedModel";
import Lights from "../lights/Lights";
import AudioPlayer from "../audio/CustomAudio";
import CustomAudio from "../audio/CustomAudio";

const GLBViewer = ({
  //Modelo 3D
  modelUrl,

  //Camara
  cameraPosition = [0, 0, 1.5],
  fov = 20,

  //Titulo 3D
  titleHeart = "Tu título",
  titleSize = 0.03,
  titlePosition = [0, 0.5, -1],

  //Sombras
  shadowPosition = [0, -0.5, 0],

  //animaciones
  defaultAnimation,
  animationMap,

  //Audio
  audioUrl = "/sounds/whiteNoise.mp3",
  speedAudio,
}) => {
  //Controles
  const controlsRef = useRef();
  //Tooltips
  const [showTooltip, setShowTooltip] = useState(true);
  //Audio
  const audioRef = useRef();
  //Modelo 3D
  const [currentAnimation, setCurrentAnimation] = useState(
    defaultAnimation || ""
  );

  //Animaciones
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (animationMap[event.code]) {
        setCurrentAnimation(animationMap[event.code]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [animationMap]);

  const resetAnimation = () => setCurrentAnimation(defaultAnimation);

  //evento rueda de raton
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleWheel = (event) => {
      if (controlsRef.current) {
        controlsRef.current.enableZoom = event.ctrlKey;
      }
      if (event.ctrlKey && showTooltip) {
        setShowTooltip(false);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
    };
  }, [showTooltip]);

  return (
    <>
      <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
        <Suspense fallback={<Loader />}>
          <Canvas
            shadows
            camera={{ position: cameraPosition, fov }}
            style={{ background: "transparent" }}
          >
            <Title
              title={titleHeart}
              position={titlePosition}
              size={titleSize}
            />

            <CustomAudio ref={audioRef} url={audioUrl} speed={speedAudio} />

            <group
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.toggleAudio(); // Hace play y pause con el mismo click
                }
              }}
            >
              <AnimatedModel
                url={modelUrl}
                currentAnimation={currentAnimation}
              />
            </group>

            <Lights />

            <Staging />

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
        </Suspense>

        <button className="next-button" onClick={resetAnimation}>
          Volver a Animación por Defecto
        </button>

        {/* Botón fijo en el lado derecho */}

        {/* Tooltip en la parte superior derecha */}
        {showTooltip && (
          <div
            style={{
              position: "absolute",
              top: "220px",
              right: "30px",
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "14px",
              zIndex: 2,
            }}
          >
            💡 Presiona <strong>Ctrl</strong> + <strong>Scroll</strong> para
            hacer zoom
          </div>
        )}

        {showTooltip && (
          <div
            style={{
              position: "absolute",
              top: "260px",
              right: "30px",
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "14px",
              zIndex: 2,
            }}
          >
            💡 Presiona <strong>Click Izquierdo en el corazón</strong>
            <br></br>
            para activar sonido
          </div>
        )}
      </div>
    </>
  );
};
export default GLBViewer;
