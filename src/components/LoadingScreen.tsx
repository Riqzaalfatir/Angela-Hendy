"use client";

type Props = {
  progress: number;
};

export default function LoadingScreen({ progress }: Props) {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#670C0F" }}>

      {/* Nama */}
      <p style={{ fontFamily: "Cylburn, cursive", fontSize: 52, color: "white", lineHeight: "56px" }}>
        Hendy
      </p>
      <p style={{ fontFamily: "Cylburn, cursive", fontSize: 36, color: "white", lineHeight: "36px" }}>
        &amp;
      </p>
      <p style={{ fontFamily: "Cylburn, cursive", fontSize: 52, color: "white", lineHeight: "56px" }}>
        Angele
      </p>

      {/* Tanggal */}
      <p style={{ fontFamily: "EB Garamond, serif", fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 16 }}>
        Saturday, 23 May 2026
      </p>

      {/* Progress bar */}
      <div className="mt-10 rounded-full overflow-hidden"
        style={{ width: 180, height: 2, backgroundColor: "rgba(255,255,255,0.2)" }}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%`, backgroundColor: "white" }}
        />
      </div>

      {/* Persentase */}
      <p style={{ fontFamily: "EB Garamond, serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>
        {progress}%
      </p>
    </div>
  );
}