import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "CV Harta Dwi Jaya mengubah lahan kosong kami menjadi villa yang melampaui semua ekspektasi. Prosesnya profesional, komunikasinya jelas, dan hasilnya sungguh luar biasa.",
    name: "Budi Santoso",
    role: "Villa Owner",
    city: "Seminyak, Bali",
    initials: "BS"
  },
  {
    quote: "Tim mereka sangat detail dan sabar dalam menjelaskan setiap tahapan. Proyek renovasi rumah kami selesai tepat waktu dan sesuai budget. Sangat direkomendasikan!",
    name: "Dewi Rahayu",
    role: "Homeowner",
    city: "Denpasar, Bali",
    initials: "DR"
  },
  {
    quote: "Desain arsitekturnya benar-benar mencerminkan jiwa Bali namun tetap modern dan fungsional. Banyak tamu villa kami yang memuji desainnya — semua berkat Harta Dwi Jaya.",
    name: "Michael Tan",
    role: "Property Investor",
    city: "Canggu, Bali",
    initials: "MT"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section id="testimoni" className="py-28 bg-[#F5F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex justify-center gap-1 text-[#C8A96E] text-2xl mb-5" aria-hidden="true">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p className="text-[#A08050] font-heading uppercase tracking-[0.3em] text-xs mb-4 font-bold">
            — TESTIMONI KLIEN —
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A2E] leading-[1.15] tracking-[-0.02em]">
            Kepercayaan Mereka adalah<br />Kebanggaan Kami
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="bg-white border border-[rgba(200,169,110,0.20)] rounded-2xl p-10 md:p-14 relative shadow-[0_4px_32px_rgba(13,13,20,0.06)]">
                    {/* Decorative quote mark */}
                    <span className="absolute top-6 left-8 font-serif text-[5rem] leading-none text-[#C8A96E]/20 select-none">
                      &ldquo;
                    </span>

                    <div className="flex justify-center gap-1 text-[#C8A96E] mb-6 text-sm">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>

                    <p className="text-lg md:text-xl font-serif italic text-[#1A1A2E]/80 mb-8 leading-[1.75] text-center">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#C8A96E] flex items-center justify-center text-white font-heading font-bold text-sm mb-3 shadow-[0_4px_16px_rgba(200,169,110,0.35)]">
                        {t.initials}
                      </div>
                      <h4 className="font-heading font-bold text-[#1A1A2E] text-base">{t.name}</h4>
                      <p className="text-[#A08050] font-sans text-xs mt-0.5">{t.role}</p>
                      <p className="text-[#6B6577] font-sans text-xs mt-0.5">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-[#C8A96E] text-[#C8A96E] flex items-center justify-center hover:bg-[#C8A96E] hover:text-white transition-all duration-200"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot pagination */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === selectedIndex
                      ? "bg-[#C8A96E] w-6"
                      : "bg-[#C8A96E]/30 w-2 hover:bg-[#C8A96E]/60"
                  }`}
                  aria-label={`Ke testimoni ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-[#C8A96E] text-[#C8A96E] flex items-center justify-center hover:bg-[#C8A96E] hover:text-white transition-all duration-200"
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
