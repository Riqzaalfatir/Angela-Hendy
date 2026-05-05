"use client";

import React, { useEffect } from "react";

// ─── Icon Components ──────────────────────────────────────────────────────────

const IconCheck: React.FC = () => (
  <img
    src="/images/Popup/TandaCeklisBg.svg"
    alt="check"
    className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
  />
);

const IconWarning: React.FC = () => (
  <img
    src="/images/Popup/TandaSeru.svg"
    alt="warning"
    className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
  />
);

const IconQuestion: React.FC = () => (
  <img
    src="/images/Popup/TandaTanya.svg"
    alt="question"
    className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
  />
);

// ─── Types ────────────────────────────────────────────────────────────────────

type IconKey = "✓" | "!" | "?";

type ButtonVariant = "outline" | "solid" | "whatsapp";
type ButtonAction = "close" | "wa" | "confirm";

interface ButtonConfig {
  label: string;
  variant: ButtonVariant;
  action: ButtonAction;
}

interface NotifConfigItem {
  icon: IconKey;
  title: string;
  messageid: string;
  messageen: string;
  buttons: ButtonConfig[];
}

export type NotifType =
  | "rsvp_closed"
  | "private_link"
  | "rsvp_confirmed_hadir"
  | "incomplete_rsvp"
  | "session_required"
  | "confirm_rsvp"
  | "rsvp_unavailable"
  | "rsvp_confirmed_tidak_hadir";

// ─── Icon Map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<IconKey, React.ReactElement> = {
  "✓": <IconCheck />,
  "!": <IconWarning />,
  "?": <IconQuestion />,
};

// ─── Config ───────────────────────────────────────────────────────────────────

export const NOTIF_CONFIG: Record<NotifType, NotifConfigItem> = {
  rsvp_closed: {
    icon: "!",
    title: "RSVP CLOSED",
    messageid:
      "Reservasi telah ditutup, terima kasih atas perhatian Anda. Jika ada pertanyaan, tim kami siap membantu.",
    messageen:
      "Reservations are now closed. Thank you for your attention. If you need any assistance, our team is here to help.",
    buttons: [
      { label: "Close", variant: "outline", action: "close" },
      { label: "Chat with Our Team", variant: "whatsapp", action: "wa" },
    ],
  },
  private_link: {
    icon: "!",
    title: "INVITATION ONLY",
    messageid:
      "Undangan ini diperuntukkan bagi tamu yang terdaftar; mohon gunakan tautan undangan yang sesuai.",
    messageen:
      "This invitation is intended for registered guests, please use the assigned invitation link.",
    buttons: [
      { label: "Chat with Our Team", variant: "whatsapp", action: "wa" },
    ],
  },
  rsvp_confirmed_hadir: {
    icon: "✓",
    title: "RSVP CONFIRMED",
    messageid:
      "Konfirmasi kehadiran Anda telah kami terima. Terima kasih atas respons Anda, kami menghargai partisipasi Anda.",
    messageen:
      "Your attendance has been confirmed, we look forward to welcoming you. Thank you for your confirmation.",
    buttons: [{ label: "Close", variant: "outline", action: "close" }],
  },
  incomplete_rsvp: {
    icon: "!",
    title: "INCOMPLETE RSVP",
    messageid:
      "Mohon lengkapi data RSVP sebelum melanjutkan. Beberapa informasi masih belum terisi.",
    messageen:
      "Please complete your RSVP details before proceeding. Some required information is still missing.",
    buttons: [{ label: "Close", variant: "outline", action: "close" }],
  },
  session_required: {
    icon: "?",
    title: "SESSION REQUIRED",
    messageid:
      "Pilihan sesi acara masih belum ditentukan. Mohon pilih minimal satu sesi yang akan dihadiri.",
    messageen:
      "Some session selections are still missing. Please select at least one session to attend.",
    buttons: [{ label: "Close", variant: "outline", action: "close" }],
  },
  confirm_rsvp: {
    icon: "?",
    title: "CONFIRM RSVP",
    messageid:
      "Apakah Anda yakin dengan pilihan RSVP ini? Silakan lanjutkan untuk mengkonfirmasi pilihan Anda.",
    messageen:
      "Are you sure about your RSVP selection? Please proceed to submit your confirmation.",
    buttons: [
      { label: "Close", variant: "outline", action: "close" },
      { label: "Confirm", variant: "solid", action: "confirm" },
    ],
  },
  rsvp_unavailable: {
    icon: "!",
    title: "RSVP UNAVAILABLE",
    messageid:
      "Mohon maaf, kuota tamu untuk sesi ini telah terpenuhi. Silakan hubungi tim kami untuk informasi lebih lanjut.",
    messageen:
      "We apologize, guest capacity for this session has been reached. Please contact our team for further assistance.",
    buttons: [
      { label: "Close", variant: "outline", action: "close" },
      { label: "Chat with Our Team", variant: "whatsapp", action: "wa" },
    ],
  },
  rsvp_confirmed_tidak_hadir: {
    icon: "✓",
    title: "RSVP CONFIRMED",
    messageid:
      "Konfirmasi ketidakhadiran Anda telah kami terima. Terima kasih atas konfirmasi Anda.",
    messageen:
      "Your response has been received. Thank you for your confirmation. We appreciate your response.",
    buttons: [{ label: "Close", variant: "outline", action: "close" }],
  },
};

