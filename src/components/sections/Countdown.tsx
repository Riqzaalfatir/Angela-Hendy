"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

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
    <span style={{ fontFamily: "EB Garamond, serif", fontSize: 8, marginTop: 12, color: "#7C1419" }}>
      {label}
    </span>
  </div>
);

export default function Countdown() {
  const [scale, setScale] = useState(1);
  const { days, hours, minutes, seconds } = useCountdown();

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

  const ovalLeft = [53, 134, 215, 296];
  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  const values = [days, hours, minutes, seconds];

  const topBase = 25;
  const hendyTop = topBase + 40 + 45;
  const andTop = hendyTop + 38;
  const angeleTop = andTop + 32;
  const joyTop = angeleTop + 38 + 45;
  const dateTop = joyTop + 40 + 67;
  const ovalTop = dateTop + 24 + 40;
  const buttonTop = ovalTop + 100 + 33;
  const CANVAS_HEIGHT = buttonTop + 30;

  return (
    <div id="profile"
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
          src="/images/Countdown/BungaKiri.svg"
          alt=""
          width={175}
          height={175}
          className="absolute z-0"
          style={{ top: -75, left: -5 }}
        />

        <Image
          src="/images/Countdown/BungaKana.svg"
          alt=""
          width={250}
          height={250}
          className="absolute z-0"
          style={{ bottom: -230, right: -5 }}
        />

        {/* Cordially */}
        <FadeUp delay={0}>
          <p className="absolute w-full text-center text-white z-10"
            style={{ top: topBase, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}>
            Cordially request the honour of your presence at<br />
            the marriage of their son and daughter
          </p>
        </FadeUp>

        {/* Hendy */}
        <FadeUp delay={0.2}>
          <p className="absolute w-full text-center text-white z-10"
            style={{ top: hendyTop, fontFamily: "Cylburn, cursive", fontSize: 38 }}>
            Hendy Sudjono, S.AB.
          </p>
        </FadeUp>

        {/* & */}
        <FadeUp delay={0.4}>
          <p className="absolute w-full text-center text-white z-10"
            style={{ top: andTop, fontFamily: "Cylburn, cursive", fontSize: 36 }}>
            &amp;
          </p>
        </FadeUp>

        {/* Angele */}
        <FadeUp delay={0.6}>
          <p className="absolute w-full text-center text-white z-10"
            style={{ top: angeleTop, fontFamily: "Cylburn, cursive", fontSize: 38 }}>
            Angele Tantiana, B.Bus.
          </p>
        </FadeUp>

        {/* Joy */}
        <FadeUp delay={0.8}>
          <p className="absolute w-full text-center text-white z-10"
            style={{ top: joyTop, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}>
            Our joy will be complete with<br />
            your presence and blessings.
          </p>
        </FadeUp>

        {/* Date */}
        <FadeUp delay={1.0}>
          <p className="absolute w-full text-center text-white uppercase z-10"
            style={{ top: dateTop, fontFamily: "EB Garamond, serif", fontSize: 24 }}>
            Saturday, 23 May 2026
          </p>
        </FadeUp>

        {/* Ovals */}
        <FadeUp delay={1.2}>
          <div className="absolute z-10" style={{ top: ovalTop, width: "100%", height: 100 }}>
            {values.map((val, i) => (
              <OvalUnit key={labels[i]} value={val} label={labels[i]} left={ovalLeft[i]} />
            ))}
          </div>
        </FadeUp>

        {/* Button */}
        <FadeUp delay={1.4}>
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
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Hendy+%26+Angele&dates=20260523T000000Z/20260523T235959Z&details=Wedding+of+Hendy+Sudjono+%26+Angele+Tantiana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#670C0F] text-[12px] font-serif">
              MARK YOUR CALENDAR
            </a>
          </div>
        </FadeUp>

      </div>
    </div>
  );
}