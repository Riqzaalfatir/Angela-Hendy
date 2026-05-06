// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import WishesCard from "../popup/WishesCard";
// import { dummyPesan } from "../data/wishes";

// const CANVAS_WIDTH = 390;

// type Props = {
//   open: boolean;
//   onClose: () => void;
//   onOpenGift: () => void;
// };

// type WishItem = {
//   id: number;
//   nama: string;
//   pesan: string;
// };

// export default function Wishes({ open, onClose, onOpenGift }: Props) {
//   const [nama, setNama] = useState("");
//   const [pesan, setPesan] = useState("");
//   const [pesanList, setPesanList] = useState(dummyPesan);
//   const [showAll, setShowAll] = useState(false);
// const [selectedMessage, setSelectedMessage] = useState<WishItem | null>(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [scale, setScale] = useState(1);
//   const [canvasHeight, setCanvasHeight] = useState(844);
//   const innerRef = useRef<HTMLDivElement>(null);

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

//   useEffect(() => {
//     const el = innerRef.current;
//     if (!el) return;
//     const observer = new ResizeObserver(() => {
//       setCanvasHeight(el.scrollHeight);
//     });
//     observer.observe(el);
//     setCanvasHeight(el.scrollHeight);
//     return () => observer.disconnect();
//   }, []);

//   const handleSubmit = () => {
//     if (!nama || !pesan) return;
//     setPesanList([{ id: Date.now(), nama, pesan }, ...pesanList]);
//     setNama("");
//     setPesan("");
//     setShowPopup(true);
//   };

//   if (!open) return null;

//   return (
//     <>
//       {/* ── OVERLAY — kolom kanan saja di desktop ── */}
//       <div className="wishes-overlay" onClick={onClose}>
//         <div
//           style={{
//             width: "100%",
//             height: canvasHeight * scale,
//             position: "relative",
//             transition: "height 0.4s ease",
//           }}
//           className="min-h-[100%] lg:overflow-hidden lg:overflow-y-auto no-scrollbar"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div
//             ref={innerRef} className=" lg:min-h-screen"
//             style={{
//               width: CANVAS_WIDTH,
//               transform: `scale(${scale})`,
//               transformOrigin: "top left",
//               position: "absolute",
//               top: 0,
//               left: 0,
//               backgroundImage: "url('/images/Hero/Default.webp')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             {/* BUNGA & DAUN ATAS */}
//             <Image src="/images/Wishes/BungaAtas.svg" alt="" width={999} height={999} priority
//               className="absolute z-0 w-full pointer-events-none" style={{ top: 0 }} />
//             <Image src="/images/Wishes/DaunAtas.webp" alt="" width={999} height={999} priority
//               className="absolute z-10 w-full pointer-events-none" style={{ top: 0 }} />
//             <Image src="/images/Wishes/DaunKanan.webp" alt="" width={999} height={999} priority
//               className="absolute z-10 w-full pointer-events-none" style={{ top: 0, right: 0 }} />

//             {/* BUNGA & DAUN BAWAH */}
//             <Image src="/images/Wishes/BungaKanan.svg" alt="" width={999} height={999} priority
//               className="absolute z-0 w-full pointer-events-none" style={{ bottom: 0, right: 0 }} />
//             <Image src="/images/Wishes/BungaKiri.svg" alt="" width={999} height={999} priority
//               className="absolute z-0 w-full pointer-events-none" style={{ bottom: 0, left: 0 }} />
//             <Image src="/images/Wishes/DaunBawah.webp" alt="" width={999} height={999} priority
//               className="absolute z-10 w-full pointer-events-none" style={{ bottom: 0, left: 0 }} />

//             {/* CONTENT */}
//             <div className="relative z-20 flex flex-col items-center pt-[42px] pb-[38px] w-[284px] mx-auto gap-[20px]">
//               <h2 className="font-cylburn text-[56px] text-[#F0E8D9] text-center">
//                 Your Wishes
//               </h2>

