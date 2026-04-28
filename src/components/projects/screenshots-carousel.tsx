"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScreenshotsCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-2xl border border-[#dcdcdc] bg-white">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Project screenshot ${index + 1}`}
            className="h-64 w-full bg-slate-100 object-contain p-2 sm:h-80"
            initial={{ opacity: 0.4, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>
      </div>
      <div className="flex gap-2">
        {images.map((item, i) => (
          <button
            key={item}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2.5 flex-1 rounded-full transition ${index === i ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400"}`}
            aria-label={`Show screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
