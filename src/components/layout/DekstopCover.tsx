import React from "react";
import Image from "next/image";
import Animate from"@/components/ui/FadeIn"

const DesktopCover = () => {
  return (
    <div id="desktop-cover"
      className="relative w-full overflow-y-auto h-screen  no-scrollbar"
    >
      <Image
        src="/images/Cover/Cover.webp"
        alt="Galih & Vio Wedding Cover"
        fill
        priority
        className="object-cover object-top"
      />

      <div className="cover-text absolute inset-0 flex flex-col justify-end items-center text-white text-center px-10 pb-[5%] tracking-wide">

          <p className="font-garamond text-[20px] text-white uppercase">
            The Wedding of
          </p>

          <h1 className="font-cylburn text-[64px] text-white">Hendy & Angele</h1>

          <p className="font-garamond text-[20px] text-white">
            Saturday, 23 May 2026
          </p>
      </div>
    </div>
  );
};

export default DesktopCover;