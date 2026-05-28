import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_2_ok38cd.webp",
  "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_7_f87bdr.webp",
  "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_3_wyj3bi.webp"
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="beranda" className="relative w-full min-h-[100svh] flex flex-col">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            idx === currentIdx ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
              animation: idx === currentIdx ? "kenburns 8s ease-out forwards" : "none"
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-[#0D0D14]/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left pt-8 md:pt-16 w-full flex flex-col flex-1 justify-between">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(200,169,110,0.12)] backdrop-blur-sm border border-[rgba(200,169,110,0.40)] rounded-full px-5 py-2 mb-8">
            <span className="text-[#C8A96E] text-xs md:text-sm font-heading tracking-[0.15em] uppercase">
              ✦ Arsitek &amp; Kontraktor Terpercaya di Bali ✦
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-[#F0EBE0] leading-[1.1] tracking-[-0.02em] mb-6">
            Membangun Visi,<br />
            <span className="text-[#C8A96E] italic">Melampaui Ekspektasi.</span>
          </h1>

          <p className="text-[#F0EBE0]/80 text-lg md:text-xl font-light max-w-[580px] mb-10 leading-relaxed">
            Kami menghadirkan solusi arsitektur dan konstruksi kelas atas yang mencerminkan keindahan, ketahanan, dan karakter unik setiap klien.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("portofolio")}
              className="bg-[#C8A96E] hover:bg-[#E2C98A] text-[#0D0D14] font-heading font-semibold uppercase tracking-[0.08em] px-8 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[0_4px_24px_rgba(200,169,110,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Lihat Portofolio
            </button>
            <button
              onClick={() => scrollTo("kontak")}
              className="border border-[#C8A96E] text-[#C8A96E] hover:bg-[rgba(200,169,110,0.12)] font-heading font-semibold uppercase tracking-[0.08em] px-8 py-4 rounded-full text-sm transition-all duration-300"
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>

        <div className="mb-6 md:mb-10">
          <div className="bg-[rgba(13,13,20,0.60)] backdrop-blur-xl border border-[rgba(200,169,110,0.25)] rounded-2xl shadow-2xl py-3 md:py-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-3 md:gap-4">
              <div className="text-center">
                <span className="block font-serif text-xl sm:text-2xl md:text-3xl text-[#C8A96E] mb-0.5 leading-none">10+</span>
                <span className="font-heading text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.15em] text-[#F0EBE0]/70">
                  Tahun Pengalaman
                </span>
              </div>

              <div className="w-px h-5 bg-[rgba(200,169,110,0.25)] hidden md:block" />

              <div className="text-center">
                <span className="block font-serif text-xl sm:text-2xl md:text-3xl text-[#C8A96E] mb-0.5 leading-none">100+</span>
                <span className="font-heading text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.15em] text-[#F0EBE0]/70">
                  Proyek Selesai
                </span>
              </div>

              <div className="w-px h-5 bg-[rgba(200,169,110,0.25)] hidden md:block" />

              <div className="text-center">
                <span className="block font-serif text-xl sm:text-2xl md:text-3xl text-[#C8A96E] mb-0.5 leading-none">50+</span>
                <span className="font-heading text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.15em] text-[#F0EBE0]/70">
                  Klien Puas
                </span>
              </div>
          </div>
          <button onClick={() => scrollTo("tentang")} className="w-7 h-7 opacity-60" style={{ color: "#C8A96E" }}>
            <ChevronDown className="w-7 h-7" />
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}} />
    </section>
  );
}
