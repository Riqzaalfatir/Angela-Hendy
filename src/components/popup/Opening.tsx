"use client";

import Image from "next/image";

export default function Opening({ setStart, namaTamu }) {
  return (
    <div
className="fixed inset-0 w-screen h-screen z-50 flex items-center justify-center"      style={{
        backgroundImage: "url('/images/Hero/Default.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🌿 ORNAMEN ATAS */}
      <Image
        src="/images/Wishes/BungaAtas.webp"
        alt=""
        fill
        className="object-none object-top pointer-events-none z-0"
      />
      <Image
        src="/images/Wishes/DaunAtas.webp"
        alt=""
        fill
        className="object-none object-top pointer-events-none z-10"
      />
      <Image
        src="/images/Wishes/DaunKanan.webp"
        alt=""
        fill
        className="object-none object-top pointer-events-none z-10"
      />

      {/* 🌿 ORNAMEN BAWAH */}
      <Image
        src="/images/Wishes/BungaKananBawah.webp"
        alt=""
        fill
        className="object-none object-bottom pointer-events-none z-0"
      />
      <Image
        src="/images/Wishes/BungaKiriBawah.webp"
        alt=""
        fill
        className="object-none object-bottom pointer-events-none z-0"
      />
      <Image
        src="/images/Wishes/DaunBawah.webp"
        alt=""
        fill
        className="object-none object-bottom pointer-events-none z-10"
      />

      {/* 🌸 CONTENT MINIMAL (boleh kamu edit nanti) */}
      <div className="relative z-20 text-center text-white px-6">
        <p className="font-garamond text-[14px] font-white">Dear Mr. /Mrs. / Ms.</p>
        <h2 className="font-cylburn text-[46px] font-white">Sela</h2>
        <p className="font-garamond text-[14px] font-white">
            We sincerely apologize for<br />
            any misspelling of names or titles.
</p>
        <h2 className="font-cylburn text-[32px] font-white">
           you’ve got mail!
</h2>

         <div
    className="relative mb-6"
    style={{
      width: 243,
      height: 198,
    }}
  >
    <Image
      src="/images/Popup/AmplopOpening.svg" // ← ganti sesuai file kamu
      alt="Amplop"
      fill
      className="object-contain"
      priority
    />
  </div>

        <a
          onClick={() => setStart(true)}
          className="font-cylburn text-[42px] text-white"
        >
          Click to Open
        </a>
      </div>
    </div>
  );
}