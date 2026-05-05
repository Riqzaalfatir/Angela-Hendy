"use client";

import { useState } from "react"; // ← ini penting
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Venue from "@/components/sections/Venue";
import Rsvp from "@/components/sections/Rsvp";
import Wishes from "@/components/sections/Wishes";
import WeddingGift from "@/components/sections/WeddingGift"; // ← import


export default function Home() {
  const [openWishes, setOpenWishes] = useState(false); // ← INI YANG KURANG
    const [openGift, setOpenGift] = useState(false); // ← tambah


  return (
    <div
      style={{
        backgroundImage: "url('/images/Hero/Default.webp')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Hero />
      <Countdown />
      <Venue />
      <Rsvp onOpenWishes={() => setOpenWishes(true)} />

       <Wishes
        open={openWishes}
        onClose={() => setOpenWishes(false)}
        onOpenGift={() => {           // ← tambah
          setOpenWishes(false);       // tutup wishes dulu
          setOpenGift(true);          // buka gift
        }}
      />

       <WeddingGift                    // ← tambah
        open={openGift}
        onClose={() => setOpenGift(false)}
      />
    </div>
  );
}

// import Hero from "@/components/sections/Hero";
// import Countdown from "@/components/sections/Countdown";
// import Venue from "@/components/sections/Venue";
// import Rsvp from "@/components/sections/Rsvp";
// import Wishes from "@/components/sections/Wishes";

// export default function Home() {
//   return (
//     <div
//       style={{
//         backgroundImage: "url('/images/Hero/Default.webp')",
//         backgroundSize: "cover",
//         backgroundAttachment: "fixed",
//         backgroundPosition: "center",
//       }}
//     >
//       <Hero />
//       <Countdown />
//       <Venue />
//       <Rsvp onOpenWishes={() => setOpenWishes(true)} />

//       <Wishes open={openWishes} onClose={() => setOpenWishes(false)} />
//     </div>
//   );
// }