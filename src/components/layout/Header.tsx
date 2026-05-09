"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onOpenWishes: () => void;
  onOpenGift: () => void;
  onCloseAll: () => void; // ← tambah
};

const Header = ({
  onOpenWishes,
  onOpenGift,
  onCloseAll,
}: Props): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const linkMenu = [
    { name: "HOME", link: "#hero", action: null },
    { name: "PROFILE", link: "#profile", action: null },
    { name: "VENUE", link: "#venue", action: null },
    { name: "RSVP", link: "#rsvp", action: null },
    { name: "YOUR WISHES", link: null, action: onOpenWishes },
    { name: "WEDDING GIFT", link: null, action: onOpenGift },
  ];

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10, skewX: -10 },
    show: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-[999] px-4 py-3 lg:left-auto lg:right-0 lg:w-[435px] lg:px-5 lg:py-4"
  style={{ willChange: "transform", transform: "translateZ(0)" }}
    >
      {/* HAMBURGER */}
      {!open && (
<motion.button
  onClick={() => setOpen(true)}
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ 
    opacity: open ? 0 : 1, 
    scale: open ? 0.95 : 1,
    pointerEvents: open ? "none" : "auto"  // biar ga bisa diklik waktu hidden
  }}
  transition={{ duration: 1.8, ease: "easeInOut" }}
  whileTap={{ scale: 0.92 }}
  whileHover={{ scale: 1.05 }}
  className="text-[#C3C3C3] text-[28px] "
  style={{ pointerEvents: open ? "none" : "auto" }}
>
  <FiMenu />
</motion.button>
      )}

      {/* DROPDOWN */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3 },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ originX: 0, originY: 0 }}
            className="absolute top-[12px] left-[22px]  bg-[#7B7B7B]/70 py-4 px-5 text-white w-[255px]"
          >
            {/* CLOSE X */}
            <motion.button
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-[-12px] left-[6px]"
            >
              <p className="text-[32px] text-white font-ibm font-light">
                x
              </p>
            </motion.button>

            {/* MENU */}
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="pt-3.5 pl-3 space-y-1.5  text-[12px] font-noto  text-white font-medium flex flex-col"
            >
              {linkMenu.map((menu) => (
                <motion.a
                  key={menu.name}
                  href={menu.link ?? undefined}
                  variants={itemVariants}
                  onClick={() => {
                    if (menu.action) {
                      menu.action();
                    } else {
                      onCloseAll();
                      setTimeout(() => {
                        const el = document.querySelector(menu.link!);
                        el?.scrollIntoView({ behavior: "smooth" });
                      }, 300); // kasih jeda 300ms biar modal keburu nutup dulu
                    }
                    setTimeout(() => setOpen(false), 200);
                  }}
                  className="group relative flex items-center cursor-pointer"
                >
                  <span className="absolute left-0 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
                    →
                  </span>
                  <span className="transition-all duration-300 ease-out group-hover:translate-x-[18px]">
                    {menu.name}
                  </span>
                </motion.a>
              ))}
            </motion.ul>

            {/* TEXT BAWAH */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              className="pt-[19px]  pl-3 text-[8px] font-noto font-light pb-2 tracking-wide text-white/90"
            >
              Select a section above to continue
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
