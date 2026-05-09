"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CANVAS_WIDTH = 390;
const CANVAS_HEIGHT = 946;

export default function Footer() {
  const [scale, setScale] = useState(1);

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

  return (
    <div
      className="relative w-full"
    style={{ height: `946px` }}  // ← fixed, bukan CANVAS_HEIGHT * scale
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          transform: `scale(${scale})`,
        }}
      >
        {/* BACKGROUND FOTO */}
        {/* <Image
          src="/images/Footer/BgFooter.png"
          alt=""
          fill
          priority
          className="object-cover pointer-events-none"
        /> */}

        <Image
  src="/images/Footer/Bg-Footer.png"
  alt=""
  fill
  priority
  unoptimized
  className="object-cover pointer-events-none object-top"
/>

        {/* LOGO HA — top: 90px, left: 162px */}
        <div
          className="absolute z-10 inset-x-0 flex justify-center"
          style={{ top: 90 }}
        >
          <Image
            src="/images/Footer/LogoHA.svg"
            alt="HA Logo"
            width={65}
            height={52}
            className="object-contain"
          />
        </div>

        {/* LOGO PROVITE — top: 756px, left: 150px */}
        {/* LOGOS BOTTOM */}
        <div
          className="absolute z-10 flex items-center justify-between px-[62px]"
          style={{ top: 840, width: "100%" }}
        >
          <div className="flex flex-col items-center gap-[7] leading-none -mt-3.5">
            <p className="font-garamond text-[11px] text-white">
              Specially Design by
            </p>
            <Image
              src="/images/Footer/LogoPeletin.svg"
              alt="Peletin Logo"
              width={79}
              height={65}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center  leading-none">
            <p className="font-garamond text-[11px] text-white">
              Reservation System by
            </p>
            <div className="overflow-hidden" style={{ marginTop: 0.5 }}>
              <Image
                src="/images/Footer/LogoProvite.svg"
                alt="Provite Logo"
                width={89}
                height={65}
                className="object-contain"
                style={{ marginTop: -9 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// const CANVAS_WIDTH = 390;
// const CANVAS_HEIGHT = 844;

// export default function Footer() {
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const updateScale = () => {
//       const isMobile = window.innerWidth < 1024;
//       const containerWidth = isMobile ? window.innerWidth : 435;
//       setScale(containerWidth / CANVAS_WIDTH);
//     };
//     updateScale();
//     window.addEventListener("resize", updateScale);
//     return () => window.removeEventListener("resize", updateScale);
//   }, []);

//   return (
//     <div
//       className="relative w-full"
//       style={{ height: `${CANVAS_HEIGHT * scale}px` }}
//     >
//       <div
//         className="absolute top-0 left-0 origin-top-left"
//         style={{
//           width: CANVAS_WIDTH,
//           height: CANVAS_HEIGHT,
//           transform: `scale(${scale})`,
//         }}
//       >
//         {/* BACKGROUND FOTO */}
//         {/* <Image
//           src="/images/Footer/BgFooter.png"
//           alt=""
//           fill
//           priority
//           className="object-cover pointer-events-none"
//         /> */}

//         <Image
//   src="/images/Footer/Bg-Footer.png"
//   alt=""
//   fill
//   priority
//   unoptimized
//   className="object-cover pointer-events-none"
// />

//         {/* LOGO HA — top: 90px, left: 162px */}
//         <div
//           className="absolute z-10 inset-x-0 flex justify-center"
//           style={{ top: 90 }}
//         >
//           <Image
//             src="/images/Footer/LogoHA.svg"
//             alt="HA Logo"
//             width={65}
//             height={52}
//             className="object-contain"
//           />
//         </div>

//         {/* LOGO PROVITE — top: 756px, left: 150px */}
//         {/* LOGOS BOTTOM */}
//         <div
//           className="absolute z-10 flex items-center justify-between px-[62px]"
//           style={{ top: 756, width: "100%" }}
//         >
//           <div className="flex flex-col items-center gap-[7] leading-none -mt-3.5">
//             <p className="font-garamond text-[11px] text-white">
//               Specially Design by
//             </p>
//             <Image
//               src="/images/Footer/LogoPeletin.svg"
//               alt="Peletin Logo"
//               width={79}
//               height={65}
//               className="object-contain"
//             />
//           </div>

//           <div className="flex flex-col items-center  leading-none">
//             <p className="font-garamond text-[11px] text-white">
//               Reservation System by
//             </p>
//             <div className="overflow-hidden" style={{ marginTop: 0.5 }}>
//               <Image
//                 src="/images/Footer/LogoProvite.svg"
//                 alt="Provite Logo"
//                 width={89}
//                 height={65}
//                 className="object-contain"
//                 style={{ marginTop: -9 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
