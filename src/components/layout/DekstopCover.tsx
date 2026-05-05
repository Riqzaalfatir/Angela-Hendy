import React from "react";
import Image from "next/image";

const DesktopCover = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: "1020px", height: "100dvh" }}
    >
      <Image
        src="/images/Cover/Cover.webp"
        alt="Galih & Vio Wedding Cover"
        fill
        priority
        className="object-cover object-[50%_15%]"
      />

      <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center px-10 pb-[5%] tracking-wide">

          <p className="font-century text-[20px] text-white uppercase">
            The Wedding of
          </p>

          <h1 className="font-wavy text-[64px] uppercase">Galih & Vio</h1>

          <p className="font-century text-[20px] leading-6">
            Saturday · Sunday,
            <br />9 · 10 May 2026
          </p>
      </div>
    </div>
  );
};

export default DesktopCover;