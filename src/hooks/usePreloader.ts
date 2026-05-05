"use client";

import { useEffect, useState } from "react";

const IMAGES_TO_PRELOAD = [
  "/images/Hero/Default.webp",
  "/images/Hero/BungaKiri.svg",
  "/images/Hero/AmplopKotak.svg",
  "/images/Hero/AmplopHD.svg",
  "/images/Hero/FotoCew.svg",
  "/images/Hero/FotoCowo.svg",
  "/images/Hero/AmplopDouble.webp",
  "/images/Hero/AmplopBunga.webp",
  "/images/Hero/BungaHD.webp",
  "/images/Hero/Pita.svg",
  "/images/Countdown/BungaKana.svg",
  "/images/Countdown/BungaKiri.svg",
  "/images/Popup/BgDekstop.webp",
  "/images/Popup/AmplopOpening.svg",
  "/images/Wishes/BungaAtas.svg",
  "/images/Wishes/DaunAtas.webp",
  "/images/Wishes/DaunBawah.webp",
  "/images/Wishes/DaunKanan.webp",
  "/images/Venue/Pengantin.webp",
  "/images/Venue/Ruangan.webp",
  "/images/Footer/Bg-Footer.webp",
  "/images/Footer/LogoHA.svg",
];

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let count = 0;
    const total = IMAGES_TO_PRELOAD.length;

    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        count++;
        setProgress(Math.round((count / total) * 100));
        if (count === total) setLoaded(true);
      };
    });
  }, []);

  return { loaded, progress };
}