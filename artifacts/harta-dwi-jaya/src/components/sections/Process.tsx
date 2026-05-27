import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, FileSignature, HardHat, KeyRound } from "lucide-react";

const steps = [
  { icon: <MessageSquare />, title: "Konsultasi Awal", desc: "Kami mendengarkan visi, kebutuhan, dan anggaran Anda secara mendalam. Tidak ada biaya untuk sesi konsultasi pertama." },
  { icon: <PenTool />, title: "Desain & Perencanaan", desc: "Tim arsitek kami menyusun konsep, gambar kerja detail, estimasi biaya, dan jadwal proyek yang terstruktur." },
  { icon: <FileSignature />, title: "Persetujuan & Kontrak", desc: "Anda menyetujui desain final dan kami formalkan kesepakatan secara transparan dan tertulis — tidak ada biaya tersembunyi." },
  { icon: <HardHat />, title: "Konstruksi", desc: "Proses pembangunan berjalan dengan pengawasan penuh, laporan progres berkala, dan komunikasi terbuka setiap saat." },
  { icon: <KeyRound />, title: "Finishing & Serah Terima", desc: "Kami menyelesaikan setiap detail dengan teliti, melakukan inspeksi akhir bersama Anda, dan menyerahkan bangunan dalam kondisi sempurna." }
];

export default function Process() {
  return (
    <section id="proses" className="py-24 bg-dark-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_2_ok38cd.webp')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold font-heading uppercase tracking-[0.2em] text-sm mb-4">
            ✦ Cara Kami Bekerja ✦
          </p>
          <h2 className="text-4xl md:text-5xl font-serif">
            Proses Transparan dari<br />Konsultasi hingga Serah Terima
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector Line Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[2px] border-t-2 border-dashed border-gold/30"></div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 justify-between">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex-1"
              >
                {/* Connector Line Mobile */}
                {idx !== steps.length - 1 && (
                  <div className="block lg:hidden absolute top-20 left-[44px] w-[2px] h-full border-l-2 border-dashed border-gold/30"></div>
                )}
                
                <div className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-8">
                  <div className="relative z-10 w-[88px] h-[88px] rounded-full border border-gold bg-dark-bg flex items-center justify-center shrink-0">
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold text-dark-bg flex items-center justify-center font-heading font-bold text-sm">
                      {idx + 1}
                    </span>
                    <div className="text-gold w-8 h-8">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="lg:text-center mt-2 lg:mt-0">
                    <h3 className="text-xl font-heading font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70 font-sans font-light leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
