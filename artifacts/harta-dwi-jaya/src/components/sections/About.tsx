import React from "react";

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-light-bg text-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gold-dark font-heading uppercase tracking-[0.3em] text-sm mb-4 font-bold">
              — Tentang Kami —
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-8">
              Dibangun di Atas<br />
              <span className="text-gold-dark italic">Dedikasi & Keahlian.</span>
            </h2>
            
            <div className="space-y-6 text-foreground/80 font-sans text-lg font-light leading-relaxed mb-10">
              <p>
                CV Harta Dwi Jaya adalah perusahaan arsitektur dan kontraktor yang berbasis di Bali, berdiri dengan satu visi: menghadirkan bangunan berkualitas tinggi yang mencerminkan karakter, keindahan, dan ketahanan jangka panjang.
              </p>
              <p>
                Dengan tim profesional yang berpengalaman di bidang desain, struktur, dan manajemen proyek, kami menangani setiap pekerjaan — dari tahap perencanaan hingga finishing akhir — dengan standar eksekusi yang tidak pernah kami kompromikan.
              </p>
              <p>
                Kami percaya bahwa setiap ruang memiliki cerita. Tugas kami adalah menceritakannya melalui arsitektur yang indah dan konstruksi yang solid.
              </p>
            </div>

            <a href="#tim" className="inline-flex items-center text-gold-dark font-heading font-semibold hover:text-gold-dark/80 transition-colors uppercase tracking-wider text-sm">
              Kenali Tim Kami &rarr;
            </a>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img 
                src="https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_1_sx4io4.webp" 
                alt="Proyek Harta Dwi Jaya"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-dark-bg p-8 border-l-4 border-gold shadow-xl max-w-[240px]">
              <p className="text-white/60 font-heading text-sm uppercase tracking-widest mb-1">Berpengalaman</p>
              <p className="text-gold font-serif text-4xl">Sejak 2010</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
