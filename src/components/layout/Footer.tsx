"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CANVAS_WIDTH = 390;
const CANVAS_HEIGHT = 844;

export default function Footer() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
  const updateScale = () => {
    const isMobile = window.innerWidth < 1024;
    const containerWidth = isMobile ? window.innerWidth : 435;
    setScale(containerWidth / CANVAS_WIDTH);
  };
  updateScale();
  window.addEventListener("resize", updateScale);
  return () => window.removeEventListener("resize", updateScale);
}, []);

  return (
    <div
      className="relative w-full"
      style={{ height: `${CANVAS_HEIGHT * scale}px` }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          transform: `scale(${scale})`,
        }}
      >
        {/* BACKGROUND FOTO */}
        <Image
          src="/images/Footer/Bg-Footer.webp"
          alt=""
          fill
          priority
          className="object-cover pointer-events-none"
        />

        {/* LOGO HA — top: 90px, left: 162px */}
        <div
          className="absolute z-10"
          style={{ top: 90, left: 162 }}
        >
          <Image
            src="/images/Footer/LogoHA.svg"
            alt="HA Logo"
            width={65}
            height={52}
            className="object-contain"
          />
        </div>

        {/* LOGO PROVITE — top: 756px, left: 150px */}
        <div
          className="absolute z-10"
          style={{ top: 756, left: 150 }}
        >
          <Image
            src="/images/Footer/LogoProvite.svg"
            alt="Provite Logo"
            width={89}
            height={65}
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
}