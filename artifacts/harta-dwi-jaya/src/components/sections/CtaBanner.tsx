import React from "react";
import { motion } from "framer-motion";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function CtaBanner() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_2_ok38cd.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D14]/80 via-[#0D0D14]/88 to-[#0D0D14]/95" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-px bg-[#C8A96E] mx-auto mb-8" />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-[1.15] tracking-[-0.02em]">
            Siap Membangun Sesuatu yang{" "}
            <span className="italic text-[#C8A96E]">Luar Biasa?</span>
          </h2>

          <p className="text-lg md:text-xl font-light text-[#F0EBE0]/80 mb-10 font-sans max-w-xl mx-auto leading-relaxed">
            Kami siap mendengar dan mewujudkan visi Anda. Konsultasi pertama gratis — tanpa kewajiban apapun.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("kontak")}
              className="bg-[#C8A96E] hover:bg-[#E2C98A] text-[#0D0D14] font-heading font-semibold uppercase tracking-[0.08em] px-10 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[0_4px_24px_rgba(200,169,110,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Konsultasi Sekarang
            </button>
            <button
              onClick={() => scrollTo("portofolio")}
              className="border border-white/40 text-white hover:bg-white/10 font-heading font-semibold uppercase tracking-[0.08em] px-10 py-4 rounded-full text-sm transition-all duration-300"
            >
              Lihat Portofolio
            </button>
          </div>

          <div className="w-16 h-px bg-[#C8A96E] mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
