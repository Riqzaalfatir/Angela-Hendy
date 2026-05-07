
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import WishesCard from "../popup/WishesCard";
import { dummyPesan } from "../data/wishes";

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

  const handleSubmit = () => {
    if (!nama || !pesan) return;
    setPesanList([{ id: Date.now(), nama, pesan }, ...pesanList]);
    setNama("");
    setPesan("");
    setShowPopup(true);
  };

  const s = (vw: number, px: number) => `min(${vw}vw, ${px}px)`;

  if (!open) return null;

  return (
    <>
      <div className="wishes-overlay" onClick={onClose}>

        <div
          className="w-full overflow-y-auto flex justify-center"
          style={{ height: "100dvh", touchAction: "pan-y" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            id="wishes"
            className="relative overflow-hidden overscroll-none max-w-[440px] md:max-w-full lg:max-w-[440px]"
            style={{
              width: "100%",
              height: "100dvh",
              backgroundImage: "url('/images/Hero/Default.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              overscrollBehavior: "none",
              touchAction: "pan-y",
            }}
          >
            {/* Ornamen bunga & daun atas */}
            <Image src="/images/Wishes/BungaAtas.svg" alt="" width={999} height={999} priority
              className="absolute z-0 w-full pointer-events-none top-0" />
            <Image src="/images/Wishes/DaunAtas.webp" alt="" width={999} height={999} priority
              className="absolute z-10 w-full pointer-events-none top-0" />
            <Image src="/images/Wishes/DaunKanan.webp" alt="" width={999} height={999} priority
              className="absolute z-10 w-full pointer-events-none top-0 right-0" />

            {/* Ornamen bunga & daun bawah */}
            <Image src="/images/Wishes/BungaKanan.svg" alt="" width={999} height={999} priority
              className="absolute z-0 w-full pointer-events-none bottom-0 right-0" />
            <Image src="/images/Wishes/BungaKiri.svg" alt="" width={999} height={999} priority
              className="absolute z-0 w-full pointer-events-none bottom-0 left-0" />
            <Image src="/images/Wishes/DaunBawah.webp" alt="" width={999} height={999} priority
              className="absolute z-10 w-full pointer-events-none bottom-0 left-0" />

            {/* Konten utama — flex column vertikal */}
            <div
              className="relative z-20 flex flex-col items-center mx-auto h-full"
              style={{
                width: s(72.82, 284),
                paddingTop: s(8, 90),
                paddingBottom: s(6, 23),
                gap: s(3, 12),
              }}
            >
              {/* Judul "Your Wishes" */}
              <h2
                className="font-cylburn text-[#F0E8D9] text-center flex-shrink-0"
                style={{ fontSize: s(14.36, 56) }}
              >
                Your Wishes
              </h2>

              {/* Input nama pengirim */}
              <input
                type="text"
                value={nama}
                placeholder="Desy (Tester)"
                onChange={(e) => setNama(e.target.value)}
                className="w-full flex-shrink-0 text-white font-garamond border bg-transparent border-white rounded-full outline-none placeholder:text-white/50 lg:mt-4"
                style={{
                  fontSize: s(3.08, 12),
                  height: s(8.46, 33),
                  paddingLeft: s(3.08, 12),
                  paddingRight: s(3.08, 12),
                }}
              />

              {/* Input pesan */}
              <textarea
                value={pesan}
                placeholder="Write your messages here..."
                onChange={(e) => setPesan(e.target.value)}
                className="w-full flex-shrink-0 text-white font-garamond italic border bg-transparent border-white rounded-xl outline-none resize-none placeholder:text-white/50"
                style={{
                  fontSize: s(3.08, 12),
                  height: s(15.38, 60),
                  paddingLeft: s(3.08, 12),
                  paddingRight: s(3.08, 12),
                  paddingTop: s(1.79, 7),
                }}
              />

              {/* Tombol kirim pesan */}
              <button
                onClick={handleSubmit}
                className="bg-white rounded-full font-garamond uppercase flex items-center justify-center text-[#670C0F] w-full font-semibold flex-shrink-0"
                style={{
                  height: s(8.46, 33),
                  fontSize: s(3.08, 12),
                }}
              >
                Send
              </button>

              {/* List pesan — tampilan list atau grid tergantung showAll */}
              <div
                className={`w-full flex-1 min-h-0 max-h-[263px] md:max-h-[523px] lg:max-h-[263px] overscroll-contain ${
                  !showAll ? "bg-white rounded-2xl overflow-y-auto" : ""
                }`}
              >
                <motion.div className="flex flex-col h-full">

                  {/* Mode list — tampilan default */}
                  {!showAll ? (
                    <motion.div
                      key="list"
                      className="h-full flex flex-col"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0" style={{ height: s(4.62, 18) }} />
                      <div
                        className="flex-1 overflow-y-auto"
                        style={{ padding: `0 ${s(3.33, 13)}` }}
                      >
                        {pesanList.slice(0, 20).map((item, index) => (
                          <div key={item.id}>
                            <p
                              className="text-[#670C0F] font-garamond font-bold"
                              style={{ fontSize: s(3.08, 12) }}
                            >
                              {item.nama}
                            </p>
                            <p
                              className="text-[#670C0F] font-garamond font-semibold"
                              style={{ fontSize: s(3.08, 12) }}
                            >
                              {item.pesan}
                            </p>
                            {index !== pesanList.slice(0, 8).length - 1 && (
                              <div
                                className="border-t border-[#670C0F]/80 border-[0.1px]"
                                style={{
                                  marginTop: s(1.79, 7),
                                  marginBottom: s(3.85, 15),
                                }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex-shrink-0" style={{ height: s(4.62, 18) }} />
                    </motion.div>

                  ) : (
                    // Mode grid — tampilan "View All"
                    <motion.div
                      key="grid"
                      className="flex-1 overflow-y-auto"
                      style={{ gap: s(3.08, 12) }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="grid grid-cols-2"
                        style={{ gap: s(3.08, 12) }}
                      >
                        {/* Tiap card muncul dengan delay bertahap */}
                        {pesanList.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              duration: 3.8,
                              delay: index * 0.2,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            onClick={() => setSelectedMessage(item)}
                            className="rounded-md shadow-md bg-white flex flex-col cursor-pointer"
                          >
                            <div
                              className="relative flex-1 flex flex-col justify-center"
                              style={{ padding: s(2.56, 10) }}
                            >
                              {/* Tanda kutip dekoratif */}
                              <p
                                className="absolute font-bold font-garamond text-[#670C0F]"
                                style={{
                                  top: s(0.51, 2),
                                  left: s(2.56, 10),
                                  fontSize: s(8.21, 32),
                                }}
                              >
                                "
                              </p>
                              <p
                                className="font-garamond text-[#670C0F] text-center line-clamp-4"
                                style={{
                                  fontSize: s(3.08, 12),
                                  marginTop: s(6.15, 24),
                                  marginBottom: s(2.05, 8),
                                }}
                              >
                                {item.pesan}
                              </p>
                            </div>
                            {/* Footer card — nama pengirim */}
                            <div
                              className="bg-[#670C0F] font-garamond flex items-center justify-center"
                              style={{
                                height: s(8.97, 35),
                                paddingLeft: s(3.08, 12),
                                paddingRight: s(3.08, 12),
                              }}
                            >
                              <p
                                className="text-white text-center line-clamp-1"
                                style={{ fontSize: s(3.33, 13) }}
                              >
                                {item.nama}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Tombol toggle View All / Back */}
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-white text-[#670C0F] rounded-full w-full font-garamond font-semibold flex items-center justify-center flex-shrink-0"
                style={{
                  height: s(8.46, 33),
                  fontSize: s(3.08, 12),
                  gap: s(1.79, 7),
                }}
              >
                <Image
                  src="/images/Wishes/Pesan.svg"
                  alt="Kirim"
                  width={22}
                  height={24}
                  style={{ width: s(4.62, 18), height: s(5.64, 22) }}
                />
                {showAll ? "BACK" : "VIEW ALL MESSAGES"}
              </button>

              {/* Popup detail pesan yang diklik (mode grid) */}
              <WishesCard
                data={selectedMessage}
                onClose={() => setSelectedMessage(null)}
              />

              {/* Link ke Wedding Gift */}
              <button
                onClick={onOpenGift}
                className="font-cylburn text-[#F0E8D9] text-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 pt-4"
                style={{ fontSize: s(8.21, 32) }}
              >
                Click to Wedding Gift
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup sukses kirim pesan */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              className="bg-[#F7F8F2] rounded-2xl text-center shadow-xl border border-[#E4E7D6]"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: s(6.15, 24),
                width: s(87.18, 340),
              }}
            >
              <h3
                className="font-garamond font-semibold text-[#7B2729] tracking-wide"
                style={{ fontSize: s(5.64, 22), marginBottom: s(3.08, 12) }}
              >
                Pesan Terkirim!
              </h3>
              {/* Garis dekoratif */}
              <div
                className="bg-[#7B2729] mx-auto opacity-60"
                style={{
                  width: s(10.26, 40),
                  height: s(0.51, 2),
                  marginBottom: s(4.1, 16),
                }}
              />
              <p
                className="text-[#7B2729] font-garamond leading-relaxed"
                style={{ fontSize: s(4.1, 16), marginBottom: s(6.15, 24) }}
              >
                Terima kasih atas doa dan ucapan baik Anda. Kami sangat menghargai
                pesan yang telah diberikan.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#7B2729] text-white rounded-full font-garamond transition-all"
                style={{
                  paddingLeft: s(6.15, 24),
                  paddingRight: s(6.15, 24),
                  paddingTop: s(2.05, 8),
                  paddingBottom: s(2.05, 8),
                  fontSize: s(3.59, 14),
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

