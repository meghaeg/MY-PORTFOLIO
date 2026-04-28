"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-2xl border border-[#dcdcdc] bg-white/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}
