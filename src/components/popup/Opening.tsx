  "use client";

  import Image from "next/image";

  type Props = {
    setStart: (value: boolean) => void;
    namaTamu: string;
  };

  export default function Opening({ setStart, namaTamu }: Props) {
    return (
      <div id="opening"
        className="fixed inset-0 z-[9999] flex items-center justify-center leading-none"
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
        {/* Desktop BG */}
  {/* Desktop BG */}
  <div className="absolute inset-0 hidden lg:block bg-[#6B0E0E]"> {/* ← warna fallback */}
    <Image
      src="/images/Popup/BgDekstopHD.webp"
      alt=""
      fill
      className="object-cover"
      priority
    />
  </div>

        {/* ── ORNAMEN — mobile only (lg:hidden) ── */}
        <div className="lg:hidden">
          <Image src="/images/Wishes/BungaAtas.svg" alt="" width={390} height={300}
            className="absolute top-0 left-0 w-full pointer-events-none z-0" />
          <Image src="/images/Wishes/DaunAtas.webp" alt="" width={390} height={300}
            className="absolute top-0 left-0 w-full pointer-events-none z-10" />
          <Image src="/images/Wishes/DaunKanan.webp" alt="" width={390} height={300}
            className="absolute top-0 right-0 w-full pointer-events-none z-10" />
          <Image src="/images/Wishes/BungaKanan.svg" alt="" width={390} height={300}
            className="absolute bottom-0 right-0 w-full pointer-events-none z-0" />
          <Image src="/images/Wishes/BungaKiri.svg" alt="" width={390} height={300}
            className="absolute bottom-0 left-0 w-full pointer-events-none z-0" />
          <Image src="/images/Wishes/DaunBawah.webp" alt="" width={390} height={300}
            className="absolute bottom-0 left-0 w-full pointer-events-none z-10" />
        </div>



  {/* ── ORNAMEN DESKTOP ── */}
  {/* ── ORNAMEN DESKTOP ── */}
  <div className="hidden lg:block">
    <Image src="/images/Wishes/DaunAtas.webp" alt="" width={390} height={300}
      className="absolute top-0 left-0 w-[45%] pointer-events-none z-10" />
    <Image src="/images/Wishes/DaunBawah.webp" alt="" width={390} height={300}
      className="absolute bottom-0 left-40 w-[25%] pointer-events-none z-10" />
  </div>

        {/* ── CONTENT ── */}
        <div className="relative z-20 text-center text-white px-6">
          <p className="font-garamond text-[14px] lg:text-[20px]">Dear Mr. /Mrs. / Ms.</p>
          <h2 className="font-cylburn text-[46px] lg:text-[64px] mt-[16px] lg:mt-[34px]">{namaTamu}</h2>
          <p className="font-garamond text-[14px] lg:text-[20px] mt-[2px] lg:mt-[10px] leading-7">
            We sincerely apologize for<br />
            any misspelling of names or titles.
          </p>
          <h2 className="font-cylburn text-[32px] lg:text-[48px] mt-[28px] lg:mt-[38px] ">you've got mail!</h2>

          {/* <div className="relative mb-6 mx-auto lg:w-[414px] lg:h-[336px] lg:hidden" style={{ width: 243, height: 198 }}>
            <Image
              src="/images/Popup/AmplopOpening.svg"
              alt="Amplop"
              fill
              className="object-contain"
              priority
            />
          </div> */}

          <div className="relative mx-auto  h-[198px] w-[243px] lg:w-[414px] lg:h-[336px] mt-[10px] lg:mt-[0px]" >
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
            className="font-cylburn text-[42px] lg:text-[48px] text-white hover:text-[#F0E8D9] transition cursor-pointer leading-none"

          >
            Click to Open
          </a>
        </div>
      </div>
    );
  }