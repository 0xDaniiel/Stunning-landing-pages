"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function GradientOrb() {
  const ref = useRef<HTMLDivElement>(null);
  //   const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 80,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 80,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      //   onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-95 w-95] items-center justify-center perspective:1000px sm:h-110 sm:w-110"
    >
      {/* ambient glow behind everything */}
      <div className="absolute inset-0 rounded-full bg-violet-600/30 blur-[80px]" />

      <motion.div
        style={{ rotateX, rotateY }}
        animate={{ rotate: 360 }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
        }}
        className="relative h-65 w-65 transform-3d sm:h-75 sm:w-75"
      >
        {/* the sphere */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #d9c8ff 0%, #9b6bff 22%, #6d28d9 48%, #2e1065 78%, #150a30 100%)",
            boxShadow:
              "inset -20px -20px 60px rgba(0,0,0,0.6), inset 10px 10px 40px rgba(255,255,255,0.15), 0 0 90px rgba(139,92,246,0.45)",
          }}
        />
        {/* specular highlight */}
        <div className="absolute left-[18%] top-[14%] h-[22%] w-[22%] rounded-full bg-white/70 blur-md" />

        {/* orbit ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-9.5 rounded-full border border-violet-300/40"
          style={{ transform: "rotateX(72deg)" }}
        >
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-200 shadow-[0_0_12px_4px_rgba(196,181,253,0.8)]" />
        </motion.div>
      </motion.div>

      {/* floating micro-orbs */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-10 h-5 w-5 rounded-full bg-violet-400/80 blur-[1px]"
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute -right-2 bottom-14 h-3 w-3 rounded-full bg-violet-300/80 blur-[1px]"
      />
    </div>
  );
}
