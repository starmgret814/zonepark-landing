"use client";

import { useEffect, useRef, forwardRef } from "react";

interface VideoProps {
  src: string;
  className?: string;
}

export const SmartVideo = forwardRef<HTMLVideoElement, VideoProps>(
  ({ src, className }, ref) => {
    const internalRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      const videoEl = internalRef.current;
      if (!videoEl) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoEl.currentTime = 0;
              videoEl.play().catch(() => {});
            } else {
              videoEl.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(videoEl);

      return () => observer.disconnect();
    }, []);

    return (
      <video
        ref={(el) => {
          internalRef.current = el;
          if (typeof ref === "function") {
            ref(el);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLVideoElement | null>).current =
              el;
          }
        }}
        src={src}
        loop
        muted
        playsInline
        className={className}
      />
    );
  }
);

SmartVideo.displayName = "SmartVideo";
