"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../layout/Footer";

const CANVAS_WIDTH = 390;
const CANVAS_HEIGHT = 843;

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function WeddingGift({ open, onClose }: Props) {
  const [scale, setScale] = useState(1);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
  navigator.clipboard.writeText("8090598253");
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

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

  if (!open) return null;

  return (
   <div className="wishes-overlay" onClick={onClose}>
  <div
    className="relative w-full"
    style={{
      height: `${CANVAS_HEIGHT * scale}px`,
      minHeight: "100dvh",
    }}
    onClick={(e) => e.stopPropagation()}
  >
        <div
          className="absolute top-0 left-0 origin-top-left lg:min-h-screen"
          style={{
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT,
            transform: `scale(${scale})`,
            backgroundImage: "url('/images/Hero/Default.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* ── ORNAMEN ATAS ── */}
          <Image src="/images/Wishes/BungaAtas.svg" alt="" width={390} height={300} priority
            className="absolute top-0 left-0 w-full z-0 pointer-events-none" />
          <Image src="/images/Wishes/DaunAtas.webp" alt="" width={390} height={300} priority
            className="absolute top-0 left-0 w-full z-10 pointer-events-none" />
          <Image src="/images/Wishes/DaunKanan.webp" alt="" width={390} height={300} priority
            className="absolute top-0 right-0 w-full z-10 pointer-events-none" />

          {/* ── ORNAMEN BAWAH ── */}
          <Image src="/images/Wishes/BungaKanan.svg" alt="" width={390} height={300} priority
            className="absolute bottom-0 right-0 w-full z-0 pointer-events-none" />
          <Image src="/images/Wishes/BungaKiri.svg" alt="" width={390} height={300} priority
            className="absolute bottom-0 left-0 w-full z-0 pointer-events-none" />
          <Image src="/images/Wishes/DaunBawah.webp" alt="" width={390} height={300} priority
            className="absolute bottom-0 left-0 w-full z-10 pointer-events-none" />

          {/* ── WEDDING GIFT ── */}
          <h1 className="absolute w-full text-center text-white z-10"
            style={{ top: 115, fontFamily: "Cylburn, cursive", fontSize: 56, lineHeight: "56px" }}>
            Wedding Gift
          </h1>

          {/* ── YOUR PRESENCE ── */}
          <p className="absolute text-center text-white z-10"
            style={{ top: 210, width: 301, left: "50%", transform: "translateX(-50%)",
              fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "22px" }}>
            Your presence and prayers<br />
            are the greatest blessing to us.<br />
            Should you wish to honor us with a gift,<br />
            please find the details below<br />
            for your convenience.
          </p>

          {/* ── ATM BOX ── */}
          <div className="absolute z-20"
            style={{ top: 350, width: 223, left: "50%", transform: "translateX(-50%)" }}>
            <div className="flex justify-between items-center text-white">
              <div className="text-left">
                <p style={{ fontFamily: "EB Garamond, serif", fontSize: 12 }}>BCA</p>
                <p style={{ fontFamily: "EB Garamond, serif", fontSize: 12 }}>8090598253</p>
                <p style={{ fontFamily: "EB Garamond, serif", fontSize: 12 }}>
                  A/n angle tantiana / hendy s.
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="border-b border-white leading-none text-white"
                style={{ fontFamily: "EB Garamond, serif", fontSize: 12 }}>
                {copied ? "COPIED !" : "COPY"}
              </button>
            </div>
            <div className="border-b border-white mt-[10px]" />
          </div>

          {/* ── THANK YOU ── */}
          <h1 className="absolute w-full text-center text-white z-10"
            style={{ top: 523, fontFamily: "Cylburn, cursive", fontSize: 56, lineHeight: "56px" }}>
            Thank You
          </h1>

          {/* ── FOR BEING ── */}
          <p className="absolute text-center text-white z-20"
            style={{ top: 623, width: 283, left: "50%", transform: "translateX(-50%)",
              fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "22px" }}>
            For being part of our journey.<br />
            We look forward to celebrating love, laughter,<br />
            and happily ever after with you!
          </p>
        </div>
      </div>

      {/* Footer di luar canvas agar ikut scroll */}
      <div onClick={(e) => e.stopPropagation()}>
        <Footer />
      </div>
    </div>
  );
}