// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import WishesCard from "../popup/WishesCard";
// import { dummyPesan } from "../data/wishes";

// type Props = {
//   open: boolean;
//   onClose: () => void;
// };

// export default function Wishes({ open, onClose }: Props) {
//   const [nama, setNama] = useState("");
//   const [pesan, setPesan] = useState("");
//   const [pesanList, setPesanList] = useState(dummyPesan);
//   const [showAll, setShowAll] = useState(false);
//   const [selectedMessage, setSelectedMessage] = useState<any>(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleSubmit = () => {
//     if (!nama || !pesan) return;
//     const newMessage = { id: Date.now(), nama, pesan };
//     setPesanList([newMessage, ...pesanList]);
//     setNama("");
//     setPesan("");
//     setShowPopup(true);
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 overflow-y-auto"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: open ? 1 : 0 }}
//       transition={{ duration: 0.3 }}
//       style={{ pointerEvents: open ? "auto" : "none" }}
//     >
//       <div
//         className="relative w-full"
//         style={{
//           backgroundImage: "url('/images/Hero/Default.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* ── BUNGA & DAUN ATAS ── */}
//         <Image src="/images/Wishes/BungaAtas.webp" alt="" width={999} height={999} priority className="absolute z-0 w-full pointer-events-none" style={{ top: 0 }} />
//         <Image src="/images/Wishes/DaunAtas.webp" alt="" width={999} height={999} priority className="absolute z-10 w-full pointer-events-none" style={{ top: 0 }} />
//         <Image src="/images/Wishes/DaunKanan.webp" alt="" width={999} height={999} priority className="absolute z-10 w-full pointer-events-none" style={{ top: 0, right: 0 }} />

//         {/* ── BUNGA & DAUN BAWAH ── */}
//         <Image src="/images/Wishes/BungaKananBawah.webp" alt="" width={999} height={999} priority className="absolute z-0 w-full pointer-events-none" style={{ bottom: 0, right: 0 }} />
//         <Image src="/images/Wishes/BungaKiriBawah.webp" alt="" width={999} height={999} priority className="absolute z-0 w-full pointer-events-none" style={{ bottom: 0, left: 0 }} />
//         <Image src="/images/Wishes/DaunBawah.webp" alt="" width={999} height={999} priority className="absolute z-10 w-full pointer-events-none" style={{ bottom: 0, left: 0 }} />

//         {/* ── CONTENT ── */}
//         <div
//           className="relative z-20 flex flex-col items-center mx-auto"
//           style={{
//             width: 284,
//             gap: 20,
//             paddingTop: 84,
//             paddingBottom: 30,
//           }}
//         >
//           <h2 className="text-[#F0E8D9] text-center font-cylburn text-[56px] leading-[56px]">
//             Your Wishes
//           </h2>

//           <input
//             type="text"
//             value={nama}
//             placeholder="Desy (Tester)"
//             onChange={(e) => setNama(e.target.value)}
//             className="w-full text-white font-garamond bg-transparent border border-white rounded-full outline-none placeholder:text-white/50 text-[12px] h-[33px] px-3"
//           />

//           <textarea
//             value={pesan}
//             placeholder="Write your messages here..."
//             onChange={(e) => setPesan(e.target.value)}
//             className="w-full text-white font-garamond italic bg-transparent border border-white rounded-xl outline-none resize-none placeholder:text-white/50 text-[12px] h-[60px] px-3 pt-[7px]"
//           />

//           <button
//             onClick={handleSubmit}
//             className="bg-white rounded-full font-garamond uppercase text-[#670C0F] w-full font-semibold flex items-center justify-center gap-2 text-[12px] h-[33px]"
//           >
//             Send
//           </button>

