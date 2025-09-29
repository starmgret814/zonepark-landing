"use client";

import { useEffect, useRef } from "react";

interface VideoProps {
  src: string;
  className?: string;
}

export function SmartVideo({ src, className }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Entra en pantalla → reinicia y reproduce
            videoEl.currentTime = 0;
            videoEl.play().catch(() => {});
          } else {
            // Sale de pantalla → pausa
            videoEl.pause();
          }
        });
      },
      { threshold: 0.5 } // 50% visible = se considera en pantalla
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      className={className}
    />
  );
}
