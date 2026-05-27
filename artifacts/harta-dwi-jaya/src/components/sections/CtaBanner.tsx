import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="relative py-32 bg-dark-bg text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_2_ok38cd.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            Siap Membangun Sesuatu yang <span className="italic text-gold">Luar Biasa?</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-white/80 mb-10 font-sans max-w-2xl mx-auto">
            Kami siap mendengar dan mewujudkan visi Anda. Konsultasi pertama gratis — tanpa kewajiban apapun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold hover:bg-gold-light text-dark-bg text-lg px-8 py-6 rounded-none font-heading tracking-wide">
              Konsultasi Sekarang
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-none font-heading tracking-wide">
              Lihat Portofolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
