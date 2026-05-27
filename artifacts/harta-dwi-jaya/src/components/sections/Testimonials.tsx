import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "CV Harta Dwi Jaya mengubah lahan kosong kami menjadi villa yang melampaui semua ekspektasi. Prosesnya profesional, komunikasinya jelas, dan hasilnya sungguh luar biasa.",
    name: "Budi Santoso",
    role: "Villa Owner, Seminyak",
    initials: "BS"
  },
  {
    quote: "Tim mereka sangat detail dan sabar dalam menjelaskan setiap tahapan. Proyek renovasi rumah kami selesai tepat waktu dan sesuai budget. Sangat direkomendasikan!",
    name: "Dewi Rahayu",
    role: "Homeowner, Denpasar",
    initials: "DR"
  },
  {
    quote: "Desain arsitekturnya benar-benar mencerminkan jiwa Bali namun tetap modern dan fungsional. Banyak tamu villa kami yang memuji desainnya — semua berkat Harta Dwi Jaya.",
    name: "Michael Tan",
    role: "Property Investor, Canggu",
    initials: "MT"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimoni" className="py-24 bg-light-bg text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center gap-1 text-gold mb-4">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p className="text-gold-dark font-heading uppercase tracking-[0.2em] text-sm mb-4 font-bold">
            — Testimoni Klien —
          </p>
          <h2 className="text-4xl md:text-5xl font-serif">
            Kepercayaan Mereka adalah<br />Kebanggaan Kami
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 pl-4 pr-4">
                  <div className="bg-white border border-gold/30 rounded-lg p-10 md:p-14 relative text-center shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                    <span className="absolute top-6 left-8 text-6xl font-serif text-gold/20 leading-none">"</span>
                    
                    <div className="flex justify-center gap-1 text-gold mb-6 text-sm">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    
                    <p className="text-lg md:text-xl font-serif italic text-foreground/80 mb-8 leading-relaxed">
                      "{t.quote}"
                    </p>
                    
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold font-heading font-bold bg-gold/5 mb-3">
                        {t.initials}
                      </div>
                      <h4 className="font-heading font-semibold text-foreground">{t.name}</h4>
                      <p className="text-sm font-sans text-foreground/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
