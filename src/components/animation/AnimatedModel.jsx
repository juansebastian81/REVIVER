import { AnimationMixer } from "three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const AnimatedModel = ({ url, currentAnimation, scale, position, rotation }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const mixer = useRef();
  const actions = useRef({});
  const activeAction = useRef();

  // Inicialización del modelo y animaciones
  useEffect(() => {
    console.log(
      "Animaciones disponibles:",
      animations.map((a) => a.name)
    );
    if (!scene || animations.length === 0) return;

    mixer.current = new AnimationMixer(scene);
    actions.current = {};

    animations.forEach((clip) => {
      actions.current[clip.name] = mixer.current.clipAction(clip);
    });

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    if (actions.current[currentAnimation]) {
      activeAction.current = actions.current[currentAnimation];
      activeAction.current.play();
    } else {
      console.warn(`Animación inicial "${currentAnimation}" no encontrada`);
    }

    return () => mixer.current?.stopAllAction();
  }, [scene, animations, url]);

  // Cambio de animaciones dinámico
  useEffect(() => {
    if (!mixer.current || !actions.current) return;

    const nextAction = actions.current[currentAnimation];
    if (nextAction && activeAction.current !== nextAction) {
      if (activeAction.current) {
        activeAction.current.fadeOut(0.3);
      }
      nextAction.reset().fadeIn(0.3).play();
      activeAction.current = nextAction;
    }
  }, [currentAnimation]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <primitive
      ref={group}
      object={scene}
      dispose={null}
      scale={scale}
      position={position}
      rotation={rotation} 
    />
  );
};

export default AnimatedModel;