//           {/* LIST PESAN */}
//           <div className={`w-full ${!showAll ? "bg-white rounded-2xl h-[325px] overflow-y-auto" : ""}`}>
//             {!showAll ? (
//               <div>
//                 <div className="sticky top-0 w-full h-[18px] bg-white z-10" />
//                 <div className="px-[13px] py-2">
//                   {pesanList.slice(0, 8).map((item, index) => (
//                     <div key={item.id}>
//                       <p className="text-[#670C0F] text-[12px] font-garamond font-bold">{item.nama}</p>
//                       <p className="text-[#670C0F] text-[12px] font-garamond font-semibold">{item.pesan}</p>
//                       {index !== pesanList.length - 1 && (
//                         <div className="border-t border-[#670C0F]/80 border-[0.2px] mt-[7px] mb-[15px]" />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="sticky bottom-0 w-full h-[18px] bg-white z-10" />
//               </div>
//             ) : (
//               <div className="grid grid-cols-2 gap-2">
//                 {pesanList.map((item) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, y: 50, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//                     onClick={() => setSelectedMessage(item)}
//                     className="rounded-md overflow-hidden shadow-md bg-white flex flex-col cursor-pointer"
//                   >
//                     <div className="p-[10px] relative flex-1 flex flex-col justify-center">
//                       <p className="absolute top-[2px] left-[10px] text-[32px] font-bold font-garamond text-[#670C0F]">"</p>
//                       <p className="font-garamond text-center text-[#670C0F] line-clamp-4 text-[12px] mt-6 mb-2">{item.pesan}</p>
//                     </div>
//                     <div className="bg-[#670C0F] font-garamond h-[35px] flex items-center justify-center px-6">
//                       <p className="text-white text-center line-clamp-1 text-[13px]">{item.nama}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="bg-white text-[#670C0F] rounded-full font-garamond font-semibold w-full flex items-center justify-center gap-[7px] text-[12px] h-[33px]"
//           >
//             <Image src="/images/Wishes/Pesan.svg" alt="Kirim" width={22} height={24} className="object-cover w-[18px] h-[22px]" />
//             {showAll ? "BACK" : "VIEW ALL MESSAGES"}
//           </button>

//           <WishesCard data={selectedMessage} onClose={() => setSelectedMessage(null)} />

//           <p className="text-[#F0E8D9] text-center font-cylburn text-[32px] leading-[40px]">
//             Click to Wedding Gift
//           </p>
//         </div>
//       </div>

//       {/* POPUP KIRIM PESAN */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
//           <div className="bg-[#F7F8F2] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#E4E7D6]">
//             <h3 className="text-[22px] font-lora font-semibold text-[#4E4E4E] mb-3 tracking-wide">Pesan Terkirim !</h3>
//             <div className="w-10 h-[2px] bg-[#4E4E4E] mx-auto mb-4 opacity-60" />
//             <p className="text-[16px] text-[#4E4E4E] font-lora leading-relaxed mb-6">
//               Terima kasih atas doa dan ucapan baik Anda. Kami sangat menghargai pesan yang telah diberikan.
//             </p>
//             <button
//               onClick={() => setShowPopup(false)}
//               className="bg-[#4E4E4E] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide font-sweetsans"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import WishesCard from "../popup/WishesCard";
// import { dummyPesan } from "../data/wishes";

// type Props = {
//   open: boolean;
//   onClose: () => void;
// };

// export default function Wishes({ open, onClose }: Props) {
//   const [nama, setNama] = useState("");
//   const [pesan, setPesan] = useState("");
//   const [pesanList, setPesanList] = useState(dummyPesan);
//   const [showAll, setShowAll] = useState(false);
//   const [selectedMessage, setSelectedMessage] = useState<any>(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleSubmit = () => {
//     if (!nama || !pesan) return;
//     const newMessage = { id: Date.now(), nama, pesan };
//     setPesanList([newMessage, ...pesanList]);
//     setNama("");
//     setPesan("");
//     setShowPopup(true);
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 overflow-y-auto h-[800px]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: open ? 1 : 0 }}
//       transition={{ duration: 0.3 }}
//       style={{ pointerEvents: open ? "auto" : "none" }}
//     >
//       {/* Wrapper: min-height lebih dari 100vh agar konten tidak terpotong & bisa scroll */}
//       <div
//         className="relative w-full"
//         style={{
//           minHeight: "210vw",
//           backgroundImage: "url('/images/Hero/Default.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* ── BUNGA & DAUN ATAS ── */}
//         <Image src="/images/Wishes/BungaAtas.webp" alt="" width={999} height={999} priority className="absolute z-0 w-full pointer-events-none" style={{ top: 0 }} />
//         <Image src="/images/Wishes/DaunAtas.webp" alt="" width={999} height={999} priority className="absolute z-10 w-full pointer-events-none" style={{ top: 0 }} />
//         <Image src="/images/Wishes/DaunKanan.webp" alt="" width={999} height={999} priority className="absolute z-10 w-full pointer-events-none" style={{ top: 0, right: 0 }} />

