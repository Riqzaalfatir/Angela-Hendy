// "use client";

// import { useState } from "react";
// import { usePreloader } from "@/hooks/usePreloader";
// import LoadingScreen from "@/components/LoadingScreen";
// import Header from "@/components/layout/Header";
// import Hero from "@/components/sections/Hero";
// import Countdown from "@/components/sections/Countdown";
// import Venue from "@/components/sections/Venue";
// import Rsvp from "@/components/sections/Rsvp";
// import Wishes from "@/components/sections/Wishes";
// import WeddingGift from "@/components/sections/WeddingGift";
// import Opening from "@/components/popup/Opening";
// import DesktopCover from "@/components/layout/DekstopCover";

// export default function Home() {
//   const [start, setStart] = useState(false);
//   const [openWishes, setOpenWishes] = useState(false);
//   const [openGift, setOpenGift] = useState(false);
//   const { loaded, progress } = usePreloader();

//   // Preload dulu sebelum apapun tampil
//   if (!loaded) return <LoadingScreen progress={progress} />;

//  return (
//   <>
//     {!start && <Opening setStart={setStart} namaTamu="Sela" />}

//     {/* Pindah ke luar desktop-layout */}
//     <Wishes
//       open={openWishes}
//       onClose={() => setOpenWishes(false)}
//       onOpenGift={() => { setOpenWishes(false); setOpenGift(true); }}
//     />
//     <WeddingGift
//       open={openGift}
//       onClose={() => setOpenGift(false)}
//       onOpenWishes={() => { setOpenGift(false); setOpenWishes(true); }}
//     />

//     <div className="desktop-layout">
//       <aside className="cover-panel">
//         <DesktopCover />
//       </aside>
//       <main
//         className="sections-panel"
//         style={{
//           backgroundImage: "url('/images/Hero/Default.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {start && (
//           <>
//             <Header
//               onOpenWishes={() => { setOpenGift(false); setOpenWishes(true); }}
//               onOpenGift={() => { setOpenWishes(false); setOpenGift(true); }}
//               onCloseAll={() => { setOpenWishes(false); setOpenGift(false); }}
//             />
//             <Hero />
//             <Countdown />
//             <Venue />
//             <Rsvp onOpenWishes={() => { setOpenGift(false); setOpenWishes(true); }} />
//           </>
//         )}
//       </main>
//     </div>
//   </>
// );
// }
"use client";

import { useState } from "react";
import { usePreloader } from "@/hooks/usePreloader";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Venue from "@/components/sections/Venue";
import Rsvp from "@/components/sections/Rsvp";
import Wishes from "@/components/sections/Wishes";
import WeddingGift from "@/components/sections/WeddingGift";
import Opening from "@/components/popup/Opening";
import DesktopCover from "@/components/layout/DekstopCover";

export default function Home() {
  const [start, setStart] = useState(false);
  const [openWishes, setOpenWishes] = useState(false);
  const [openGift, setOpenGift] = useState(false);
  const { loaded, progress } = usePreloader();

  if (!loaded) return <LoadingScreen progress={progress} />;

  return (
    <>
      {!start && <Opening setStart={setStart} namaTamu="Sela" />}

      <div className="desktop-layout">
        <aside className="cover-panel">
          <DesktopCover />
        </aside>
        <main
          className="sections-panel"
          style={{
            backgroundImage: "url('/images/Hero/Default.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Wishes & Gift di dalam sections-panel agar overlay positioning benar */}
          <Wishes
            open={openWishes}
            onClose={() => setOpenWishes(false)}
            onOpenGift={() => { setOpenWishes(false); setOpenGift(true); }}
          />
          <WeddingGift
            open={openGift}
            onClose={() => setOpenGift(false)}
            onOpenWishes={() => { setOpenGift(false); setOpenWishes(true); }}
          />

          {start && (
            <>
              <Header
                onOpenWishes={() => { setOpenGift(false); setOpenWishes(true); }}
                onOpenGift={() => { setOpenWishes(false); setOpenGift(true); }}
                onCloseAll={() => { setOpenWishes(false); setOpenGift(false); }}
              />
              <Hero />
              <Countdown />
              <Venue />
              <Rsvp onOpenWishes={() => { setOpenGift(false); setOpenWishes(true); }} />
            </>
          )}
        </main>
      </div>
    </>
  );
}