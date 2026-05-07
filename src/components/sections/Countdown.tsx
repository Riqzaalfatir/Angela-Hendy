"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeIn";
import AOS from "aos";
import "aos/dist/aos.css";
import FadeIn from "../ui/FadeIn";




// Konstanta 
const CANVAS_WIDTH = 390;
const COUNTDOWN_OVERLAP = 25; // overlap ke section sebelumnya (px)
const TARGET_DATE = new Date("2026-05-23T00:00:00"); // tanggal pernikahan

// Hook Countdown
function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = TARGET_DATE.getTime() - new Date().getTime();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000); // update tiap detik
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}





// Komponen Utama
export default function Countdown() {
  const [scale, setScale] = useState(1);
  const { days, hours, minutes, seconds } = useCountdown();

  // Scale canvas menyesuaikan lebar sections panel
  useEffect(() => {
    const updateScale = () => {
      const panel = document.querySelector('.sections-panel') as HTMLElement;
      const containerWidth = panel ? panel.offsetWidth : window.innerWidth;
      setScale(containerWidth / CANVAS_WIDTH);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  setTimeout(() => {
    AOS.refreshHard();
  }, 500);
}, []);

useEffect(() => {
  AOS.refreshHard();
}, [scale]);


  // Nilai countdown
  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  const values = [days, hours, minutes, seconds];

  // ─── Posisi vertikal elemen (px, dalam koordinat canvas 390px) ───
  const topBase        = 25;
  const hendyTop       = topBase + 40 + 45;   // nama mempelai pria
  const andTop         = hendyTop + 38;         // simbol "&"
  const angeleTop      = andTop + 32;           // nama mempelai wanita
  const joyTop         = angeleTop + 38 + 45;  // teks "Our joy..."
  const dateTop        = joyTop + 40 + 67;     // tanggal acara
  const ovalTop        = dateTop + 24 + 40;    // oval countdown
  const buttonTop      = ovalTop + 100 + 33;   // tombol kalender
  const CANVAS_HEIGHT  = buttonTop + 30;       // total tinggi canvas

  return (
    <div
      id="profile"
      className="relative w-full"
      style={{
        height: `${CANVAS_HEIGHT * scale}px`,
        marginTop: `-${COUNTDOWN_OVERLAP * scale}px`, 
      }}
    >

      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: `${CANVAS_WIDTH}px`,
          height: `${CANVAS_HEIGHT}px`,
          transform: `scale(${scale})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        
        {/* Ornamen bunga kiri atas */}
        <Image
          src="/images/Countdown/BungaKiri.svg"
          alt=""
          width={175}
          height={175}
          className="absolute z-0"
          style={{ top: -75, left: -5 }}
        />

        {/* Ornamen bunga kanan bawah */}
        <Image
          src="/images/Countdown/BungaKana.svg"
          alt=""
          width={250}
          height={250}
          className="absolute z-0"
          style={{ bottom: -230, right: -5 }}
        />

        {/* Teks pembuka */}
<FadeIn delay={0.2}>
          <p  className="absolute w-full text-center text-white z-10"
            style={{ top: topBase, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}>
            Cordially request the honour of your presence at<br />
            the marriage of their son and daughter
          </p>
</FadeIn>

        {/* Nama mempelai pria */}
<FadeIn delay={0.6}>

          <p className="absolute w-full text-center text-white z-10"
            style={{ top: hendyTop, fontFamily: "Cylburn, cursive", fontSize: 38 }}>
            Hendy Sudjono, S.AB.
          </p>
          </FadeIn>

        {/* Simbol & */}
        <FadeIn delay={1}>

          <p className="absolute w-full text-center text-white z-10"
            style={{ top: andTop, fontFamily: "Cylburn, cursive", fontSize: 36 }}>
            &amp;
          </p>
                    </FadeIn>


        {/* Nama mempelai wanita */}
        <FadeIn delay={1.4}>
          <p className="absolute w-full text-center text-white z-10"
            style={{ top: angeleTop, fontFamily: "Cylburn, cursive", fontSize: 38 }}>
            Angele Tantiana, B.Bus.
          </p>
                    </FadeIn>

        {/* Teks "Our joy..." */}
        <FadeIn delay={1.8}>
          <p className="absolute w-full text-center text-white z-10"
            style={{ top: joyTop, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}>
            Our joy will be complete with<br />
            your presence and blessings.
          </p>
        </FadeIn>

        {/* Tanggal acara */}
        <FadeIn delay={2.2}>
          <p className="absolute w-full text-center text-white uppercase z-10"
            style={{ top: dateTop, fontFamily: "EB Garamond, serif", fontSize: 24 }}>
            Saturday, 23 May 2026
          </p>
        </FadeIn>

        {/* Oval countdown */}
        <div className="absolute z-10 flex justify-center gap-4" style={{ top: ovalTop, width: "100%" }}>
  {values.map((val, i) => (
    <FadeIn key={labels[i]} delay={0.7 + i * 0.3}>
      <div
        className="flex flex-col items-center justify-center"
        style={{ width: 60.82, height: 100, borderRadius: "50%", backgroundColor: "#FFFFFF" }}
      >
        <span style={{ fontFamily: "EB Garamond, serif", fontSize: 36, lineHeight: "25px", color: "#7C1419" }}>
          {String(val).padStart(2, "0")}
        </span>
        <span style={{ fontFamily: "EB Garamond, serif", fontSize: 8, marginTop: 7, color: "#7C1419" }}>
          {labels[i]}
        </span>
      </div>
    </FadeIn>
  ))}
</div>

        {/* Tombol Mark Your Calendar */}
        <FadeIn delay={3.5}>
          <div
            className="absolute flex items-center justify-center bg-white  border border-white rounded-full"
            style={{
              top: buttonTop,
              left: "50%",
              transform: "translateX(-50%)",
              width: 160,
              height: 30,
            }}
          >
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Hendy+%26+Angele&dates=20260523T000000Z/20260523T235959Z&details=Wedding+of+Hendy+Sudjono+%26+Angele+Tantiana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#670C0F]  text-[12px] font-serif">
              MARK YOUR CALENDAR
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}