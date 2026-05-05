"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CANVAS_WIDTH = 390;
const CANVAS_HEIGHT = 843.56;

export default function HeroSection() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
  const updateScale = () => {
    // ✅ ambil lebar sections-panel, bukan window
    const panel = document.querySelector('.sections-panel') as HTMLElement;
    const containerWidth = panel ? panel.offsetWidth : window.innerWidth;
    setScale(containerWidth / CANVAS_WIDTH);
  };
  updateScale();
  window.addEventListener("resize", updateScale);
  return () => window.removeEventListener("resize", updateScale);
}, []);

  return (
    <div id="hero"
      className="relative w-full overflow-visible"
style={{ height: `${CANVAS_HEIGHT * scale}px` }}
    >
      <div
  className="absolute top-0 left-0 origin-top-left"
  style={{
    width: `${CANVAS_WIDTH}px`,
    height: `${CANVAS_HEIGHT}px`,
    transform: `scale(${scale})`,
  }}
>
  {/* Background image */}
  {/* <Image
    src="/images/Hero/Default.webp"
    alt=""
    fill
    className="absolute inset-0 object-cover z-0"
    priority
  /> */}
        {/* z-0 — BungaKiri */}
        <Image
          src="/images/Hero/BungaKiriHD.webp"
          alt=""
          width={270}
          height={220}
          className="absolute z-0"
          style={{ top: 0, left: 0 }}
        />

        {/* z-10 — AmplopKotak (dalam merah) */}
        {/* AmplopKotak */}
        <Image
          src="/images/Hero/AmplopKotak.webp"
          alt=""
          width={189}
          height={235}
          className="absolute z-50"
          style={{ top: 220, left: 170 }}
        />

        {/* Teks di atas AmplopKotak */}
        {/* Teks di atas AmplopKotak */}
        <div
          className="absolute z-[55] flex flex-col items-center justify-center text-center"
          style={{ top: 220, left: 170, width: 189, height: 235 }}
        >
          <p
            className="font-cylburn text-[#670C0F] leading-none"
            style={{ fontSize: 28 }}
          >
            Hendy
            <br />
            &amp;
            <br />
            Angele
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

        {/* z-10 — Pita kiri (belakang amplop) */}
        <Image
          src="/images/Hero/Pita.webp"
          alt=""
          width={107}
          height={311}
          className="absolute z-40"
          style={{
            top: 119,
            left: 246,
            clipPath: "inset(0 50% 0 0)",
          }}
        />

        {/* z-20 — Amplop BAWAH (di belakang foto) */}
        <Image
          src="/images/Hero/Amplop.webp"
          alt=""
          width={279}
          height={302}
          className="absolute z-20"
          style={{ top: 55, left: 46 }}
          priority
        />

        {/* z-30 — Foto Cewe */}
        <Image
          src="/images/Hero/FotoCewe.webp"
          alt="Foto pengantin wanita"
          width={110}
          height={103}
          className="absolute z-30"
          style={{ top: 105, left: 94 }}
        />

        {/* z-30 — Foto Cowo */}
        <Image
          src="/images/Hero/FotoCowo.webp"
          alt="Foto pengantin pria"
          width={130}
          height={130}
          className="absolute z-[35]"
          style={{ top: 123, left: 160 }}
        />

        {/* z-40 — Amplop ATAS / AmplopDouble (nutupin bawah foto) */}
        <Image
          src="/images/Hero/AmplopDouble.webp"
          alt=""
          width={275}
          height={186}
          className="absolute z-[37]"
          style={{ top: 135, left: 55 }}
        />

        {/* z-50 — AmplopBunga */}
        {/* AmplopBunga */}
        <Image
          src="/images/Hero/AmplopBunga.webp"
          alt=""
          width={245}
          height={280}
          className="absolute z-30"
          style={{ top: 305, left: 27 }}
        />

        {/* Teks di atas AmplopBunga */}
        <div
          className="absolute z-[35] flex flex-col justify-center"
          style={{
            top: 318,
            left: 27,
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
          <p className="font-garamond text-[#7C1419] leading-snug text-[9px] mt-1">
            Therefore what God
            <br />
            has joined together, let no one separate
          </p>
          <p className="font-garamond text-[#7C1419] italic text-[9px] mt-3 text-center">
            Matthew 19:6
          </p>
        </div>

        {/* z-50 — Bunga Center */}
        <Image
          src="/images/Hero/Bunga.webp"
          alt=""
          width={180}
          height={175}
          className="absolute z-50"
          style={{ top: 252, left: 41 }}
        />

        {/* z-50 — Pita kanan (depan amplop) */}
        <Image
          src="/images/Hero/Pita.webp"
          alt=""
          width={107}
          height={311}
          className="absolute z-[90]"
          style={{
            top: 119,
            left: 246,
            clipPath: "inset(0 0 0 50%)",
          }}
        />

        {/* z-50 — BungaKanan */}
        <Image
          src="/images/Hero/BungaKananHD.webp"
          alt=""
          width={220}
          height={220}
          className="absolute z-0"
          style={{ bottom: 25, right: -13 }}
        />

        {/* z-50 — Teks */}
        <div
          className="absolute w-full text-center px-4 z-50"
          style={{ top: 620, color: "#F5E6C8" }}
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
