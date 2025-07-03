import "./GLBViewer.css";
import { useRef, Suspense, useEffect, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, PositionalAudio } from "@react-three/drei";
import Title from "../texts/Title";
import Staging from "../staging/Staging";
import AnimatedModel from "../animation/AnimatedModel";
import Lights from "../lights/Lights";

const GLBViewer = ({
  modelUrls = [],
  cameraPosition = [0, 0, 1.5],
  fov = 20,
  titleHeart = "Tu título",
  titleSize = 0.03,
  titlePosition = [0, 0.5, -1],
  shadowPosition = [0, -0.5, 0],
}) => {
  const controlsRef = useRef();
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef();
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const handleClick = useCallback(() => {
    audioRef.current.playbackRate = 1.5;
    audioRef.current.setVolume(1);
    audioRef.current.play();
  }, []);

  const nextModel = () => {
    setCurrentModelIndex((prev) => (prev + 1) % modelUrls.length);
  };

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

            <group onClick={handleClick}>
              <AnimatedModel url={modelUrls[currentModelIndex]} />
            </group>

            <PositionalAudio
              ref={audioRef}
              loop
              url="/sounds/heartBeating.mp3"
              distance={5}
            />

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
