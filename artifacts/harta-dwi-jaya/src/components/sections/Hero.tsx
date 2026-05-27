import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_2_ok38cd.webp",
  "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_7_f87bdr.webp",
  "https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_3_wyj3bi.webp"
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="beranda" className="relative w-full h-[100svh] min-h-screen flex items-center overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/60 to-dark-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left pt-20">
        <div className="inline-block bg-dark-surface/50 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-1.5 mb-6">
          <span className="text-gold text-xs md:text-sm font-heading tracking-widest uppercase">
            ✦ Arsitek & Kontraktor Terpercaya di Bali ✦
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6">
          Membangun Visi,<br />
          <span className="text-gold italic">Melampaui Ekspektasi.</span>
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mb-10 leading-relaxed">
          Kami menghadirkan solusi arsitektur dan konstruksi kelas atas yang mencerminkan keindahan, ketahanan, dan karakter unik setiap klien.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-gold hover:bg-gold-light text-dark-bg text-lg px-8 py-6 rounded-none font-heading tracking-wide">
            Lihat Portofolio
          </Button>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 text-lg px-8 py-6 rounded-none font-heading tracking-wide">
            Konsultasi Gratis
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/5 border-y border-white/10 py-6 flex flex-col md:flex-row justify-around items-center gap-6">
            <div className="text-center">
              <span className="block font-serif text-3xl text-gold mb-1">10+</span>
              <span className="font-heading text-xs uppercase tracking-widest text-white/70">Tahun Pengalaman</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="text-center">
              <span className="block font-serif text-3xl text-gold mb-1">100+</span>
              <span className="font-heading text-xs uppercase tracking-widest text-white/70">Proyek Selesai</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="text-center">
              <span className="block font-serif text-3xl text-gold mb-1">50+</span>
              <span className="font-heading text-xs uppercase tracking-widest text-white/70">Klien Puas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden md:block">
        <ChevronDown className="text-gold w-8 h-8 opacity-70" />
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