//         {/* ── BUNGA & DAUN BAWAH ── */}
//         <Image src="/images/Wishes/BungaKananBawah.webp" alt="" width={999} height={999} priority className="absolute z-0 w-full pointer-events-none" style={{ bottom: 0, right: 0 }} />
//         <Image src="/images/Wishes/BungaKiriBawah.webp" alt="" width={999} height={999} priority className="absolute z-0 w-full pointer-events-none" style={{ bottom: 0, left: 0 }} />
//         <Image src="/images/Wishes/DaunBawah.webp" alt="" width={999} height={999} priority className="absolute z-10 w-full pointer-events-none" style={{ bottom: 0, left: 0 }} />

//         {/* ── CONTENT ── */}
//         <div
//           className="relative z-20 flex flex-col items-center mx-auto"
//           style={{
//             width: "72.82vw",
//             gap: "5.13vw",
//             paddingTop: "13.54vw",
//             paddingBottom: "10.69vw",
//           }}
//         >
//           <h2
//             className="text-[#F0E8D9] text-center font-cylburn"
//             style={{ fontSize: "14.36vw", lineHeight: "14.36vw" }}
//           >
//             Your Wishes
//           </h2>

//           <input
//             type="text"
//             value={nama}
//             placeholder="Desy (Tester)"
//             onChange={(e) => setNama(e.target.value)}
//             className="w-full text-white font-garamond bg-transparent border border-white rounded-full outline-none placeholder:text-white/50"
//             style={{ fontSize: "3.08vw", height: "8.46vw", paddingLeft: "3.08vw", paddingRight: "3.08vw" }}
//           />

//           <textarea
//             value={pesan}
//             placeholder="Write your messages here..."
//             onChange={(e) => setPesan(e.target.value)}
//             className="w-full text-white font-garamond italic bg-transparent border border-white rounded-xl outline-none resize-none placeholder:text-white/50"
//             style={{ fontSize: "3.08vw", height: "15.38vw", paddingLeft: "3.08vw", paddingRight: "3.08vw", paddingTop: "1.79vw" }}
//           />

//           <button
//             onClick={handleSubmit}
//             className="bg-white rounded-full font-garamond uppercase text-[#670C0F] w-full font-semibold flex items-center justify-center"
//             style={{ fontSize: "3.08vw", height: "8.46vw", gap: "2.05vw" }}
//           >
//             Send
//           </button>

//           {/* LIST PESAN */}
//           <div
//             className={`w-full ${!showAll ? "bg-white rounded-2xl overflow-y-auto" : ""}`}
//             style={!showAll ? { height: "83.33vw" } : {}}
//           >
//             {!showAll ? (
//               <div>
//                 <div className="sticky top-0 w-full bg-white z-10" style={{ height: "4.62vw" }} />
//                 <div style={{ paddingLeft: "3.33vw", paddingRight: "3.33vw", paddingTop: "0.51vw", paddingBottom: "0.51vw" }}>
//                   {pesanList.slice(0, 8).map((item, index) => (
//                     <div key={item.id}>
//                       <p className="text-[#670C0F] font-garamond font-bold" style={{ fontSize: "3.08vw" }}>{item.nama}</p>
//                       <p className="text-[#670C0F] font-garamond font-semibold" style={{ fontSize: "3.08vw" }}>{item.pesan}</p>
//                       {index !== pesanList.length - 1 && (
//                         <div className="border-t border-[#670C0F]/80 border-[0.2px]" style={{ marginTop: "1.79vw", marginBottom: "3.85vw" }} />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="sticky bottom-0 w-full bg-white z-10" style={{ height: "4.62vw" }} />
//               </div>
//             ) : (
//               <div className="grid grid-cols-2" style={{ gap: "1.28vw" }}>
//                 {pesanList.map((item) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, y: 50, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//                     onClick={() => setSelectedMessage(item)}
//                     className="rounded-md overflow-hidden shadow-md bg-white flex flex-col cursor-pointer"
//                   >
//                     <div className="relative flex-1 flex flex-col justify-center" style={{ padding: "2.56vw" }}>
//                       <p className="absolute font-bold font-garamond text-[#670C0F]" style={{ top: "0.51vw", left: "2.56vw", fontSize: "8.21vw" }}>"</p>
//                       <p className="font-garamond text-center text-[#670C0F] line-clamp-4" style={{ fontSize: "3.08vw", marginTop: "6.15vw", marginBottom: "0.51vw" }}>{item.pesan}</p>
//                     </div>
//                     <div className="bg-[#670C0F] font-garamond flex items-center justify-center" style={{ height: "8.97vw", paddingLeft: "3.08vw", paddingRight: "3.08vw" }}>
//                       <p className="text-white text-center line-clamp-1" style={{ fontSize: "3.33vw" }}>{item.nama}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="bg-white text-[#670C0F] rounded-full font-garamond font-semibold w-full flex items-center justify-center"
//             style={{ fontSize: "3.08vw", height: "8.46vw", gap: "1.79vw" }}
//           >
//             <Image src="/images/Wishes/Pesan.svg" alt="Kirim" width={22} height={24} className="object-cover" style={{ width: "4.62vw", height: "5.64vw" }} />
//             {showAll ? "BACK" : "VIEW ALL MESSAGES"}
//           </button>