// ─── WA Icon ──────────────────────────────────────────────────────────────────

const WaIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────

interface NotifModalProps {
  type: NotifType | null;
  onClose: () => void;
  onConfirm?: () => void;
  waNumber?: string;
}

const NotifModal: React.FC<NotifModalProps> = ({
  type,
  onClose,
  onConfirm,
  waNumber = "6281234567890",
}) => {
    useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  
  const config = type ? NOTIF_CONFIG[type] : null;
  if (!type || !config) return null;

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };



  const handleAction = (action: ButtonAction) => {
    if (action === "close") onClose();
    else if (action === "wa")
      window.open(`https://wa.me/${waNumber}`, "_blank");
    else if (action === "confirm") onConfirm?.();
  };

  return (
    // BACKDROP
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#E9E9E9]/60 backdrop-blur-sm px-6"
      onClick={handleBackdrop}
    >
      {/* CARD */}
      <div className="relative bg-white rounded-lg lg:rounded-2xl shadow-xl flex flex-col items-center text-center animate-modalIn overflow-hidden w-[322px] h-[360px] lg:w-[485px] lg:h-[543px]">
        {/* CONTENT */}
        <div className="flex-1 flex flex-col items-center justify-start pt-[37px] lg:pt-[57px] px-7 lg:px-10 w-full">
          {/* ICON */}
          <div className="mb-3 flex items-center justify-center">
            {ICON_MAP[config.icon]}
          </div>

          {/* JUDUL */}
          <h3 className="uppercase tracking-[0.12em] mb-4 lg:mb-6 text-[16px] lg:text-[24px] font-extrabold text-[#605F5E] font-noto">
            {config.title}
          </h3>

          {/* PESAN */}
          <p className="text-[12px] lg:text-[18px] text-[#605F5E] font-medium mb-3 lg:mb-6 font-noto">
            {config.messageid}
          </p>

          {/* PESAN EN */}
          <p className="text-[12px] lg:text-[18px] text-[#605F5E] font-medium mb-2 lg:mb-4 font-noto">
            {config.messageen}
          </p>
        </div>

        {/* CONTENT BAWAH */}

        {/* BUTTON */}
        <div className="w-full flex flex-col h-[52px] lg:h-[78px]">
          <div className="w-full h-[1.51px] bg-[#605F5E]/30" />
          <div className="flex flex-row flex-1 w-full">
            {config.buttons.map((btn, i) => (
              <button
                key={i}
                onClick={() => handleAction(btn.action)}
                className={`
                  flex-1 flex items-center justify-center gap-1.5
                  transition-colors duration-150
                  text-[14px] lg:text-[21px] text-[#605F5E]
                  font-noto
                  ${btn.variant === "outline" ? "font-normal" : "font-bold"}
                  ${i < config.buttons.length - 1 ? "border-r border-[#E0E0D8]" : ""}
                `}
              >
                {btn.variant === "whatsapp" && <WaIcon />}
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.93) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modalIn {
          animation: modalIn 0.22s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default NotifModal;