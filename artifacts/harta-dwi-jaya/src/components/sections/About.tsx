import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration: number = 2000, enabled: boolean = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, enabled]);
  return count;
}

function StatItem({ value, label, delay }: { value: number; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(value, 2000, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <span className="block font-serif text-[2.8rem] leading-none text-[#A08050] mb-1">
        {count}+
      </span>
      <span className="font-sans text-sm text-[#6B6577]">{label}</span>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="tentang" className="py-28 bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#A08050] font-heading uppercase tracking-[0.3em] text-xs mb-5 font-bold"
            >
              — TENTANG KAMI —
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-[#1A1A2E] leading-[1.15] tracking-[-0.02em] mb-8"
            >
              Dibangun di Atas<br />
              <span className="text-[#A08050] italic">Dedikasi &amp; Keahlian.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 text-[#1A1A2E]/75 font-sans text-base font-light leading-[1.75] mb-10"
            >
              <p>
                CV Harta Dwi Jaya adalah perusahaan arsitektur dan kontraktor yang berbasis
                di Bali, berdiri dengan satu visi: menghadirkan bangunan berkualitas tinggi
                yang mencerminkan karakter, keindahan, dan ketahanan jangka panjang.
              </p>
              <p>
                Dengan tim profesional yang berpengalaman di bidang desain, struktur, dan
                manajemen proyek, kami menangani setiap pekerjaan — dari tahap perencanaan
                hingga finishing akhir — dengan standar eksekusi yang tidak pernah kami
                kompromikan.
              </p>
              <p>
                Kami percaya bahwa setiap ruang memiliki cerita. Tugas kami adalah
                menceritakannya melalui arsitektur yang indah dan konstruksi yang solid.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-t border-[#A08050]/30 pt-8 grid grid-cols-3 gap-4 mb-10"
            >
              <StatItem value={10} label="Tahun Pengalaman" delay={0.35} />
              <StatItem value={100} label="Proyek Diselesaikan" delay={0.45} />
              <StatItem value={50} label="Klien Puas" delay={0.55} />
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                const el = document.getElementById("kontak");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-[#A08050] font-heading font-semibold hover:text-[#C8A96E] transition-colors uppercase tracking-wider text-sm group"
            >
              Kenali Lebih Lanjut
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </motion.button>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-[0_8px_40px_rgba(13,13,20,0.20)]">
              <img
                src="https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_1_sx4io4.webp"
                alt="Proyek arsitektur CV Harta Dwi Jaya Bali"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-[#0D0D14] p-5 border-l-[3px] border-[#C8A96E] shadow-[0_16px_64px_rgba(13,13,20,0.30)] max-w-[200px] rounded-r-md"
              style={{ animation: "wa-float 4s ease-in-out infinite" }}
            >
              <p className="text-[#F0EBE0]/60 font-heading text-[0.65rem] uppercase tracking-[0.15em] mb-1">
                Berpengalaman
              </p>
              <p className="text-[#C8A96E] font-serif text-3xl leading-none">Sejak 2010</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
