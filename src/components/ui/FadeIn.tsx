// // components/FadeIn.tsx
// "use client";
// import { motion } from "framer-motion";

// export default function FadeIn({
//   children,
//   delay = 0,
//   duration = 1.2,
//   className = "",
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   duration?: number;
//   className?: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.98 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration, delay, ease: "easeInOut" }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({
  children,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(12px)",
        transition: `
          opacity 1.2s ease-out ${delay}s,
          transform 1.2s ease-out ${delay}s
        `,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}