"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NotifModal, { NotifType } from "@/components/popup/NotifModal";
import FadeUp from "@/components/ui/FadeIn";
import FadeLeft from "@/components/ui/FadeLeft";
import FadeRight from "@/components/ui/FadeRight";
import FadeIn from "../ui/FadeIn";


// Konstanta 
const CANVAS_WIDTH = 390;
const WA_NUMBER = "6281234567890"; // nomor WA support

type Props = {
  onOpenWishes: () => void;
};

const Rsvp = ({ onOpenWishes }: Props) => {
  const [scale, setScale] = useState(1);
  const [selected, setSelected] = useState<"hadir" | "tidak_hadir" | null>(null);
  const [notif, setNotif] = useState<NotifType | null>(null);
  const [safeAreaTop, setSafeAreaTop] = useState(0);

  useEffect(() => {
    const el = document.createElement("div");
    el.style.paddingTop = "env(safe-area-inset-top)";
    document.body.appendChild(el);
    const val = parseInt(getComputedStyle(el).paddingTop);
    document.body.removeChild(el);
    setSafeAreaTop(isNaN(val) ? 0 : val);
  }, []);

  useEffect(() => {
    const updateScale = () => {
      const panel = document.querySelector(".sections-panel") as HTMLElement;
      const containerWidth = panel ? panel.offsetWidth : window.innerWidth;
      setScale(containerWidth / CANVAS_WIDTH);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const rsvpTop        = Math.max(safeAreaTop / scale, - 18);
  const dearTop        = rsvpTop + 96 + 32;   // "Dear Mr. / Mrs. /Ms."
  const selaTop        = dearTop + 20 + 15 - 18;   // nama tamu
  const kindlyTop      = selaTop + 56;         // teks "Kindly confirm..."
  const buttonsTop     = kindlyTop + 44 + 21; // tombol Attend & Unable
  const confirmTextTop = buttonsTop + 33 + 36; // teks "Confirm your selection?"
  const confirmBtnTop  = confirmTextTop + 20 + 37; // tombol Confirm
  const supportTextTop = confirmBtnTop + 33 + 44;  // teks support
  const waTop          = supportTextTop + 36 + 24; // tombol WA
  const wishesTop      = waTop + 33 + 108;    // link "Click to Wishes"
  const CANVAS_HEIGHT  = wishesTop + 40 + 80; // total tinggi canvas

  // Handler 
  const handleConfirmClick = () => {
    if (!selected) {
      setNotif("incomplete_rsvp"); // belum pilih attend/unable
      return;
    }
    setNotif("confirm_rsvp"); // konfirmasi pilihan
  };

  const handleConfirmed = () => {
    if (selected === "hadir") {
      setNotif("rsvp_confirmed_hadir");
    } else {
      setNotif("rsvp_confirmed_tidak_hadir");
    }
  };

  const handleClose = () => setNotif(null);

  // Style tombol Attend / Unable — aktif jika dipilih
  const btnStyle = (type: "hadir" | "tidak_hadir") => ({
    width: 146,
    height: 33,
    fontFamily: "EB Garamond, serif",
    fontSize: 12,
    background: selected === type ? "#FDFDFD" : "transparent",
    color: selected === type ? "#7C1419" : "#FFFFFF",
    border: "1px solid #FDFDFD",
    borderRadius: 9999,
    cursor: "pointer",
    transition: "all 0.2s ease",
  });

  return (
    <>
      <div
        id="rsvp"
        className="relative w-full"
        style={{ height: `${CANVAS_HEIGHT * scale}px` }}
      >

        {/* Canvas utama — di-scale dan di-center secara horizontal */}
        <div
          className="absolute top-0 left-1/2 origin-top"
          style={{
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT,
            transform: `translateX(-50%) scale(${scale})`,
            overflow: "visible",
          }}
        >
          
          {/* Ornamen bunga kanan atas (mencuat ke section Venue di atas) */}
          <Image
            src="/images/Rsvp/BungaKananAtas.svg"
            alt=""
            width={320}
            height={320}
            className="absolute -z-10"
            style={{ top: -365, right: 0 }}
          />

          {/* Ornamen bunga kiri bawah */}
          <Image
            src="/images/Rsvp/BungaKiri.svg"
            alt=""
            width={330}
            height={330}
            className="absolute z-0"
            style={{ bottom: 0, left: 0 }}
          />

          {/* Ornamen bunga kanan bawah */}
          <Image
            src="/images/Rsvp/BungaKananBawah.svg"
            alt=""
            width={213}
            height={213}
            className="absolute z-0"
            style={{ bottom: 0, right: -10 }}
          />

          {/* Judul "Rsvp" */}
          <FadeIn delay={0}>
            <p
              className="absolute w-full text-center text-white z-10 font-cylburn"
              style={{ top: rsvpTop, fontSize: 96, lineHeight: "96px", paddingTop: 18 }}
            >
              Rsvp
            </p>
          </FadeIn>

          {/* Sapaan tamu */}
          <FadeIn delay={0.2}>
            <p
              className="absolute w-full text-center text-white z-10 font-garamond"
              style={{ top: dearTop, fontSize: 14, lineHeight: "20px" }}
            >
              Dear Mr. / Mrs. /Ms.
            </p>
          </FadeIn>

          {/* Nama tamu */}
          <FadeIn delay={0.6}>
            <p
              className="absolute w-full text-center text-white z-10 font-cylburn"
              style={{ top: selaTop, fontSize: 46, lineHeight: "46px", paddingTop: 18 }}
            >
              Sela
            </p>
          </FadeIn>

          {/* Batas konfirmasi kehadiran */}
          <FadeIn delay={1}>
            <p
              className="absolute w-full text-center text-white z-10"
              style={{ top: kindlyTop, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}
            >
              Kindly confirm your attendance before
              <span style={{ display: "block", fontSize: 20, lineHeight: "24px" }}>
                23 MAY 2026
              </span>
            </p>
          </FadeIn>

          {/* Tombol Attend & Unable to Attend */}
          <div
            className="absolute flex items-center justify-center gap-[19px] z-10"
            style={{ top: buttonsTop, width: CANVAS_WIDTH }}
          >
            <FadeLeft delay={0.5}>
              <button
                onClick={() => setSelected(selected === "hadir" ? null : "hadir")}
                style={btnStyle("hadir")}
              >
                ATTEND
              </button>
            </FadeLeft>
            <FadeRight delay={0.5}>
              <button
                onClick={() => setSelected(selected === "tidak_hadir" ? null : "tidak_hadir")}
                style={btnStyle("tidak_hadir")}
              >
                UNABLE TO ATTEND
              </button>
            </FadeRight>
          </div>

          {/* Teks konfirmasi pilihan */}
          <FadeIn delay={1.4}>
            <p
              className="absolute w-full text-center text-white z-10"
              style={{ top: confirmTextTop, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}
            >
              Confirm your selection?
            </p>
          </FadeIn>

          {/* Tombol Confirm — label berubah sesuai pilihan */}
          <FadeIn delay={1.8}>
            <div
              className="absolute flex justify-center z-10"
              style={{ top: confirmBtnTop, width: CANVAS_WIDTH }}
            >
              <button
                onClick={handleConfirmClick}
                className="bg-white hover:bg-gray-100 transition-colors duration-200"
                style={{
                  width: 222,
                  height: 33,
                  fontFamily: "EB Garamond, serif",
                  fontSize: 12,
                  color: "#7C1419",
                  borderRadius: 9999,
                  cursor: selected ? "pointer" : "not-allowed",
                }}
              >
                {selected === "hadir"
                  ? "CONFIRM ATTEND"
                  : selected === "tidak_hadir"
                    ? "CONFIRM NOT ATTEND"
                    : "CONFIRM"}
              </button>
            </div>
          </FadeIn>

          {/* Teks bantuan support */}
          <FadeIn delay={2.2}>
            <p
              className="absolute w-full text-center text-white z-10"
              style={{ top: supportTextTop, fontFamily: "EB Garamond, serif", fontSize: 12, lineHeight: "18px" }}
            >
              If you need assistance with your RSVP, please contact
              <br />
              our support team.
            </p>
          </FadeIn>

          {/* Tombol Chat Support via WhatsApp */}
          <FadeIn delay={2.6}>
            <div
              className="absolute flex justify-center z-10"
              style={{ top: waTop, width: CANVAS_WIDTH }}
            >
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-[8px] bg-[#12877B] hover:bg-[#0F6B61] rounded-full text-white"
                style={{ width: 160, height: 33, fontFamily: "EB Garamond, serif", fontSize: 12 }}
              >
                <Image
                  src="/images/Rsvp/LogoWa.svg"
                  alt="WA"
                  width={18}
                  height={18}
                  className="object-contain"
                />
                CHAT SUPPORT
              </a>
            </div>
          </FadeIn>

          {/* Link ke section Wishes */}
          <FadeIn delay={3}>
            <p
              onClick={onOpenWishes}
              className="absolute w-full text-center z-20 cursor-pointer"
              style={{
                top: wishesTop,
                fontFamily: "Cylburn, cursive",
                fontSize: 32,
                lineHeight: "40px",
                color: "#F0E8D9",
              }}
            >
              Click to Wishes
            </p>
          </FadeIn>

        </div>
      </div>

      {/* Modal notifikasi RSVP */}
      <NotifModal
        type={notif}
        onClose={handleClose}
        onConfirm={handleConfirmed}
        waNumber={WA_NUMBER}
      />
    </>
  );
};

export default Rsvp;

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import NotifModal, { NotifType } from "@/components/popup/NotifModal";
// import FadeUp from "@/components/ui/FadeIn";
// import FadeLeft from "@/components/ui/FadeLeft";
// import FadeRight from "@/components/ui/FadeRight";
// import FadeIn from "../ui/FadeIn";


// // Konstanta 
// const CANVAS_WIDTH = 390;
// const WA_NUMBER = "6281234567890"; // nomor WA support

// type Props = {
//   onOpenWishes: () => void;
// };

// const Rsvp = ({ onOpenWishes }: Props) => {
//   const [scale, setScale] = useState(1);
//   const [selected, setSelected] = useState<"hadir" | "tidak_hadir" | null>(null);
//   const [notif, setNotif] = useState<NotifType | null>(null);
//   const [safeAreaTop, setSafeAreaTop] = useState(0);

//   useEffect(() => {
//     const el = document.createElement("div");
//     el.style.paddingTop = "env(safe-area-inset-top)";
//     document.body.appendChild(el);
//     const val = parseInt(getComputedStyle(el).paddingTop);
//     document.body.removeChild(el);
//     setSafeAreaTop(isNaN(val) ? 0 : val);
//   }, []);

//   useEffect(() => {
//     const updateScale = () => {
//       const panel = document.querySelector(".sections-panel") as HTMLElement;
//       const containerWidth = panel ? panel.offsetWidth : window.innerWidth;
//       setScale(containerWidth / CANVAS_WIDTH);
//     };
//     updateScale();
//     window.addEventListener("resize", updateScale);
//     return () => window.removeEventListener("resize", updateScale);
//   }, []);

//   const rsvpTop        = Math.max(safeAreaTop / scale,);
//   const dearTop        = rsvpTop + 96 + 32;   // "Dear Mr. / Mrs. /Ms."
//   const selaTop        = dearTop + 20 + 15;   // nama tamu
//   const kindlyTop      = selaTop + 56;         // teks "Kindly confirm..."
//   const buttonsTop     = kindlyTop + 44 + 21; // tombol Attend & Unable
//   const confirmTextTop = buttonsTop + 33 + 36; // teks "Confirm your selection?"
//   const confirmBtnTop  = confirmTextTop + 20 + 37; // tombol Confirm
//   const supportTextTop = confirmBtnTop + 33 + 44;  // teks support
//   const waTop          = supportTextTop + 36 + 24; // tombol WA
//   const wishesTop      = waTop + 33 + 108;    // link "Click to Wishes"
//   const CANVAS_HEIGHT  = wishesTop + 40 + 80; // total tinggi canvas

//   // Handler 
//   const handleConfirmClick = () => {
//     if (!selected) {
//       setNotif("incomplete_rsvp"); // belum pilih attend/unable
//       return;
//     }
//     setNotif("confirm_rsvp"); // konfirmasi pilihan
//   };

//   const handleConfirmed = () => {
//     if (selected === "hadir") {
//       setNotif("rsvp_confirmed_hadir");
//     } else {
//       setNotif("rsvp_confirmed_tidak_hadir");
//     }
//   };

//   const handleClose = () => setNotif(null);

//   // Style tombol Attend / Unable — aktif jika dipilih
//   const btnStyle = (type: "hadir" | "tidak_hadir") => ({
//     width: 146,
//     height: 33,
//     fontFamily: "EB Garamond, serif",
//     fontSize: 12,
//     background: selected === type ? "#FDFDFD" : "transparent",
//     color: selected === type ? "#7C1419" : "#FFFFFF",
//     border: "1px solid #FDFDFD",
//     borderRadius: 9999,
//     cursor: "pointer",
//     transition: "all 0.2s ease",
//   });

//   return (
//     <>
//       <div
//         id="rsvp"
//         className="relative w-full"
//         style={{ height: `${CANVAS_HEIGHT * scale}px` }}
//       >

//         {/* Canvas utama — di-scale dan di-center secara horizontal */}
//         <div
//           className="absolute top-0 left-1/2 origin-top"
//           style={{
//             width: CANVAS_WIDTH,
//             height: CANVAS_HEIGHT,
//             transform: `translateX(-50%) scale(${scale})`,
//             overflow: "visible",
//           }}
//         >
          
//           {/* Ornamen bunga kanan atas (mencuat ke section Venue di atas) */}
//           <Image
//             src="/images/Rsvp/BungaKananAtas.svg"
//             alt=""
//             width={320}
//             height={320}
//             className="absolute -z-10"
//             style={{ top: -365, right: 0 }}
//           />

//           {/* Ornamen bunga kiri bawah */}
//           <Image
//             src="/images/Rsvp/BungaKiri.svg"
//             alt=""
//             width={330}
//             height={330}
//             className="absolute z-0"
//             style={{ bottom: 0, left: 0 }}
//           />

//           {/* Ornamen bunga kanan bawah */}
//           <Image
//             src="/images/Rsvp/BungaKananBawah.svg"
//             alt=""
//             width={213}
//             height={213}
//             className="absolute z-0"
//             style={{ bottom: 0, right: -10 }}
//           />

//           {/* Judul "Rsvp" */}
//           <FadeIn delay={0}>
//             <p
//               className="absolute w-full text-center text-white z-10 font-cylburn"
//               style={{ top: rsvpTop, fontSize: 96, lineHeight: "96px" }}
//             >
//               Rsvp
//             </p>
//           </FadeIn>

//           {/* Sapaan tamu */}
//           <FadeIn delay={0.2}>
//             <p
//               className="absolute w-full text-center text-white z-10 font-garamond"
//               style={{ top: dearTop, fontSize: 14, lineHeight: "20px" }}
//             >
//               Dear Mr. / Mrs. /Ms.
//             </p>
//           </FadeIn>

//           {/* Nama tamu */}
//           <FadeIn delay={0.6}>
//             <p
//               className="absolute w-full text-center text-white z-10 font-cylburn"
//               style={{ top: selaTop, fontSize: 46, lineHeight: "46px" }}
//             >
//               Sela
//             </p>
//           </FadeIn>

//           {/* Batas konfirmasi kehadiran */}
//           <FadeIn delay={1}>
//             <p
//               className="absolute w-full text-center text-white z-10"
//               style={{ top: kindlyTop, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}
//             >
//               Kindly confirm your attendance before
//               <span style={{ display: "block", fontSize: 20, lineHeight: "24px" }}>
//                 23 MAY 2026
//               </span>
//             </p>
//           </FadeIn>

//           {/* Tombol Attend & Unable to Attend */}
//           <div
//             className="absolute flex items-center justify-center gap-[19px] z-10"
//             style={{ top: buttonsTop, width: CANVAS_WIDTH }}
//           >
//             <FadeLeft delay={0.5}>
//               <button
//                 onClick={() => setSelected(selected === "hadir" ? null : "hadir")}
//                 style={btnStyle("hadir")}
//               >
//                 ATTEND
//               </button>
//             </FadeLeft>
//             <FadeRight delay={0.5}>
//               <button
//                 onClick={() => setSelected(selected === "tidak_hadir" ? null : "tidak_hadir")}
//                 style={btnStyle("tidak_hadir")}
//               >
//                 UNABLE TO ATTEND
//               </button>
//             </FadeRight>
//           </div>

//           {/* Teks konfirmasi pilihan */}
//           <FadeIn delay={1.4}>
//             <p
//               className="absolute w-full text-center text-white z-10"
//               style={{ top: confirmTextTop, fontFamily: "EB Garamond, serif", fontSize: 14, lineHeight: "20px" }}
//             >
//               Confirm your selection?
//             </p>
//           </FadeIn>

//           {/* Tombol Confirm — label berubah sesuai pilihan */}
//           <FadeIn delay={1.8}>
//             <div
//               className="absolute flex justify-center z-10"
//               style={{ top: confirmBtnTop, width: CANVAS_WIDTH }}
//             >
//               <button
//                 onClick={handleConfirmClick}
//                 className="bg-white hover:bg-gray-100 transition-colors duration-200"
//                 style={{
//                   width: 222,
//                   height: 33,
//                   fontFamily: "EB Garamond, serif",
//                   fontSize: 12,
//                   color: "#7C1419",
//                   borderRadius: 9999,
//                   cursor: selected ? "pointer" : "not-allowed",
//                 }}
//               >
//                 {selected === "hadir"
//                   ? "CONFIRM ATTEND"
//                   : selected === "tidak_hadir"
//                     ? "CONFIRM NOT ATTEND"
//                     : "CONFIRM"}
//               </button>
//             </div>
//           </FadeIn>

//           {/* Teks bantuan support */}
//           <FadeIn delay={2.2}>
//             <p
//               className="absolute w-full text-center text-white z-10"
//               style={{ top: supportTextTop, fontFamily: "EB Garamond, serif", fontSize: 12, lineHeight: "18px" }}
//             >
//               If you need assistance with your RSVP, please contact
//               <br />
//               our support team.
//             </p>
//           </FadeIn>

//           {/* Tombol Chat Support via WhatsApp */}
//           <FadeIn delay={2.6}>
//             <div
//               className="absolute flex justify-center z-10"
//               style={{ top: waTop, width: CANVAS_WIDTH }}
//             >
//               <a
//                 href={`https://wa.me/${WA_NUMBER}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center gap-[8px] bg-[#12877B] hover:bg-[#0F6B61] rounded-full text-white"
//                 style={{ width: 160, height: 33, fontFamily: "EB Garamond, serif", fontSize: 12 }}
//               >
//                 <Image
//                   src="/images/Rsvp/LogoWa.svg"
//                   alt="WA"
//                   width={18}
//                   height={18}
//                   className="object-contain"
//                 />
//                 CHAT SUPPORT
//               </a>
//             </div>
//           </FadeIn>

//           {/* Link ke section Wishes */}
//           <FadeIn delay={3}>
//             <p
//               onClick={onOpenWishes}
//               className="absolute w-full text-center z-20 cursor-pointer"
//               style={{
//                 top: wishesTop,
//                 fontFamily: "Cylburn, cursive",
//                 fontSize: 32,
//                 lineHeight: "40px",
//                 color: "#F0E8D9",
//               }}
//             >
//               Click to Wishes
//             </p>
//           </FadeIn>

//         </div>
//       </div>

//       {/* Modal notifikasi RSVP */}
//       <NotifModal
//         type={notif}
//         onClose={handleClose}
//         onConfirm={handleConfirmed}
//         waNumber={WA_NUMBER}
//       />
//     </>
//   );
// };

// export default Rsvp;