//           <WishesCard data={selectedMessage} onClose={() => setSelectedMessage(null)} />

//           <p
//             className="text-[#F0E8D9] text-center font-cylburn mt-10 mb-10"
//             style={{ fontSize: "8.21vw", lineHeight: "10.26vw" }}
//           >
//             Click to Wedding Gift
//           </p>
//         </div>
//       </div>

//       {/* POPUP KIRIM PESAN */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
//           <div className="bg-[#F7F8F2] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#E4E7D6]">
//             <h3 className="text-[22px] font-lora font-semibold text-[#4E4E4E] mb-3 tracking-wide">Pesan Terkirim !</h3>
//             <div className="w-10 h-[2px] bg-[#4E4E4E] mx-auto mb-4 opacity-60" />
//             <p className="text-[16px] text-[#4E4E4E] font-lora leading-relaxed mb-6">
//               Terima kasih atas doa dan ucapan baik Anda. Kami sangat menghargai pesan yang telah diberikan.
//             </p>
//             <button
//               onClick={() => setShowPopup(false)}
//               className="bg-[#4E4E4E] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide font-sweetsans"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import WishesCard from "../popup/WishesCard";
// import { dummyPesan } from "../data/wishes";

// type Props = {
//   open: boolean;
//   onClose: () => void;
// };

// export default function Wishes({ open, onClose }: Props) {
//   const [nama, setNama] = useState("");
//   const [pesan, setPesan] = useState("");
//   const [pesanList, setPesanList] = useState(dummyPesan);
//   const [showAll, setShowAll] = useState(false);
//   const [selectedMessage, setSelectedMessage] = useState<any>(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleSubmit = () => {
//     if (!nama || !pesan) return;
//     const newMessage = { id: Date.now(), nama, pesan };
//     setPesanList([newMessage, ...pesanList]);
//     setNama("");
//     setPesan("");
//     setShowPopup(true);
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 overflow-y-auto"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: open ? 1 : 0 }}
//       transition={{ duration: 0.3 }}
//       style={{ pointerEvents: open ? "auto" : "none" }}
//     >
//       {/* Section — tinggi natural mengikuti konten */}
//       <div
//         className="relative w-full"
//         style={{
//           backgroundImage: "url('/images/Hero/Default.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* ── BUNGA & DAUN ATAS ── */}
//         <Image src="/images/Wishes/BungaAtas.webp" alt="" width={999} height={999} priority className="absolute z-0 w-full pointer-events-none" style={{ top: 0 }} />
//         <Image src="/images/Wishes/DaunAtas.webp" alt="" width={999} height={999} priority className="absolute z-10 w-full pointer-events-none" style={{ top: 0 }} />
//         <Image src="/images/Wishes/DaunKanan.webp" alt="" width={999} height={999} priority className="absolute z-10 w-full pointer-events-none" style={{ top: 0, right: 0 }} />

//         {/* ── BUNGA & DAUN BAWAH ── */}
//         <Image src="/images/Wishes/BungaKananBawah.webp" alt="" width={999} height={999} priority className="absolute z-0 w-full pointer-events-none" style={{ bottom: 0, right: 0 }} />
//         <Image src="/images/Wishes/BungaKiriBawah.webp" alt="" width={999} height={999} priority className="absolute z-0 w-full pointer-events-none" style={{ bottom: 0, left: 0 }} />
//         <Image src="/images/Wishes/DaunBawah.webp" alt="" width={999} height={999} priority className="absolute z-10 w-full pointer-events-none" style={{ bottom: 0, left: 0 }} />

