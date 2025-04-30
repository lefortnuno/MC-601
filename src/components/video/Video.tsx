"use client";

import { useEffect, useState } from "react";
import "./video.css";

interface VideoProps {
  name: string;
  onVisibilityChange?: (visible: boolean) => void;
}

export default function Video({ name, onVisibilityChange }: VideoProps) {
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isVisible = window.innerWidth > 680;
      setIsVideoVisible(isVisible);
      onVisibilityChange?.(isVisible);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isVideoVisible && (
        <video autoPlay loop muted playsInline className="video-arriere-plan">
          <source src={`/video/webp/${name}.webm`} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      )}
    </>
  );
}
