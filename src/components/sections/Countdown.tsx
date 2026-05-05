"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


const CANVAS_WIDTH = 390;
const COUNTDOWN_OVERLAP = 25;
const TARGET_DATE = new Date("2026-05-23T00:00:00");

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
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

const OvalUnit = ({ value, label, left }: { value: number; label: string; left: number }) => (
  <div
    className="absolute flex flex-col items-center justify-center"
    style={{ width: 60.82, height: 100, top: 0, left, borderRadius: "50%", backgroundColor: "#FFFFFF" }}
  >
    <span style={{ fontFamily: "EB Garamond, serif", fontSize: 48, lineHeight: "25px", color: "#7C1419" }}>
      {String(value).padStart(2, "0")}
    </span>
    <span style={{ fontFamily: "EB Garamond, serif", fontSize: 8, marginTop: 8, color: "#7C1419" }}>
      {label}
    </span>
  </div>
);

export default function Countdown() {
  const [scale, setScale] = useState(1);
  const { days, hours, minutes, seconds } = useCountdown();

  useEffect(() => {
    const updateScale = () => setScale(window.innerWidth / CANVAS_WIDTH);
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const ovalLeft = [53, 134, 215, 296];
  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  const values = [days, hours, minutes, seconds];

  const topBase = 25;
  const hendyTop = topBase + 40 + 51;
  const andTop = hendyTop + 38 + 8;
  const angeleTop = andTop + 28;
  const joyTop = angeleTop + 38 + 29;
  const dateTop = joyTop + 40 + 67;
  const ovalTop = dateTop + 24 + 37;
  const buttonTop = ovalTop + 100 + 20;
  const CANVAS_HEIGHT = buttonTop + 30;

  return (
    <div
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
        <Image
                  src="/images/Countdown/BungaKiri.webp"
                  alt=""
                  width={175}
                  height={175}
                  className="absolute z-0"
                  style={{ top: -78, left: 0 }}
                />

        <Image
                  src="/images/Countdown/BungaKanan.webp"
                  alt=""
                  width={205}
                  height={205}
                  className="absolute z-0"
                  style={{ bottom: -120, right: 0 }}
                />

        {/* Cordially */}
        <p className="absolute w-full text-center text-white z-10"
          style={{ top: topBase, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}>
          Cordially request the honour of your presence at<br />
          the marriage of their son and daughter
        </p>

        {/* Hendy */}
        <p className="absolute w-full text-center text-white z-10"
          style={{ top: hendyTop, fontFamily: "Cylburn, cursive", fontSize: 38 }}>
          Hendy Sudjono, S.AB.
        </p>

        {/* & */}
        <p className="absolute w-full text-center text-white z-10"
          style={{ top: andTop, fontFamily: "Cylburn, cursive", fontSize: 36 }}>
          &amp;
        </p>

        {/* Angele */}
        <p className="absolute w-full text-center text-white z-10"
          style={{ top: angeleTop, fontFamily: "Cylburn, cursive", fontSize: 38 }}>
          Angele Tantiana, B.Bus.
        </p>

        {/* Joy */}
        <p className="absolute w-full text-center text-white z-10"
          style={{ top: joyTop, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}>
          Our joy will be complete with<br />
          your presence and blessings.
        </p>

        {/* Date */}
        <p className="absolute w-full text-center text-white uppercase z-10"
          style={{ top: dateTop, fontFamily: "EB Garamond, serif", fontSize: 24 }}>
          Saturday, 23 May 2026
        </p>

        {/* Ovals */}
        <div className="absolute z-10" style={{ top: ovalTop, width: "100%", height: 100 }}>
          {values.map((val, i) => (
            <OvalUnit key={labels[i]} value={val} label={labels[i]} left={ovalLeft[i]} />
          ))}
        </div>

        {/* Button */}
       <div
  className="absolute flex items-center justify-center bg-white border border-white rounded-full"
  style={{
    top: buttonTop,
    left: "50%",
    transform: "translateX(-50%)",
    width: 160,
    height: 30,
  }}
>
  <span className="text-[#670C0F] text-[12px] font-serif">
    MARK YOUR CALENDAR
  </span>
</div>
      </div>
    </div>
  );
}