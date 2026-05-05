import React from "react";
import Image from "next/image";

const DesktopCover = () => {
  return (
    <div
      className="relative w-full overflow-y-auto  no-scrollbar"
      style={{ minHeight: "1020px", height: "100dvh" }}
    >
      <Image
        src="/images/Cover/Cover.webp"
        alt="Galih & Vio Wedding Cover"
        fill
        priority
        className="object-cover object-top"
      />

      <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center px-10 pb-[5%] tracking-wide">

          <p className="font-garamond text-[20px] text-white uppercase">
            The Wedding of
          </p>

          <h1 className="font-cylburn text-[64px] text-white">Galih & Vio</h1>

          <p className="font-garamond text-[20px] text-white">
            Saturday, 23 May 2026
          </p>
      </div>
    </div>
  );
};

export default DesktopCover;