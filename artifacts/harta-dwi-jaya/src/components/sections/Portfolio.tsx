import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portofolio" className="py-24 bg-light-bg text-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-dark font-heading uppercase tracking-[0.2em] text-sm mb-4 font-bold">
            — Portofolio —
          </p>
          <h2 className="text-4xl md:text-5xl font-serif">
            Karya Kami Berbicara Lebih<br />Keras dari Kata-Kata
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`relative overflow-hidden group cursor-pointer ${item.tall ? 'row-span-2 aspect-[3/4]' : 'aspect-square'}`}
              onClick={() => setSelectedImage(item.src)}
            >
              <img 
                src={item.src} 
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="text-gold mb-3 w-8 h-8" />
                <span className="text-white font-heading font-semibold uppercase tracking-wider text-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-bg/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full screen portfolio"
              className="max-w-full max-h-full object-contain border border-dark-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
