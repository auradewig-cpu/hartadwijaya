import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_2_ok38cd.webp", label: "Hunian Modern", tall: true },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_6_sp5xs8.webp", label: "Detail & Finishing", tall: false },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_7_f87bdr.webp", label: "Arsitektur Tropis", tall: false },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_3_wyj3bi.webp", label: "Konstruksi Struktur", tall: false },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/2021-04-14_khhods.webp", label: "In Progress 2021", tall: true },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_5_r0xoai.webp", label: "Fasad Selesai", tall: false },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_1_sx4io4.webp", label: "Residensial", tall: false },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/2021-04-14_4_kyecgd.webp", label: "Proyek 2021", tall: false },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/2021-04-17_ej1spq.webp", label: "Konstruksi Aktif", tall: false },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906433/2021-04-14_3_ou30j6.webp", label: "Tampak Bangunan", tall: false },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906433/unnamed_4_nt2jsn.webp", label: "Detail Material", tall: true },
  { src: "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906433/2021-04-14_2_nbbc2l.webp", label: "Proyek Selesai", tall: false }
];

export default function Portfolio() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIdx((i) => (i === null ? null : (i + 1) % photos.length));
  };

  return (
    <section id="portofolio" className="py-28 bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#A08050] font-heading uppercase tracking-[0.3em] text-xs mb-4 font-bold">
            — PORTOFOLIO —
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A2E] leading-[1.15] tracking-[-0.02em]">
            Karya Kami Berbicara<br />Lebih Keras dari Kata-Kata
          </h2>
          <p className="mt-4 text-[#6B6577] font-sans font-light text-base max-w-xl mx-auto">
            Setiap proyek adalah cerminan komitmen kami terhadap kualitas, keindahan, dan ketepatan waktu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[220px]">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.04, duration: 0.5 }}
              className={`relative overflow-hidden group cursor-pointer rounded-xl ${item.tall ? "row-span-2" : "row-span-1"}`}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Buka foto ${item.label}`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
            >
              <img
                src={item.src}
                alt={`${item.label} — CV Harta Dwi Jaya Bali`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0D0D14]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <ZoomIn className="text-[#C8A96E] w-8 h-8" />
                <span className="text-white font-heading font-semibold uppercase tracking-wider text-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#0D0D14]/96 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10 p-2"
              onClick={closeLightbox}
              aria-label="Tutup lightbox"
            >
              <X className="w-9 h-9" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-heading tracking-widest">
              {lightboxIdx + 1} / {photos.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 text-white/60 hover:text-[#C8A96E] transition-colors z-10 p-3 rounded-full hover:bg-white/10 border border-white/10"
              onClick={prev}
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.3 }}
              src={photos[lightboxIdx].src}
              alt={photos[lightboxIdx].label}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Label */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm font-heading uppercase tracking-widest">
              {photos[lightboxIdx].label}
            </div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 text-white/60 hover:text-[#C8A96E] transition-colors z-10 p-3 rounded-full hover:bg-white/10 border border-white/10"
              onClick={next}
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