//               <input
//                 type="text"
//                 value={nama}
//                 placeholder="Desy (Tester)"
//                 onChange={(e) => setNama(e.target.value)}
//                 className="w-full text-white font-garamond border mt-[5px] text-[12px] bg-transparent border-white px-3 h-[33px] rounded-full outline-none placeholder:text-white/50"
//               />

//               <textarea
//                 value={pesan}
//                 placeholder="Write your messages here..."
//                 onChange={(e) => setPesan(e.target.value)}
//                 className="w-full text-white font-garamond italic border text-[12px] bg-transparent border-white px-3 pt-[7px] h-[60px] placeholder:text-white/50 rounded-xl outline-none resize-none"
//               />

//               <button
//                 onClick={handleSubmit}
//                 className="bg-white rounded-full h-[33px] text-[12px] font-garamond uppercase flex items-center justify-center gap-2 text-[#670C0F] w-full font-semibold"
//               >
//                 Send
//               </button>

//               {/* LIST PESAN */}
//               <div className={`w-full ${!showAll ? "bg-white rounded-2xl h-[325px] overflow-y-auto no-scrollbar" : ""}`}>
//                 <motion.div>
//                   {!showAll ? (
//                     <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
//                       <div className="sticky top-0 w-full h-[18px] bg-white z-10" />
//                       <div className="px-[13px] py-2">
//                         {pesanList.slice(0, 8).map((item, index) => (
//                           <div key={item.id}>
//                             <p className="text-[#670C0F] text-[12px] font-garamond font-bold">{item.nama}</p>
//                             <p className="text-[#670C0F] text-[12px] font-garamond font-semibold">{item.pesan}</p>
//                             {index !== pesanList.slice(0, 8).length - 1 && (
//                               <div className="border-t border-[#670C0F]/80 border-[0.2px] mt-[7px] mb-[15px]" />
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                       <div className="sticky bottom-0 w-full h-[18px] bg-white z-10" />
//                     </motion.div>
//                   ) : (
//                     <motion.div key="grid" className="grid grid-cols-2 gap-3"
//                       initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
//                       {pesanList.map((item) => (
//                         <motion.div
//                           key={item.id}
//                           initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                           animate={{ opacity: 1, y: 0, scale: 1 }}
//                           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//                           onClick={() => setSelectedMessage(item)}
//                           className="rounded-md overflow-hidden  shadow-md bg-white flex flex-col cursor-pointer"
//                         >
//                           <div className="p-[10px] relative flex-1 flex flex-col justify-center">
//                             <p className="absolute top-[2px] left-[10px] text-[32px] font-bold font-garamond text-[#670C0F]">"</p>
//                             <p className="font-lora text-[12px] text-[#670C0F] font-garamond text-center mt-6 mb-2 line-clamp-4">{item.pesan}</p>
//                           </div>
//                           <div className="bg-[#670C0F] font-garamond h-[35px] flex items-center justify-center px-6">
//                             <p className="text-white text-center line-clamp-1 text-[13px]">{item.nama}</p>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                   )}
//                 </motion.div>
//               </div>

//               <button
//                 onClick={() => setShowAll(!showAll)}
//                 className="bg-white text-[#670C0F] rounded-full h-[33px] text-[12px] w-full font-garamond font-semibold flex items-center justify-center gap-[7px]"
//               >
//                 <Image src="/images/Wishes/Pesan.svg" alt="Kirim" width={22} height={24}
//                   className="object-cover w-[18px] h-[22px]" />
//                 {showAll ? "BACK" : "VIEW ALL MESSAGES"}
//               </button>

//               <WishesCard data={selectedMessage} onClose={() => setSelectedMessage(null)} />

