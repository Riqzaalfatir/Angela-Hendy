"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeIn";
import FadeIn from "../ui/FadeIn";


// Konstanta 
const CANVAS_WIDTH = 390;

const Venue = () => {
  const [scale, setScale] = useState(1);

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

  // ─── Posisi vertikal elemen (px, dalam koordinat canvas 390px) ───
  const venueTop         = 65;                          // judul "Venue"
  const imageTop         = venueTop + 96 + 20;          // foto ruangan
  const grandBallroomTop = imageTop + 320;              // nama venue
  const addressTop       = grandBallroomTop + 62 + 18; // alamat
  const holyTop          = addressTop + 20 + 68;       // Holy Matrimony
  const receptionTop     = holyTop + 74 + 30;          // Wedding Reception
  const ovalTop          = receptionTop + 74 + 63;     // foto oval pengantin
  const CANVAS_HEIGHT    = ovalTop + 460 + 60;         // total tinggi canvas

  return (
    <div
      id="venue"
      className="relative w-full"
      style={{ height: `${CANVAS_HEIGHT * scale}px` }}
    >

      {/* Canvas utama — di-scale dan di-center secara horizontal */}
      <div
        className="absolute top-0 left-1/2 origin-top z-10"
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          transform: `translateX(-50%) scale(${scale})`,
              overflow: "visible",   // ← tambahkan ini

        }}
      >
        
        {/* Ornamen bunga kiri tengah */}
        <Image
          src="/images/Venue/BungaKiri.svg"
          alt=""
          width={318}
          height={318}
          className="absolute z-0"
          style={{ bottom: 257, left: -6 }}
        />

        {/* Judul "Venue" */}
        <FadeIn delay={0.2}>
          <p
            className="absolute w-full text-center text-white z-10"
            style={{ top: venueTop, fontFamily: "Cylburn, cursive", fontSize: 96}}
          >
            Venue
          </p>
        </FadeIn>

        {/* Foto ruangan + tombol Google Maps */}
        <FadeIn delay={0.6}>
          <div
            className="absolute bg-white z-10 mt-6"
            style={{
              top: imageTop,
              left: (CANVAS_WIDTH - 182) / 2,
              width: 182,
              height: 266,
              padding: 0.1,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/Venue/Ruangan.webp"
                alt="Venue"
                fill
                className="object-cover"
              />
            </div>

            {/* Tombol Google Maps di atas foto */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full flex justify-center">
              <a
                href="https://maps.app.goo.gl/Su41WKmteCRACRKx5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white"
                style={{
                  width: 160,
                  height: 30,
                  borderRadius: 58,
                  fontFamily: "EB Garamond, serif",
                  fontSize: 12,
                  color: "#670C0F",
                  letterSpacing: 1,
                }}
              >
                GOOGLE MAPS
              </a>
            </div>
            </div>
        </FadeIn>

        {/* Nama venue */}
        <FadeIn delay={1}>
          <p
            className="absolute w-full text-center text-white z-10 leading-[29px]"
            style={{ top: grandBallroomTop, fontFamily: "Cylburn, cursive", fontSize: 38 }}
          >
            Grand Ballroom<br />
            <span className="text-[30px]">Pullman Bandung Grand Central</span>
          </p>
        </FadeIn>

        {/* Alamat venue */}
        <FadeIn delay={1.4}>
          <p
            className="absolute w-full text-center text-white z-10"
            style={{ top: addressTop, fontFamily: "EB Garamond, serif", fontSize: 14,  }}
          >
            Jl. Diponegoro No.27, Bandung
          </p>
        </FadeIn>

        {/* Sesi Holy Matrimony */}
        <FadeIn delay={1.8}>
          <p
            className="absolute w-full text-center text-black z-10 leading-[40px]"
            style={{ top: holyTop, fontFamily: "Cylburn, cursive", fontSize: 48,    paddingTop: 18,  // ← fix Safari iOS
  }}
          >
            Holy Matrimony
            <span style={{ display: "block", fontFamily: "EB Garamond, serif", fontSize: 18,  }}>
              at 11.00 AM
            </span>
          </p>
        </FadeIn>

        {/* Sesi Wedding Reception */}
        <FadeIn delay={2.2}>
          <p
            className="absolute w-full text-center text-white z-10 leading-[45px]"
            style={{ top: receptionTop, fontFamily: "Cylburn, cursive", fontSize: 48,  }}
          >
            Wedding Reception
            <span style={{ display: "block", fontFamily: "EB Garamond, serif", fontSize: 18, lineHeight: "26px" }}>
              at 17.00 PM
            </span>
          </p>
        </FadeIn>

        {/* Foto pengantin bentuk oval */}
        <FadeIn delay={2.6}>
          <div
            className="absolute overflow-hidden z-20"
            style={{
              top: ovalTop,
              left: (CANVAS_WIDTH - 295) / 2,
              width: 302,
              height: 460,
              borderRadius: "50%",
              border: "2px solid #FFFFFF",
            }}
          >
            <Image
              src="/images/Venue/Pengantin.webp"
              alt="Foto couple"
              fill
              className="object-cover z-2"
            />
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default Venue;
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import FadeUp from "@/components/ui/FadeIn";
// import FadeIn from "../ui/FadeIn";


// // Konstanta 
// const CANVAS_WIDTH = 390;

// const Venue = () => {
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const updateScale = () => {
//       const panel = document.querySelector('.sections-panel') as HTMLElement;
//       const containerWidth = panel ? panel.offsetWidth : window.innerWidth;
//       setScale(containerWidth / CANVAS_WIDTH);
//     };
//     updateScale();
//     window.addEventListener("resize", updateScale);
//     return () => window.removeEventListener("resize", updateScale);
//   }, []);

//   // ─── Posisi vertikal elemen (px, dalam koordinat canvas 390px) ───
//   const venueTop         = 65;                          // judul "Venue"
//   const imageTop         = venueTop + 96 + 20;          // foto ruangan
//   const grandBallroomTop = imageTop + 350;              // nama venue
//   const addressTop       = grandBallroomTop + 62 + 18; // alamat
//   const holyTop          = addressTop + 20 + 68;       // Holy Matrimony
//   const receptionTop     = holyTop + 74 + 30;          // Wedding Reception
//   const ovalTop          = receptionTop + 74 + 63;     // foto oval pengantin
//   const CANVAS_HEIGHT    = ovalTop + 460 + 60;         // total tinggi canvas

//   return (
//     <div
//       id="venue"
//       className="relative w-full"
//       style={{ height: `${CANVAS_HEIGHT * scale}px` }}
//     >

//       {/* Canvas utama — di-scale dan di-center secara horizontal */}
//       <div
//         className="absolute top-0 left-1/2 origin-top z-10"
//         style={{
//           width: CANVAS_WIDTH,
//           height: CANVAS_HEIGHT,
//           transform: `translateX(-50%) scale(${scale})`,
//               overflow: "visible",   // ← tambahkan ini

//         }}
//       >
        
//         {/* Ornamen bunga kiri tengah */}
//         <Image
//           src="/images/Venue/BungaKiri.svg"
//           alt=""
//           width={318}
//           height={318}
//           className="absolute z-0"
//           style={{ bottom: 290, left: -6 }}
//         />

//         {/* Judul "Venue" */}
//         <FadeIn delay={0.2}>
//           <p
//             className="absolute w-full text-center text-white z-10"
//             style={{ top: venueTop, fontFamily: "Cylburn, cursive", fontSize: 96}}
//           >
//             Venue
//           </p>
//         </FadeIn>

//         {/* Foto ruangan + tombol Google Maps */}
//         <FadeIn delay={0.6}>
//           <div
//             className="absolute bg-white z-10 mt-6"
//             style={{
//               top: imageTop,
//               left: (CANVAS_WIDTH - 182) / 2,
//               width: 182,
//               height: 266,
//               padding: 0.1,
//             }}
//           >
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/Venue/Ruangan.webp"
//                 alt="Venue"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Tombol Google Maps di atas foto */}
//             <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full flex justify-center">
//               <a
//                 href="https://maps.app.goo.gl/Su41WKmteCRACRKx5"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center bg-white"
//                 style={{
//                   width: 160,
//                   height: 30,
//                   borderRadius: 58,
//                   fontFamily: "EB Garamond, serif",
//                   fontSize: 12,
//                   color: "#670C0F",
//                   letterSpacing: 1,
//                 }}
//               >
//                 GOOGLE MAPS
//               </a>
//             </div>
//             </div>
//         </FadeIn>

//         {/* Nama venue */}
//         <FadeIn delay={1}>
//           <p
//             className="absolute w-full text-center text-white z-10 leading-[29px] -mt-5"
//             style={{ top: grandBallroomTop, fontFamily: "Cylburn, cursive", fontSize: 38 }}
//           >
//             Grand Ballroom<br />
//             <span className="text-[30px]">Pullman Bandung Grand Central</span>
//           </p>
//         </FadeIn>

//         {/* Alamat venue */}
//         <FadeIn delay={1.4}>
//           <p
//             className="absolute w-full text-center text-white z-10 -mt-5"
//             style={{ top: addressTop, fontFamily: "EB Garamond, serif", fontSize: 14,  }}
//           >
//             Jl. Diponegoro No.27, Bandung
//           </p>
//         </FadeIn>

//         {/* Sesi Holy Matrimony */}
//         <FadeIn delay={1.8}>
//           <p
//             className="absolute w-full text-center text-white z-10 leading-[40px] -mt-5"
//             style={{ top: holyTop, fontFamily: "Cylburn, cursive", fontSize: 48,  }}
//           >
//             Holy Matrimony
//             <span style={{ display: "block", fontFamily: "EB Garamond, serif", fontSize: 18,  }}>
//               at 11.00 AM
//             </span>
//           </p>
//         </FadeIn>

//         {/* Sesi Wedding Reception */}
//         <FadeIn delay={2.2}>
//           <p
//             className="absolute w-full text-center text-white z-10 leading-[45px] -mt-5"
//             style={{ top: receptionTop, fontFamily: "Cylburn, cursive", fontSize: 48,  }}
//           >
//             Wedding Reception
//             <span style={{ display: "block", fontFamily: "EB Garamond, serif", fontSize: 18, lineHeight: "26px" }}>
//               at 17.00 PM
//             </span>
//           </p>
//         </FadeIn>

//         {/* Foto pengantin bentuk oval */}
//         <FadeIn delay={2.6}>
//           <div
//             className="absolute overflow-hidden z-20 -mt-3"
//             style={{
//               top: ovalTop,
//               left: (CANVAS_WIDTH - 295) / 2,
//               width: 302,
//               height: 460,
//               borderRadius: "50%",
//               border: "2px solid #FFFFFF",
//             }}
//           >
//             <Image
//               src="/images/Venue/Pengantin.webp"
//               alt="Foto couple"
//               fill
//               className="object-cover z-2"
//             />
//           </div>
//         </FadeIn>

//       </div>
//     </div>
//   );
// };

// export default Venue;
