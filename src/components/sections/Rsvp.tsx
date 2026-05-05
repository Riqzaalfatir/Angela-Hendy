"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NotifModal, { NotifType } from "@/components/popup/NotifModal";

const CANVAS_WIDTH = 390;
const WA_NUMBER = "6281234567890"; // ← ganti nomor WA

type Props = {
  onOpenWishes: () => void;
};

const Rsvp = ({ onOpenWishes }: Props) => {
  const [scale, setScale] = useState(1);
  const [selected, setSelected] = useState<"hadir" | "tidak_hadir" | null>(
    null,
  );
  const [notif, setNotif] = useState<NotifType | null>(null);

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

  const rsvpTop = 69;
  const dearTop = rsvpTop + 96 + 12;
  const selaTop = dearTop + 20 + 4;
  const kindlyTop = selaTop + 56 + 4;
  const buttonsTop = kindlyTop + 44 + 21;
  const confirmTextTop = buttonsTop + 33 + 36;
  const confirmBtnTop = confirmTextTop + 20 + 37;
  const supportTextTop = confirmBtnTop + 33 + 44;
  const waTop = supportTextTop + 36 + 24;
  const wishesTop = waTop + 33 + 108;
  const CANVAS_HEIGHT = wishesTop + 40 + 80;

  const handleConfirmClick = () => {
    if (!selected) {
      setNotif("incomplete_rsvp"); // ← popup kalau belum pilih
      return;
    }
    setNotif("confirm_rsvp");
  };

  const handleConfirmed = () => {
    if (selected === "hadir") {
      setNotif("rsvp_confirmed_hadir");
    } else {
      setNotif("rsvp_confirmed_tidak_hadir");
    }
  };

  const handleClose = () => setNotif(null);

  // Style helper
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
        <div
          className="absolute top-0 left-1/2 origin-top"
          style={{
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT,
            transform: `translateX(-50%) scale(${scale})`,
          }}
        >
          {/* Ornamen */}
          <Image
            src="/images/Rsvp/BungaKananAtas.webp"
            alt=""
            width={300}
            height={300}
            className="absolute z-0"
            style={{ top: -200, right: 0 }}
          />
          <Image
            src="/images/Rsvp/BungaKiri.webp"
            alt=""
            width={300}
            height={300}
            className="absolute z-0"
            style={{ bottom: 0, left: 0 }}
          />
          <Image
            src="/images/Rsvp/BungaKananBawah.webp"
            alt=""
            width={300}
            height={300}
            className="absolute z-0"
            style={{ bottom: 0, right: 0 }}
          />

          {/* Judul */}
          <p
            className="absolute w-full text-center text-white z-10"
            style={{
              top: rsvpTop,
              fontFamily: "Cylburn, cursive",
              fontSize: 96,
              lineHeight: "96px",
            }}
          >
            Rsvp
          </p>

          {/* Dear */}
          <p
            className="absolute w-full text-center text-white z-10"
            style={{
              top: dearTop,
              fontFamily: "EB Garamond, serif",
              fontSize: 14,
              lineHeight: "20px",
            }}
          >
            Dear Mr. / Mrs. /Ms.
          </p>

          {/* Nama */}
          <p
            className="absolute w-full text-center text-white z-10"
            style={{
              top: selaTop,
              fontFamily: "Cylburn, cursive",
              fontSize: 46,
              lineHeight: "46px",
            }}
          >
            Sela
          </p>

          {/* Kindly confirm */}
          <p
            className="absolute w-full text-center text-white z-10"
            style={{
              top: kindlyTop,
              fontFamily: "EB Garamond, serif",
              fontSize: 14,
              lineHeight: "20px",
            }}
          >
            Kindly confirm your attendance before
            <span
              style={{ display: "block", fontSize: 20, lineHeight: "24px" }}
            >
              23 MAY 2026
            </span>
          </p>

          {/* ── ATTEND & UNABLE — satu aktif, satu outline ── */}
          <div
            className="absolute flex items-center justify-center gap-[19px] z-10"
            style={{ top: buttonsTop, width: CANVAS_WIDTH }}
          >
            <button
              onClick={() => setSelected(selected === "hadir" ? null : "hadir")}
              style={btnStyle("hadir")}
            >
              ATTEND
            </button>
            <button
              onClick={() =>
                setSelected(selected === "tidak_hadir" ? null : "tidak_hadir")
              }
              style={btnStyle("tidak_hadir")}
            >
              UNABLE TO ATTEND
            </button>
          </div>

          {/* Confirm your selection */}
          <p
            className="absolute w-full text-center text-white z-10"
            style={{
              top: confirmTextTop,
              fontFamily: "EB Garamond, serif",
              fontSize: 14,
              lineHeight: "20px",
            }}
          >
            Confirm your selection?
          </p>

          {/* ── CONFIRM BUTTON ── */}
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
                  ? "CONFIRM UNABLE TO ATTEND"
                  : "CONFIRM"}
            </button>
          </div>

          {/* Support text */}
          <p
            className="absolute w-full text-center text-white z-10"
            style={{
              top: supportTextTop,
              fontFamily: "EB Garamond, serif",
              fontSize: 12,
              lineHeight: "18px",
            }}
          >
            If you need assistance with your RSVP, please contact
            <br />
            our support team.
          </p>

          {/* ── CHAT SUPPORT WA ── */}
          <div
            className="absolute flex justify-center z-10"
            style={{ top: waTop, width: CANVAS_WIDTH }}
          >
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[8px] bg-[#12877B] hover:bg-[#0F6B61] rounded-full text-white"
              style={{
                width: 160,
                height: 33,
                fontFamily: "EB Garamond, serif",
                fontSize: 12,
              }}
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

          {/* Click to Wishes */}
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
        </div>
      </div>

      {/* ── NOTIF MODAL ── */}
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

// const CANVAS_WIDTH = 390;

// type Props = {
//   onOpenWishes: () => void;
// };

// const Rsvp = ({ onOpenWishes }: Props) => {
//     const [scale, setScale] = useState(1);

//  useEffect(() => {
//   const updateScale = () => {
//     const panel = document.querySelector('.sections-panel') as HTMLElement;
//     const containerWidth = panel ? panel.offsetWidth : window.innerWidth;
//     setScale(containerWidth / CANVAS_WIDTH);
//   };
//   updateScale();
//   window.addEventListener("resize", updateScale);
//   return () => window.removeEventListener("resize", updateScale);
// }, []);

//   // Kalkulasi posisi vertikal
//   const rsvpTop = 69;
//   const dearTop = rsvpTop + 96 + 12;
//   const selaTop = dearTop + 20 + 4;
//   const kindlyTop = selaTop + 56 + 4;
//   const buttonsTop = kindlyTop + 44 + 21;
//   const confirmTextTop = buttonsTop + 33 + 36;
//   const confirmBtnTop = confirmTextTop + 20 + 37;
//   const supportTextTop = confirmBtnTop + 33 + 44;
//   const waTop = supportTextTop + 36 + 24;
//   const wishesTop = waTop + 33 + 108;
//   const CANVAS_HEIGHT = wishesTop + 40 + 80;

//   return (
//     <div id="rsvp"
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
//         {/* Bunga Kiri */}
//         <Image
//           src="/images/Rsvp/BungaKananAtas.webp"
//           alt=""
//           width={300}
//           height={300}
//           className="absolute z-0"
//           style={{ top: -200, right: 0 }}
//         />
//         <Image
//           src="/images/Rsvp/BungaKiri.webp"
//           alt=""
//           width={300}
//           height={300}
//           className="absolute z-0"
//           style={{ bottom: 0, left: 0 }}
//         />
//         <Image
//           src="/images/Rsvp/BungaKananBawah.webp"
//           alt=""
//           width={300}
//           height={300}
//           className="absolute z-0"
//           style={{ bottom: 0, right: 0 }}
//         />
//         {/* Judul RSVP */}
//         <p
//           className="absolute w-full text-center text-white z-10"
//           style={{
//             top: rsvpTop,
//             fontFamily: "Cylburn, cursive",
//             fontSize: 96,
//             lineHeight: "96px",
//           }}
//         >
//           Rsvp
//         </p>

//         {/* Dear */}
//         <p
//           className="absolute w-full text-center text-white z-10"
//           style={{
//             top: dearTop,
//             fontFamily: "EB Garamond, serif",
//             fontSize: 14,
//             lineHeight: "20px",
//           }}
//         >
//           Dear Mr. / Mrs. /Ms.
//         </p>

//         {/* Nama */}
//         <p
//           className="absolute w-full text-center text-white z-10"
//           style={{
//             top: selaTop,
//             fontFamily: "Cylburn, cursive",
//             fontSize: 46,
//             lineHeight: "46px",
//           }}
//         >
//           Sela
//         </p>

//         {/* Kindly confirm */}
//         <p
//           className="absolute w-full text-center text-white z-10"
//           style={{
//             top: kindlyTop,
//             fontFamily: "EB Garamond, serif",
//             fontSize: 14,
//             lineHeight: "20px",
//           }}
//         >
//           Kindly confirm your attendance before
//           <span style={{ display: "block", fontSize: 20, lineHeight: "24px" }}>
//             23 MAY 2026
//           </span>
//         </p>

//         {/* Tombol ATTEND & UNABLE */}
//         <div
//           className="absolute flex items-center justify-center gap-[19px] z-10"
//           style={{ top: buttonsTop, width: CANVAS_WIDTH }}
//         >
//           <a
//             className="flex items-center justify-center bg-[#FDFDFD] text-[#7C1419] rounded-full"
//             style={{
//               width: 146,
//               height: 33,
//               fontFamily: "EB Garamond, serif",
//               fontSize: 12,
//             }}
//           >
//             ATTEND
//           </a>
//           <a
//             className="flex items-center justify-center bg-transparent border border-[#FDFDFD] text-white rounded-full"
//             style={{
//               width: 146,
//               height: 33,
//               fontFamily: "EB Garamond, serif",
//               fontSize: 12,
//             }}
//           >
//             UNABLE TO ATTEND
//           </a>
//         </div>

//         {/* Confirm your selection */}
//         <p
//           className="absolute w-full text-center text-white z-10"
//           style={{
//             top: confirmTextTop,
//             fontFamily: "EB Garamond, serif",
//             fontSize: 14,
//             lineHeight: "20px",
//           }}
//         >
//           Confirm your selection?
//         </p>

//         {/* Tombol CONFIRM */}
//         <div
//           className="absolute flex justify-center z-10"
//           style={{ top: confirmBtnTop, width: CANVAS_WIDTH }}
//         >
//           <a
//             className="flex items-center justify-center bg-[#FDFDFD] text-[#7C1419] rounded-full"
//             style={{
//               width: 222,
//               height: 33,
//               fontFamily: "EB Garamond, serif",
//               fontSize: 12,
//             }}
//           >
//             CONFIRM UNABLE TO ATTEND
//           </a>
//         </div>

//         {/* Support text */}
//         <p
//           className="absolute w-full text-center text-white z-10"
//           style={{
//             top: supportTextTop,
//             fontFamily: "EB Garamond, serif",
//             fontSize: 12,
//             lineHeight: "18px",
//           }}
//         >
//           If you need assistance with your RSVP, please contact
//           <br />
//           our support team.
//         </p>

//         {/* Tombol WA */}
//         <div
//           className="absolute flex justify-center z-10"
//           style={{ top: waTop, width: CANVAS_WIDTH }}
//         >
//           <a
//             href="https://wa.me/6281234567890"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center gap-[8px] bg-[#12877B] hover:bg-[#0F6B61] rounded-full text-white"
//             style={{
//               width: 160,
//               height: 33,
//               fontFamily: "EB Garamond, serif",
//               fontSize: 12,
//             }}
//           >
//             <Image
//               src="/images/Rsvp/LogoWa.svg"
//               alt="Logo Wa"
//               width={18}
//               height={18}
//               className="object-contain"
//             />
//             CHAT SUPPORT
//           </a>
//         </div>

//         {/* Click to Wishes */}
//         <p
//           onClick={onOpenWishes}
//           className="absolute w-full text-center z-20"
//           style={{
//             top: wishesTop,
//             fontFamily: "Cylburn, cursive",
//             fontSize: 32,
//             lineHeight: "40px",
//             color: "#F0E8D9",
//           }}
//         >
//           Click to Wishes
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Rsvp;