//         {/* ── CONTENT ── */}
//         <div
//           className="relative z-20 flex flex-col items-center w-[284px] mx-auto gap-[20px]"
//           style={{ paddingTop: 84, paddingBottom: 30 }}
//         >
//           <h2 className="font-cylburn text-[56px] text-[#F0E8D9] text-center">
//             Your Wishes
//           </h2>

//           <input
//             type="text"
//             value={nama}
//             placeholder="Desy (Tester)"
//             onChange={(e) => setNama(e.target.value)}
//             className="w-full text-white font-garamond border text-[12px] bg-transparent border-white px-3 h-[33px] rounded-full outline-none placeholder:text-white/50"
//           />

//           <textarea
//             value={pesan}
//             placeholder="Write your messages here..."
//             onChange={(e) => setPesan(e.target.value)}
//             className="w-full text-white font-garamond italic border text-[12px] bg-transparent border-white px-3 pt-[7px] h-[60px] placeholder:text-white/50 rounded-xl outline-none resize-none"
//           />

//           <button
//             onClick={handleSubmit}
//             className="bg-white rounded-full h-[33px] text-[12px] font-garamond uppercase flex items-center justify-center gap-2 text-[#670C0F] w-full font-semibold"
//           >
//             Send
//           </button>

//           {/* LIST PESAN */}
//           <div className={`w-full ${!showAll ? "bg-white rounded-2xl h-[325px] overflow-y-auto" : ""}`}>
//             {!showAll ? (
//               <div>
//                 <div className="sticky top-0 w-full h-[18px] bg-white z-10" />
//                 <div className="px-[13px] py-2">
//                   {pesanList.slice(0, 8).map((item, index) => (
//                     <div key={item.id}>
//                       <p className="text-[#670C0F] text-[12px] font-garamond font-bold">{item.nama}</p>
//                       <p className="text-[#670C0F] text-[12px] font-garamond font-semibold">{item.pesan}</p>
//                       {index !== pesanList.length - 1 && (
//                         <div className="border-t border-[#670C0F]/80 border-[0.2px] mt-[7px] mb-[15px]" />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="sticky bottom-0 w-full h-[18px] bg-white z-10" />
//               </div>
//             ) : (
//               <div className="grid grid-cols-2 gap-2">
//                 {pesanList.map((item) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, y: 50, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//                     onClick={() => setSelectedMessage(item)}
//                     className="rounded-md overflow-hidden shadow-md bg-white flex flex-col cursor-pointer"
//                   >
//                     <div className="p-[10px] relative flex-1 flex flex-col justify-center">
//                       <p className="absolute top-[2px] left-[10px] text-[32px] font-bold font-garamond text-[#670C0F]">"</p>
//                       <p className="font-lora text-[12px] text-[#670C0F] font-garamond text-center mt-6 mb-2 line-clamp-4">{item.pesan}</p>
//                     </div>
//                     <div className="bg-[#670C0F] font-garamond h-[35px] flex items-center justify-center px-6">
//                       <p className="text-white text-center line-clamp-1 text-[13px]">{item.nama}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="bg-white text-[#670C0F] rounded-full h-[33px] text-[12px] w-full font-garamond font-semibold flex items-center justify-center gap-[7px]"
//           >
//             <Image src="/images/Wishes/Pesan.svg" alt="Kirim" width={22} height={24} className="object-cover w-[18px] h-[22px]" />
//             {showAll ? "BACK" : "VIEW ALL MESSAGES"}
//           </button>

//           <WishesCard data={selectedMessage} onClose={() => setSelectedMessage(null)} />

//           <p className="font-cylburn text-[32px] text-[#F0E8D9] text-center">
//             Click to Wedding Gift
//           </p>
//         </div>
//       </div>