//               <button
//                 onClick={onOpenGift}
//                 className="font-cylburn text-[32px] text-[#F0E8D9] text-center mt-[25px] cursor-pointer hover:opacity-80 transition-opacity"
//               >
//                 Click to Wedding Gift
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Popup sukses di LUAR wishes-overlay agar center di full layar */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[60]">
//           <div className="bg-[#F7F8F2] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#E4E7D6]">
//             <h3 className="text-[22px] font-garamond font-semibold text-[#7B2729] mb-3 tracking-wide">Pesan Terkirim!</h3>
//             <div className="w-10 h-[2px] bg-[#7B2729] mx-auto mb-4 opacity-60" />
//             <p className="text-[16px] text-[#7B2729] font-garamond leading-relaxed mb-6">
//               Terima kasih atas doa dan ucapan baik Anda. Kami sangat menghargai pesan yang telah diberikan.
//             </p>
//             <button
//               onClick={() => setShowPopup(false)}
//               className="bg-[#7B2729] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide font-garamond"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WishesCard from "../popup/WishesCard";
import { dummyPesan } from "../data/wishes";

const CANVAS_WIDTH = 390;

type Props = {
  open: boolean;
  onClose: () => void;
  onOpenGift: () => void;
};

type WishItem = {
  id: number;
  nama: string;
  pesan: string;
};

