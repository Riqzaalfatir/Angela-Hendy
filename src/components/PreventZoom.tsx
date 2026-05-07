"use client";

import { useEffect } from "react";

export default function PreventZoom() {
  useEffect(() => {
    // Block pinch zoom
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // Block gesture zoom (Safari-specific)
    const preventGesture = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener("touchmove", preventZoom, { passive: false });
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);

    return () => {
      document.removeEventListener("touchmove", preventZoom);
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
    };
  }, []);

  return null;
}