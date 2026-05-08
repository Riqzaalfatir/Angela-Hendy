"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";

// Konstanta 
const CANVAS_WIDTH = 390;
const CANVAS_HEIGHT = 843.56;

export default function HeroSection() {
  const [scale, setScale] = useState<number | null>(null);

  useLayoutEffect(() => {
    const updateScale = () => {
      const panel = document.querySelector(".sections-panel") as HTMLElement;
      const containerWidth = panel ? panel.offsetWidth : window.innerWidth;
      setScale(containerWidth / CANVAS_WIDTH);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  if (scale === null) return (
    <div style={{ height: `${CANVAS_HEIGHT}px` }} />
  );

  return (
    <div
      id="hero"
      className="relative w-full overflow-visible mb-5"
      style={{ height: `${CANVAS_HEIGHT * scale}px` }}
    >

      {/* Canvas utama — di-scale sesuai lebar layar */}
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: `${CANVAS_WIDTH}px`,
          height: `${CANVAS_HEIGHT}px`,
          transform: `scale(${scale})`,
          willChange: "transform",
        }}
      >

        {/* Ornamen bunga kiri atas */}
        <Image priority src="/images/Hero/BungaKiri.svg" alt=""
          width={270} height={220} className="absolute z-0"
          style={{ top: 0, left: 0 }} />

        {/* Ornamen bunga kanan bawah */}
        <Image priority src="/images/Countdown/BungaKanan.svg" alt=""
          width={215} height={220} className="absolute z-0"
          style={{ bottom: 37, right: -13 }} />

        {/* Kotak amplop (background kartu nama) */}
        <Image priority src="/images/Hero/AmplopKotak.svg" alt=""
          width={189} height={235} className="absolute z-50 hero-aset-4"
          style={{ top: 220, left: 170 }} />


        {/* Teks nama & deskripsi di atas amplop kotak */}
        <div
          className="hero-aset-5 absolute z-[55] flex flex-col items-center justify-center text-center"
          style={{ top: 220, left: 170, width: 189, height: 235 }}
        >
          <p className="font-cylburn text-[#670C0F] flex flex-col items-center leading-none">
            <span className="text-[28px]">Hendy</span>
            <span className="text-[20px] -my-2 ml-3">&amp;</span>
            <span className="text-[28px]">Angele</span>
          </p>
        <p className="font-garamond text-black leading-snug mt-[8px] text-[9.5px]">
  We are delighted to<br />
  welcome you to our<br />
  wedding invitation.
</p>
<p className="font-garamond text-black leading-snug mt-2 text-[9.5px]">
  Here, you'll find all the<br />
  essential details for the<br />
  wedding
</p>
        </div>


        {/* Pita — bagian kiri (clip kanan) */}
        <Image priority src="/images/Hero/Pita.svg" alt=""
          width={107} height={311} className="absolute z-40 hero-aset-6"
          style={{ top: 119, left: 253, clipPath: "inset(0 50% 0 0)" }} />

        {/* Amplop utama HD */}
        <Image priority src="/images/Hero/AmplopHD.svg" alt=""
          width={279} height={302} className="absolute z-20 hero-aset-1"
          style={{ top: 55, left: 46 }} />

        {/* Foto pengantin wanita */}
        <Image priority src="/images/Hero/PengantinCeweHD.png" alt="Foto pengantin wanita"
          width={110} height={103} className="absolute z-30 hero-aset-2"
          style={{ top: 110, left: 93 }} />

        {/* Cover overlay foto pengantin wanita */}
        <Image priority src="/images/Hero/Cover.svg" alt="Foto pengantin wanita"
          width={112} height={107} className="absolute z-30 hero-aset-2"
          style={{ top: 109, left: 92 }} />

        {/* Foto pengantin pria */}
        <Image priority src="/images/Hero/PengantinCowoHD.png" alt="Foto pengantin pria"
          width={90} height={90} className="absolute z-[35] hero-aset-2"
          style={{ top: 125, left: 184 }} />

        {/* Cover overlay foto pengantin pria */}
        <Image priority src="/images/Hero/CoverKanan.svg" alt="Foto pengantin pria"
          width={90} height={100} className="absolute z-[35] hero-aset-2"
          style={{ top: 125, left: 185 }} />
          
        {/* Amplop double (layer tengah) */}
        <Image priority src="/images/Hero/AmplopDouble.webp" alt=""
          width={275} height={186} className="absolute z-[37] hero-aset-3"
          style={{ top: 135, left: 55 }} />

        {/* Bunga dekoratif di area amplop bawah */}
        <Image priority src="/images/Hero/AmplopBunga.webp" alt=""
          width={260} height={280} className="absolute z-30 hero-aset-7"
          style={{ top: 298, left: 20 }} />


        {/* Matthew 19:6 */}
        <div
          className="hero-aset-8 absolute z-[35] flex flex-col justify-center"
          style={{ top: 325, left: 17, width: 245, height: 280, paddingLeft: 80 }}
        >
          <p className="font-garamond text-[#7C1419] leading-snug text-[10px]">
            So they no onger two,<br />but one flesh.
          </p>
          <p className="font-garamond text-[#7C1419] leading-snug text-[10px] mt-2">
            Therefore what God<br />has joined together,   <br /> let no one separate
          </p>
          <p className="font-garamond text-[#7C1419] italic text-[10px] mt-1 pl-[68px]">
            Matthew 19:6
          </p>
        </div>

        {/* Bunga HD di atas amplop */}
        <Image priority src="/images/Hero/BungaHD.webp" alt=""
          width={180} height={175} className="absolute z-50 hero-aset-5"
          style={{ top: 248, left: 41 }} />

        {/* Pita — bagian kanan (clip kiri), z lebih tinggi agar di depan semua */}
        <Image priority src="/images/Hero/Pita.svg" alt=""
          width={107} height={311} className="absolute z-[90] hero-aset-6"
          style={{ top: 119, left: 252, clipPath: "inset(0 0 0 50%)" }} />

        {/* Teks orang tua */}
        <div className="hero-aset-8 absolute w-full text-center px-4 z-50" style={{ top: 615 }}>
          <p className="font-garamond text-[16px] text-white">By the Grace of God</p>
          <p className="font-garamond text-[16px] text-white mt-[26px]">
            MR. SUDJONO NIATAMIDJAJA and <br />MRS. LIANA SUTANTO
          </p>
          <p className="font-garamond text-[16px] text-white italic mt-[26px]">together with</p>
          <p className="font-garamond text-[16px] text-white mt-[26px]">
            MR. EDDY TANMADIBRATA and <br />MRS. YULIATI
          </p>
        </div>

      </div>
    </div>
  );
}