export default function Wishes({ open, onClose, onOpenGift }: Props) {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [pesanList, setPesanList] = useState(dummyPesan);
  const [showAll, setShowAll] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<WishItem | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [scale, setScale] = useState(1);
  const [canvasHeight, setCanvasHeight] = useState(844);
  const innerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      setCanvasHeight(el.scrollHeight);
    });
    observer.observe(el);
    setCanvasHeight(el.scrollHeight);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!nama || !pesan) return;
    setPesanList([{ id: Date.now(), nama, pesan }, ...pesanList]);
    setNama("");
    setPesan("");
    setShowPopup(true);
  };

  // ✅ DIHAPUS: if (!open) return null;

  return (
    // ✅ Tambah style display di sini
    <div style={{ display: open ? "block" : "none" }}>
      <>
        <div className="wishes-overlay" onClick={onClose}>
          <div
            style={{
              width: "100%",
              height: canvasHeight * scale,
              position: "relative",
              transition: "height 0.4s ease",
            }}
            className="min-h-[100%] lg:overflow-hidden lg:overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              ref={innerRef}
              id="wishes"
              className="lg:min-h-screen"
              style={{
                width: CANVAS_WIDTH,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                position: "absolute",
                top: 0,
                left: 0,
                backgroundImage: "url('/images/Hero/Default.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* BUNGA & DAUN ATAS */}
              <Image src="/images/Wishes/BungaAtas.svg" alt="" width={999} height={999} priority
                className="absolute z-0 w-full pointer-events-none" style={{ top: 0 }} />
              <Image src="/images/Wishes/DaunAtas.webp" alt="" width={999} height={999} priority
                className="absolute z-10 w-full pointer-events-none" style={{ top: 0 }} />
              <Image src="/images/Wishes/DaunKanan.webp" alt="" width={999} height={999} priority
                className="absolute z-10 w-full pointer-events-none" style={{ top: 0, right: 0 }} />

              {/* BUNGA & DAUN BAWAH */}
              <Image src="/images/Wishes/BungaKanan.svg" alt="" width={999} height={999} priority
                className="absolute z-0 w-full pointer-events-none" style={{ bottom: 0, right: 0 }} />
              <Image src="/images/Wishes/BungaKiri.svg" alt="" width={999} height={999} priority
                className="absolute z-0 w-full pointer-events-none" style={{ bottom: 0, left: 0 }} />
              <Image src="/images/Wishes/DaunBawah.webp" alt="" width={999} height={999} priority
                className="absolute z-10 w-full pointer-events-none" style={{ bottom: 0, left: 0 }} />

              {/* CONTENT */}
              <div className="relative z-20 flex flex-col items-center pt-[42px] pb-[38px] w-[284px] mx-auto gap-[20px]">
                <h2 className="font-cylburn text-[56px] text-[#F0E8D9] text-center">
                  Your Wishes
                </h2>

                <input
                  type="text"
                  value={nama}
                  placeholder="Desy (Tester)"
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full text-white font-garamond border mt-[5px] text-[12px] bg-transparent border-white px-3 h-[33px] rounded-full outline-none placeholder:text-white/50"
                />

                <textarea
                  value={pesan}
                  placeholder="Write your messages here..."
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full text-white font-garamond italic border text-[12px] bg-transparent border-white px-3 pt-[7px] h-[60px] placeholder:text-white/50 rounded-xl outline-none resize-none"
                />

                <button
                  onClick={handleSubmit}
                  className="bg-white rounded-full h-[33px] text-[12px] font-garamond uppercase flex items-center justify-center gap-2 text-[#670C0F] w-full font-semibold"
                >
                  Send
                </button>

                {/* LIST PESAN */}
                <div className={`w-full ${!showAll ? "bg-white rounded-2xl h-[325px] overflow-y-auto no-scrollbar" : ""}`}>
                  <motion.div>
                    {!showAll ? (
                      <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div className="sticky top-0 w-full h-[18px] bg-white z-10" />
                        <div className="px-[13px] py-2">
                          {pesanList.slice(0, 8).map((item, index) => (
                            <div key={item.id}>
                              <p className="text-[#670C0F] text-[12px] font-garamond font-bold">{item.nama}</p>
                              <p className="text-[#670C0F] text-[12px] font-garamond font-semibold">{item.pesan}</p>
                              {index !== pesanList.slice(0, 8).length - 1 && (
                                <div className="border-t border-[#670C0F]/80 border-[0.2px] mt-[7px] mb-[15px]" />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="sticky bottom-0 w-full h-[18px] bg-white z-10" />
                      </motion.div>
                    ) : (
                      <motion.div key="grid" className="grid grid-cols-2 gap-3"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                        {pesanList.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            onClick={() => setSelectedMessage(item)}
                            className="rounded-md overflow-hidden shadow-md bg-white flex flex-col cursor-pointer"
                          >
                            <div className="p-[10px] relative flex-1 flex flex-col justify-center">
                              <p className="absolute top-[2px] left-[10px] text-[32px] font-bold font-garamond text-[#670C0F]">"</p>
                              <p className="font-lora text-[12px] text-[#670C0F] font-garamond text-center mt-6 mb-2 line-clamp-4">{item.pesan}</p>
                            </div>
                            <div className="bg-[#670C0F] font-garamond h-[35px] flex items-center justify-center px-6">
                              <p className="text-white text-center line-clamp-1 text-[13px]">{item.nama}</p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-white text-[#670C0F] rounded-full h-[33px] text-[12px] w-full font-garamond font-semibold flex items-center justify-center gap-[7px]"
                >
                  <Image src="/images/Wishes/Pesan.svg" alt="Kirim" width={22} height={24}
                    className="object-cover w-[18px] h-[22px]" />
                  {showAll ? "BACK" : "VIEW ALL MESSAGES"}
                </button>

                <WishesCard data={selectedMessage} onClose={() => setSelectedMessage(null)} />

                <button
                  onClick={onOpenGift}
                  className="font-cylburn text-[32px] text-[#F0E8D9] text-center mt-[25px] cursor-pointer hover:opacity-80 transition-opacity"
                >
                  Click to Wedding Gift
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popup sukses */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[60]">
            <div className="bg-[#F7F8F2] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#E4E7D6]">
              <h3 className="text-[22px] font-garamond font-semibold text-[#7B2729] mb-3 tracking-wide">Pesan Terkirim!</h3>
              <div className="w-10 h-[2px] bg-[#7B2729] mx-auto mb-4 opacity-60" />
              <p className="text-[16px] text-[#7B2729] font-garamond leading-relaxed mb-6">
                Terima kasih atas doa dan ucapan baik Anda. Kami sangat menghargai pesan yang telah diberikan.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#7B2729] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide font-garamond"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}