//       {/* POPUP */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
//           <div className="bg-[#F7F8F2] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#E4E7D6]">
//             <h3 className="text-[22px] font-lora font-semibold text-[#4E4E4E] mb-3 tracking-wide">Pesan Terkirim !</h3>
//             <div className="w-10 h-[2px] bg-[#4E4E4E] mx-auto mb-4 opacity-60" />
//             <p className="text-[16px] text-[#4E4E4E] font-lora leading-relaxed mb-6">
//               Terima kasih atas doa dan ucapan baik Anda. Kami sangat menghargai pesan yang telah diberikan.
//             </p>
//             <button
//               onClick={() => setShowPopup(false)}
//               className="bg-[#4E4E4E] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide font-sweetsans"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.div>
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
    onOpenGift: () => void; // ← tambah ini

};

export default function Wishes({ open, onClose, onOpenGift }: Props) {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [pesanList, setPesanList] = useState(dummyPesan);
  const [showAll, setShowAll] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [scale, setScale] = useState(1);
  const [canvasHeight, setCanvasHeight] = useState(844);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => setScale(window.innerWidth / CANVAS_WIDTH);
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

  if (!open) return null;

  return (
    <>
      {/* ── BACKDROP — full layar, handle scroll ── */}
      <div
        className="fixed inset-0 z-50 bg-black/50 overflow-y-auto"
        onClick={onClose}
      >
        {/* ── OUTER WRAPPER — tinggi mengikuti canvas × scale ── */}
        <div
         style={{
    width: "100%",
    height: canvasHeight * scale,
    position: "relative",
    overflow: "auto",
    transition: "height 0.4s ease", // ← tambah ini
  }}
  onClick={(e) => e.stopPropagation()}
        >
          {/* ── INNER CANVAS 390px yang di-scale ── */}
          <div
            ref={innerRef}
              data-canvas  // ← tambah ini

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
            <Image
              src="/images/Wishes/BungaAtas.webp"
              alt="" width={999} height={999} priority
              className="absolute z-0 w-full pointer-events-none"
              style={{ top: 0 }}
            />
            <Image
              src="/images/Wishes/DaunAtas.webp"
              alt="" width={999} height={999} priority
              className="absolute z-10 w-full pointer-events-none"
              style={{ top: 0 }}
            />
            <Image
              src="/images/Wishes/DaunKanan.webp"
              alt="" width={999} height={999} priority
              className="absolute z-10 w-full pointer-events-none"
              style={{ top: 0, right: 0 }}
            />

            {/* BUNGA & DAUN BAWAH */}
            <Image
              src="/images/Wishes/BungaKananBawah.webp"
              alt="" width={999} height={999} priority
              className="absolute z-0 w-full pointer-events-none"
              style={{ bottom: 0, right: 0 }}
            />
            <Image
              src="/images/Wishes/BungaKiriBawah.webp"
              alt="" width={999} height={999} priority
              className="absolute z-0 w-full pointer-events-none"
              style={{ bottom: 0, left: 0 }}
            />
            <Image
              src="/images/Wishes/DaunBawah.webp"
              alt="" width={999} height={999} priority
              className="absolute z-10 w-full pointer-events-none"
              style={{ bottom: 0, left: 0 }}
            />

            {/* CONTENT */}
            <div className="relative z-20 flex flex-col items-center pt-[40px] pb-[38px] w-[284px] mx-auto gap-[20px]">
              <h2 className="font-cylburn text-[56px] text-[#F0E8D9] text-center -pt-[20]">
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
             {/* LIST PESAN */}
<div className={`w-full ${!showAll ? "bg-white rounded-2xl h-[325px] overflow-y-auto" : ""}`}>
  <motion.div mode="wait">
    {!showAll ? (
      <motion.div
        key="list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
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
      <motion.div
        key="grid"
        className="grid grid-cols-2 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
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
                <Image src="/images/Wishes/Pesan.svg" alt="Kirim" width={22} height={24} className="object-cover w-[18px] h-[22px]" />
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

      {/* POPUP SUKSES */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[60]">
          <div className="bg-[#F7F8F2] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#E4E7D6]">
            <h3 className="text-[22px] font-lora font-semibold text-[#4E4E4E] mb-3 tracking-wide">Pesan Terkirim!</h3>
            <div className="w-10 h-[2px] bg-[#4E4E4E] mx-auto mb-4 opacity-60" />
            <p className="text-[16px] text-[#4E4E4E] font-lora leading-relaxed mb-6">
              Terima kasih atas doa dan ucapan baik Anda. Kami sangat menghargai pesan yang telah diberikan.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#4E4E4E] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide font-sweetsans"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

