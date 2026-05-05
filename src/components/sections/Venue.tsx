"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CANVAS_WIDTH = 390;

const Venue = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => setScale(window.innerWidth / CANVAS_WIDTH);
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Kalkulasi posisi vertikal
  const venueTop         = 49;
  const imageTop         = venueTop + 96 + 16;
  const grandBallroomTop = imageTop + 326 + 45;
  const addressTop       = grandBallroomTop + 62 + 17;
  const holyTop          = addressTop + 20 + 68;
  const receptionTop     = holyTop + 74 + 34;
  const ovalTop          = receptionTop + 74 + 77;
  const CANVAS_HEIGHT    = ovalTop + 460 + 60;

  const bungaKiriTop     = CANVAS_HEIGHT - 310 - 300;

  return (
    <div
      className="relative w-full"
      style={{
        height: `${CANVAS_HEIGHT * scale}px`,
      }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          transform: `scale(${scale})`,
        }}
      >
        {/* Bunga Kiri */}
        <Image
          src="/images/Venue/BungaKiri.webp"
          alt=""
          width={300}
          height={300}
          className="absolute z-0"
          style={{ top: bungaKiriTop, left: 0 }}
        />

        {/* Judul Venue */}
        <p
          className="absolute w-full text-center text-white z-10"
          style={{ top: venueTop, fontFamily: "Cylburn, cursive", fontSize: 96, lineHeight: "96px" }}
        >
          Venue
        </p>

        {/* Gambar + Button Google Maps */}
        <div
          className="absolute bg-white z-10"
          style={{
            top: imageTop,
            left: (CANVAS_WIDTH - 236) / 2,
            width: 236,
            height: 326,
            padding: 3,
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/Venue/Ruangan.webp"
              alt="Venue"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white"
              style={{
                width: 160,
                height: 32,
                borderRadius: 58,
                fontFamily: "EB Garamond, serif",
                fontSize: 12,
                color: "#670C0F",
                letterSpacing: 1,
              }}
            >
              GOOGLE MAPS
            </a>
          </div>
        </div>

        {/* Grand Ballroom */}
        <p
          className="absolute w-full text-center text-white z-10"
          style={{ top: grandBallroomTop, fontFamily: "Cylburn, cursive", fontSize: 30, lineHeight: "31px" }}
        >
          Grand Ballroom<br />
          Pullman Bandung Grand Central
        </p>

        {/* Alamat */}
        <p
          className="absolute w-full text-center text-white z-10"
          style={{ top: addressTop, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}
        >
          Jl. Diponegoro No.27, Bandung
        </p>

        {/* Holy Matrimony */}
        <p
          className="absolute w-full text-center text-white z-10"
          style={{ top: holyTop, fontFamily: "Cylburn, cursive", fontSize: 48, lineHeight: "48px" }}
        >
          Holy Matrimony
          <span style={{ display: "block", fontFamily: "EB Garamond, serif", fontSize: 18, lineHeight: "26px" }}>
            at 11.00 AM
          </span>
        </p>

        {/* Wedding Reception */}
        <p
          className="absolute w-full text-center text-white z-10"
          style={{ top: receptionTop, fontFamily: "Cylburn, cursive", fontSize: 48, lineHeight: "48px" }}
        >
          Wedding Reception
          <span style={{ display: "block", fontFamily: "EB Garamond, serif", fontSize: 18, lineHeight: "26px" }}>
            at 17.00 PM
          </span>
        </p>

        {/* Foto Oval */}
        <div
          className="absolute overflow-hidden z-10"
          style={{
            top: ovalTop,
            left: (CANVAS_WIDTH - 302) / 2,
            width: 302,
            height: 460,
            borderRadius: "50%",
            border: "2px solid #FFFFFF",
          }}
        >
          <Image
            src="/images/Venue/Pengantin.webp"
            alt="Foto couple"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Venue;