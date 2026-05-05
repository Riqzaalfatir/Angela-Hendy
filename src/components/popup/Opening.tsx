"use client";

import Image from "next/image";

export default function Opening({ setStart, namaTamu }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ position: 'fixed' }}
    >
      {/* ── BACKGROUND: mobile vs desktop ── */}
      {/* Mobile BG */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          backgroundImage: "url('/images/Hero/Default.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Desktop BG */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: "url('/images/Popup/BgDekstopHD.webp')", // ← ganti path
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />

      {/* ── ORNAMEN — mobile only (lg:hidden) ── */}
      <div className="lg:hidden">
        <Image src="/images/Wishes/BungaAtas.webp" alt="" width={390} height={300}
          className="absolute top-0 left-0 w-full pointer-events-none z-0" />
        <Image src="/images/Wishes/DaunAtas.webp" alt="" width={390} height={300}
          className="absolute top-0 left-0 w-full pointer-events-none z-10" />
        <Image src="/images/Wishes/DaunKanan.webp" alt="" width={390} height={300}
          className="absolute top-0 right-0 w-full pointer-events-none z-10" />
        <Image src="/images/Wishes/BungaKananBawah.webp" alt="" width={390} height={300}
          className="absolute bottom-0 right-0 w-full pointer-events-none z-0" />
        <Image src="/images/Wishes/BungaKiriBawah.webp" alt="" width={390} height={300}
          className="absolute bottom-0 left-0 w-full pointer-events-none z-0" />
        <Image src="/images/Wishes/DaunBawah.webp" alt="" width={390} height={300}
          className="absolute bottom-0 left-0 w-full pointer-events-none z-10" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-20 text-center text-white px-6">
        <p className="font-garamond text-[14px] lg:text-[20px]">Dear Mr. /Mrs. / Ms.</p>
        <h2 className="font-cylburn text-[46px] lg:text-[64px]">{namaTamu}</h2>
        <p className="font-garamond text-[14px] lg:text-[20px]">
          We sincerely apologize for<br />
          any misspelling of names or titles.
        </p>
        <h2 className="font-cylburn text-[32px] lg:text-[48px]">you've got mail!</h2>

        <div className="relative mb-6 mx-auto lg:w-[414px] lg:h-[336px] lg:hidden" style={{ width: 243, height: 198 }}>
          <Image
            src="/images/Popup/AmplopOpening.svg"
            alt="Amplop"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="relative mb-6 mx-auto hidden lg:block" style={{ width: 414, height: 336 }}>
          <Image
            src="/images/Popup/AmplopOpening.svg"
            alt="Amplop"
            fill
            className="object-contain"
            priority
          />
        </div>

        <a
          onClick={() => setStart(true)}
          className="font-cylburn text-[42px] lg:text-[48px] text-white cursor-pointer"
        >
          Click to Open
        </a>
      </div>
    </div>
  );
}