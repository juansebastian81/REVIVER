import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { PositionalAudio } from "@react-three/drei";

const CustomAudio = forwardRef(
  ({ url, loop = true, volume = 1, distance = 5, speed }, ref) => {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    useImperativeHandle(ref, () => ({
      toggleAudio: () => {
        if (!audioRef.current) return;

        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.playbackRate; // Puedes parametrizar esto si quieres
          audioRef.current.setVolume(volume);
          audioRef.current.play();
          setIsPlaying(true);
        }
      },
      isPlaying: () => isPlaying,
      stop: () => {
        if (audioRef.current) {
          audioRef.current.stop();
          setIsPlaying(false);
        }
      },
    }));

    return (
      <PositionalAudio
        ref={audioRef}
        url={url}
        loop={loop}
        distance={distance}
        playbackRate={speed}
      />
    );
  }
);

export default CustomAudio;
