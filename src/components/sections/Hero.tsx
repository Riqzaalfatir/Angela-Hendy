"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CANVAS_WIDTH = 390;
const CANVAS_HEIGHT = 843.56;

export default function HeroSection() {
  const [scale, setScale] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const panel = document.querySelector(".sections-panel") as HTMLElement;
      const containerWidth = panel ? panel.offsetWidth : window.innerWidth;
      setScale(containerWidth / CANVAS_WIDTH);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full overflow-visible"
      style={{
        height: `${CANVAS_HEIGHT * scale}px`,
        // visibility: ready ? "visible" : "hidden",
      }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: `${CANVAS_WIDTH}px`,
          height: `${CANVAS_HEIGHT}px`,
          transform: `scale(${scale})`,
        }}
      >
        {/* z-0 — BungaKiri */}
          <Image
            priority
            src="/images/Hero/BungaKiri.svg"
            alt=""
            width={270}
            height={220}
            className="absolute z-0"
            style={{ top: 0, left: 0 }}
          />

        {/* AmplopKotak */}
          <Image
            priority
            src="/images/Hero/AmplopKotak.svg"
            alt=""
            width={189}
            height={235}
            className="absolute z-50"
            style={{ top: 220, left: 170 }}
          />

        {/* Teks di atas AmplopKotak */}
          <div
            className="absolute z-[55] flex flex-col items-center justify-center text-center"
            style={{ top: 220, left: 170, width: 189, height: 235 }}
          >
            <p className="font-cylburn text-[#670C0F] flex flex-col items-center leading-none">
              <span className="text-[28px]">Hendy</span>
              <span className="text-[20px] -my-2">&amp;</span>
              <span className="text-[28px]">Angele</span>
            </p>
            <p className="font-garamond text-black leading-snug mt-[8px] text-[9px]">
              We are delighted to
              <br />
              welcome you to our wedding
              <br />
              invitation. Here, you'll find all the
              <br />
              essential details for the wedding
            </p>
          </div>

        {/* Pita kiri (belakang amplop) */}
          <Image
            priority
            src="/images/Hero/Pita.svg"
            alt=""
            width={107}
            height={311}
            className="absolute z-40"
            style={{
              top: 119,
              left: 253,
              clipPath: "inset(0 50% 0 0)",
            }}
          />

        {/* Amplop BAWAH (di belakang foto) */}
          <Image
            priority
            src="/images/Hero/AmplopHD.svg"
            alt=""
            width={279}
            height={302}
            className="absolute z-20"
            style={{ top: 55, left: 46 }}
          />

        {/* Foto Cewe */}
          <Image
            priority
            src="/images/Hero/FotoCew.svg"
            alt="Foto pengantin wanita"
            width={115}
            height={103}
            className="absolute z-30"
            style={{ top: 105, left: 90 }}
          />

        {/* Foto Cowo */}
          <Image
            priority
            src="/images/Hero/FotoCowo.svg"
            alt="Foto pengantin pria"
            width={140}
            height={140}
            className="absolute z-[35]"
            style={{ top: 125, left: 160 }}
          />

        {/* AmplopDouble (nutupin bawah foto) */}
          <Image
            priority
            src="/images/Hero/AmplopDouble.webp"
            alt=""
            width={275}
            height={186}
            className="absolute z-[37]"
            style={{ top: 135, left: 55 }}
          />

        {/* AmplopBunga */}
          <Image
            priority
            src="/images/Hero/AmplopBunga.webp"
            alt=""
            width={255}
            height={280}
            className="absolute z-30"
            style={{ top: 300, left: 20 }}
          />

        {/* Teks di atas AmplopBunga */}
          <div
            className="absolute z-[35] flex flex-col justify-center"
            style={{
              top: 320,
              left: 29,
              width: 245,
              height: 280,
              paddingLeft: 80,
            }}
          >
            <p className="font-garamond text-[#7C1419] leading-snug text-[9px]">
              So they no onger two,
              <br />
              but one flesh.
            </p>
            <p className="font-garamond text-[#7C1419] leading-snug text-[9px] mt-2">
              Therefore what God
              <br />
              has joined together, let no one separate
            </p>
            <p className="font-garamond text-[#7C1419] italic text-[9px] mt-3 pl-11">
              Matthew 19:6
            </p>
          </div>

        {/* Bunga Center */}
          <Image
            priority
            src="/images/Hero/BungaHD.webp"
            alt=""
            width={180}
            height={175}
            className="absolute z-50"
            style={{ top: 248, left: 41 }}
          />

        {/* Pita kanan (depan amplop) */}
          <Image
            priority
            src="/images/Hero/Pita.svg"
            alt=""
            width={107}
            height={311}
            className="absolute z-[90]"
            style={{
              top: 119,
              left: 252,
              clipPath: "inset(0 0 0 50%)",
            }}
          />

        {/* BungaKanan */}
          <Image
            priority
            src="/images/Countdown/BungaKanan.svg"
            alt=""
            width={215}
            height={220}
            className="absolute z-0"
            style={{ bottom: 37, right: -13 }}
          />

        {/* Teks bawah */}
          <div
            className="absolute w-full text-center px-4 z-50"
            style={{ top: 615, color: "#F5E6C8" }}
          >
            <p className="font-garamond text-[14px] text-white">
              By the Grace of God
            </p>
            <p className="font-garamond text-[14px] text-white mt-[26px]">
              MR. SUDJONO NIATAMIDJAJA and <br />
              MRS. LIANA SUTANTO
            </p>
            <p className="font-garamond text-[14px] text-white italic mt-[26px]">
              together with
            </p>
            <p className="font-garamond text-[14px] text-white mt-[26px]">
              MR. EDDY TANMADIBRATA and <br />
              MRS. YULIATI
            </p>
          </div>
      </div>
    </div>
  );
}